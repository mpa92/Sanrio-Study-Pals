/**
 * 🎀 Sanrio Study Pals - Background Service Worker
 * Handles persistent timer tracking and notifications
 */

// ═══════════════════════════════════════════════════════════════════════════════
// TIMER STATE
// ═══════════════════════════════════════════════════════════════════════════════

let timerState = {
  isRunning: false,
  isPaused: false,
  duration: 25,
  remaining: 25 * 60,
  startTime: null,
  pausedAt: null,
  completedSession: null  // Tracks completed session awaiting claim
};

// Load timer state from storage on startup
async function loadTimerState() {
  try {
    const result = await chrome.storage.local.get('timerState');
    if (result.timerState) {
      const restored = result.timerState;
      // Validate restored state to prevent corrupted data from causing issues
      if (typeof restored.isRunning === 'boolean' &&
          typeof restored.isPaused === 'boolean' &&
          (restored.duration === undefined || (typeof restored.duration === 'number' && restored.duration > 0 && restored.duration <= 180)) &&
          (restored.remaining === undefined || (typeof restored.remaining === 'number' && restored.remaining >= 0))) {
        timerState = { ...timerState, ...restored };
        console.log('Restored timer state from storage:', timerState);
      } else {
        console.warn('Invalid timer state in storage, using defaults:', restored);
        // Keep default timerState
      }
    }
  } catch (e) {
    console.error('Error loading timer state:', e);
  }
}

// Save timer state to storage
async function saveTimerState() {
  try {
    await chrome.storage.local.set({ timerState: timerState });
  } catch (e) {
    console.error('Error saving timer state:', e);
  }
}

// Initialize: load state on startup
loadTimerState();

// ═══════════════════════════════════════════════════════════════════════════════
// ALARM HANDLERS
// ═══════════════════════════════════════════════════════════════════════════════

// Create timer alarm
function startTimerAlarm(minutes) {
  // CRITICAL: Clear any existing alarms first to prevent duplicates
  // This is important if startTimer is called while a timer is already running
  chrome.alarms.clear('studyTimer');
  chrome.alarms.clear('timerTick');
  
  timerState.isRunning = true;
  timerState.isPaused = false;
  timerState.duration = minutes;
  timerState.remaining = minutes * 60;
  timerState.startTime = Date.now();
  timerState.pausedAt = null;
  timerState.completedSession = null; // Clear any pending completed session
  
  // Reset milestone notifications for new session
  resetMilestones();
  
  // Set alarm for completion
  chrome.alarms.create('studyTimer', {
    delayInMinutes: minutes
  });
  
  // Set alarm for tick (every 30 seconds for milestone checks)
  chrome.alarms.create('timerTick', {
    periodInMinutes: 0.5
  });
  
  updateBadge();
  saveTimerState(); // Persist state
}

// Stop timer alarm
function stopTimerAlarm() {
  timerState.isRunning = false;
  timerState.isPaused = false;
  timerState.startTime = null;
  timerState.pausedAt = null;
  timerState.remaining = 25 * 60;
  timerState.completedSession = null; // Clear any pending completed session when stopping
  
  chrome.alarms.clear('studyTimer');
  chrome.alarms.clear('timerTick');
  
  clearBadge();
  resetMilestones();
  saveTimerState(); // Persist state
}

// Pause timer
function pauseTimer() {
  if (timerState.isRunning && !timerState.isPaused) {
    timerState.isPaused = true;
    timerState.pausedAt = Date.now();
    
    // Calculate remaining time - validate startTime and duration
    if (timerState.startTime && timerState.startTime > 0) {
      const elapsed = Math.floor((Date.now() - timerState.startTime) / 1000);
      const validDuration = timerState.duration || 25;
      timerState.remaining = Math.max(0, (validDuration * 60) - elapsed);
    } else {
      // If startTime is invalid, use the current remaining value
      console.warn('Invalid startTime when pausing, preserving current remaining time');
    }
    
    chrome.alarms.clear('studyTimer');
    chrome.alarms.clear('timerTick');
    saveTimerState(); // Persist paused state
  }
}

// Resume timer
function resumeTimer() {
  if (timerState.isRunning && timerState.isPaused) {
    timerState.isPaused = false;
    
    // Validate duration and remaining time before calculations
    const validDuration = timerState.duration || 25;
    const validRemaining = Math.max(0, Math.min(timerState.remaining, validDuration * 60));
    
    // Calculate how much time has elapsed so far
    const elapsedBeforePause = (validDuration * 60) - validRemaining;
    // Adjust startTime to account for the elapsed time
    timerState.startTime = Date.now() - (elapsedBeforePause * 1000);
    timerState.pausedAt = null;
    timerState.remaining = validRemaining; // Update with validated value
    
    // Clear any existing alarms first to prevent duplicates
    chrome.alarms.clear('studyTimer');
    chrome.alarms.clear('timerTick');
    
    // Reset alarm with remaining time
    const remainingMinutes = validRemaining / 60;
    if (remainingMinutes > 0) {
      chrome.alarms.create('studyTimer', {
        delayInMinutes: remainingMinutes
      });
      
      chrome.alarms.create('timerTick', {
        periodInMinutes: 0.5
      });
    } else {
      // If no time remaining, complete the session
      timerState.completedSession = {
        duration: validDuration,
        completedAt: Date.now()
      };
      timerState.isRunning = false;
      timerState.isPaused = false;
      clearBadge();
      // Save state and show notification for completed session
      saveTimerState();
      showCompletionNotification();
    }
    
    updateBadge();
    saveTimerState(); // Persist state
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// BADGE UPDATES
// ═══════════════════════════════════════════════════════════════════════════════

function updateBadge() {
  if (!timerState.isRunning || timerState.isPaused) {
    clearBadge();
    return;
  }
  
  // Validate startTime and duration before calculating
  if (!timerState.startTime || timerState.startTime <= 0) {
    clearBadge();
    return;
  }
  
  const elapsed = Math.floor((Date.now() - timerState.startTime) / 1000);
  const validDuration = timerState.duration || 25;
  const remaining = Math.max(0, (validDuration * 60) - elapsed);
  const minutes = Math.ceil(remaining / 60);
  
  chrome.action.setBadgeText({ text: `${minutes}m` });
  chrome.action.setBadgeBackgroundColor({ color: '#7fc4d6' });
}

function clearBadge() {
  chrome.action.setBadgeText({ text: '' });
}

// ═══════════════════════════════════════════════════════════════════════════════
// NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════════════════════

// Track which milestones we've already notified
let notifiedMilestones = {
  halfway: false,
  quarterLeft: false,
  fiveMin: false,
  oneMin: false
};

function resetMilestones() {
  notifiedMilestones = {
    halfway: false,
    quarterLeft: false,
    fiveMin: false,
    oneMin: false
  };
}

async function showCompletionNotification() {
  // Check if notifications are enabled in settings
  try {
    const result = await chrome.storage.local.get('sanrioStudyPals');
    const settings = result.sanrioStudyPals?.settings;
    if (settings && settings.notificationsEnabled === false) {
      console.log('Notifications disabled, skipping completion notification');
      resetMilestones();
      return;
    }
  } catch (e) {
    console.error('Error checking notification settings:', e);
  }
  
  try {
    chrome.notifications.create('sessionComplete_' + Date.now(), {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: '🎀✨ Session Complete! ✨🎀',
      message: 'Amazing job studying! Your Sanrio pal is SO proud of you! 💖🌟',
      priority: 2,
      requireInteraction: true
    }, (notificationId) => {
      console.log('Completion notification created:', notificationId);
    });
  } catch (e) {
    console.error('Notification error:', e);
  }
  resetMilestones();
}

async function showReminderNotification() {
  // Check if notifications are enabled in settings
  try {
    const result = await chrome.storage.local.get('sanrioStudyPals');
    const settings = result.sanrioStudyPals?.settings;
    if (settings && settings.notificationsEnabled === false) {
      console.log('Notifications disabled, skipping reminder notification');
      return;
    }
  } catch (e) {
    console.error('Error checking notification settings:', e);
  }
  
  chrome.notifications.create('studyReminder', {
    type: 'basic',
    iconUrl: 'icons/icon128.png',
    title: '🌸 Time to Study!',
    message: 'Your Sanrio study pal is waiting for you! Ready to focus?',
    priority: 1
  });
}

// Cute milestone notifications
const milestoneMessages = {
  halfway: [
    { title: '🎯 Halfway There!', message: "You're doing amazing! Keep that focus going! 💪✨" },
    { title: '⭐ 50% Complete!', message: "Wow, halfway done already! Your study pal believes in you! 🌸" },
    { title: '🌟 Great Progress!', message: "Half the journey done! You've got this! 💖" }
  ],
  quarterLeft: [
    { title: '🔥 Almost There!', message: "Just 25% left! The finish line is in sight! 🏁✨" },
    { title: '💫 Final Stretch!', message: "You're SO close! Your pal is cheering for you! 📣💕" },
    { title: '🌈 Keep Going!', message: "Almost done! Stay strong, superstar! ⭐" }
  ],
  fiveMin: [
    { title: '⏰ 5 Minutes Left!', message: "Final countdown! You can do it! 💪🎀" },
    { title: '🎊 Nearly Done!', message: "Just 5 more minutes! Finish strong! 🌟" },
    { title: '✨ So Close!', message: "5 minutes to victory! Your pal is excited! 🎉" }
  ],
  oneMin: [
    { title: '🎉 Final Minute!', message: "ONE minute left! You're a STAR! ⭐💖" },
    { title: '🏆 Almost Victory!', message: "60 seconds to go! Amazing work! 🌸✨" },
    { title: '💖 Last Push!', message: "The final minute! You did it! 🎀🎊" }
  ]
};

async function showMilestoneNotification(milestone) {
  // Check if notifications are enabled in settings
  try {
    const result = await chrome.storage.local.get('sanrioStudyPals');
    const settings = result.sanrioStudyPals?.settings;
    if (settings && settings.notificationsEnabled === false) {
      console.log('Notifications disabled, skipping milestone notification');
      return;
    }
  } catch (e) {
    console.error('Error checking notification settings:', e);
  }
  
  try {
    const messages = milestoneMessages[milestone];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    
    chrome.notifications.create(`milestone_${milestone}_${Date.now()}`, {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: msg.title,
      message: msg.message,
      priority: 1
    }, (notificationId) => {
      console.log('Milestone notification created:', notificationId);
    });
  } catch (e) {
    console.error('Milestone notification error:', e);
  }
}

async function showStreakNotification(type, streakDays) {
  // Check if notifications are enabled in settings
  try {
    const result = await chrome.storage.local.get('sanrioStudyPals');
    const settings = result.sanrioStudyPals?.settings;
    if (settings && settings.notificationsEnabled === false) {
      console.log('Notifications disabled, skipping streak notification');
      return;
    }
  } catch (e) {
    console.error('Error checking notification settings:', e);
  }
  
  try {
    let title = '';
    let message = '';
    
    if (type === 'started') {
      title = '🔥 Streak Started!';
      message = `You've started a ${streakDays}-day study streak! Keep it up! 💪`;
    } else if (type === 'continued') {
      title = `🔥 ${streakDays}-Day Streak!`;
      const messages = [
        `Amazing! You're on day ${streakDays}! Your study pal is so proud! 🌟`,
        `Day ${streakDays} of your streak! You're doing incredible! ✨`,
        `Wow! ${streakDays} days in a row! Keep going! 💖`,
        `Day ${streakDays}! Your dedication is inspiring! 🎀`
      ];
      message = messages[Math.floor(Math.random() * messages.length)];
    } else if (type === 'lost') {
      title = '💔 Streak Lost';
      if (streakDays >= 14) {
        message = `Oh no! You lost your ${streakDays}-day streak! Your study pal is heartbroken... 😢`;
      } else if (streakDays >= 7) {
        message = `You lost your ${streakDays}-day streak! Your study pal missed you... 💔`;
      } else {
        message = `Your ${streakDays}-day streak was reset. Don't give up! 💪`;
      }
    }
    
    chrome.notifications.create(`streak_${type}_${Date.now()}`, {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: title,
      message: message,
      priority: 2
    }, (notificationId) => {
      console.log('Streak notification created:', notificationId);
    });
  } catch (e) {
    console.error('Streak notification error:', e);
  }
}

// Helper function to calculate and return timer state
function calculateAndReturnTimerState(sendResponse) {
  // If timer was running (not paused) when browser closed, we need to check if alarms exist
  // If no alarms exist, the timer was interrupted by browser close - mark as paused
  if (timerState.isRunning && !timerState.isPaused && timerState.startTime) {
    // Check if alarms actually exist (they wouldn't if browser was closed)
    try {
      // Set a timeout to ensure sendResponse is always called
      let responseSent = false;
      const timeoutId = setTimeout(() => {
        if (!responseSent) {
          console.warn('Alarm check timeout, returning current state');
          responseSent = true;
          sendResponse({
            isRunning: timerState.isRunning,
            isPaused: timerState.isPaused,
            duration: timerState.duration,
            remaining: timerState.remaining,
            startTime: timerState.startTime,
            completedSession: timerState.completedSession
          });
        }
      }, 5000); // 5 second timeout
      
      chrome.alarms.getAll((alarms) => {
        try {
          if (responseSent) return; // Already sent response due to timeout
          
          clearTimeout(timeoutId);
          responseSent = true;
          
          // Handle potential undefined/null alarms
          const alarmList = alarms || [];
          const hasTimerAlarm = alarmList.some(a => a && (a.name === 'studyTimer' || a.name === 'timerTick'));
          
          if (!hasTimerAlarm) {
            // Browser was closed while timer was running - pause it to preserve remaining time
            const elapsed = Math.floor((Date.now() - timerState.startTime) / 1000);
            const validDuration = timerState.duration || 25;
            timerState.remaining = Math.max(0, (validDuration * 60) - elapsed);
            timerState.isPaused = true;
            timerState.pausedAt = Date.now();
            saveTimerState();
          } else {
            // Alarms exist, timer is actually running - calculate remaining time normally
            const elapsed = Math.floor((Date.now() - timerState.startTime) / 1000);
            const validDuration = timerState.duration || 25;
            timerState.remaining = Math.max(0, (validDuration * 60) - elapsed);
            
            // Check if timer completed while calculating - verify full duration elapsed
            const expectedDurationSeconds = validDuration * 60;
            if (timerState.remaining <= 0 && elapsed >= expectedDurationSeconds && !timerState.completedSession) {
              timerState.completedSession = {
                duration: validDuration,
                completedAt: Date.now()
              };
              timerState.isRunning = false;
              timerState.remaining = 0;
              chrome.alarms.clear('studyTimer');
              chrome.alarms.clear('timerTick');
              clearBadge();
              saveTimerState();
            }
          }
          
          // Return state after checking alarms
          sendResponse({
            isRunning: timerState.isRunning,
            isPaused: timerState.isPaused,
            duration: timerState.duration,
            remaining: timerState.remaining,
            startTime: timerState.startTime,
            completedSession: timerState.completedSession
          });
        } catch (error) {
          // If error occurs, ensure timeout is cleared and response is sent
          clearTimeout(timeoutId);
          if (!responseSent) {
            console.error('Error in alarm check callback:', error);
            responseSent = true;
            sendResponse({
              isRunning: timerState.isRunning,
              isPaused: timerState.isPaused,
              duration: timerState.duration,
              remaining: timerState.remaining,
              startTime: timerState.startTime,
              completedSession: timerState.completedSession
            });
          }
        }
      });
    } catch (e) {
      console.error('Error checking alarms:', e);
      // Fallback: return current state if alarm check fails
      sendResponse({
        isRunning: timerState.isRunning,
        isPaused: timerState.isPaused,
        duration: timerState.duration,
        remaining: timerState.remaining,
        startTime: timerState.startTime,
        completedSession: timerState.completedSession
      });
    }
  } else if (timerState.isRunning && timerState.isPaused && timerState.pausedAt) {
    // If paused, remaining time should already be calculated and saved
    // The remaining time was saved when paused, so we can trust it
    sendResponse({
      isRunning: timerState.isRunning,
      isPaused: timerState.isPaused,
      duration: timerState.duration,
      remaining: timerState.remaining,
      startTime: timerState.startTime,
      completedSession: timerState.completedSession
    });
  } else {
    // Timer not running
    sendResponse({
      isRunning: timerState.isRunning,
      isPaused: timerState.isPaused,
      duration: timerState.duration,
      remaining: timerState.remaining,
      startTime: timerState.startTime,
      completedSession: timerState.completedSession
    });
  }
}

function checkMilestones() {
  if (!timerState.isRunning || timerState.isPaused) return;
  
  // Validate startTime before using it
  if (!timerState.startTime || timerState.startTime <= 0) {
    console.warn('Invalid startTime in checkMilestones');
    return;
  }
  
  const elapsed = Math.floor((Date.now() - timerState.startTime) / 1000);
  // Validate duration to prevent calculation errors
  const validDuration = timerState.duration || 25;
  const totalSeconds = validDuration * 60;
  const remaining = Math.max(0, totalSeconds - elapsed);
  const progress = totalSeconds > 0 ? elapsed / totalSeconds : 0;
  
  // Halfway (50%)
  if (progress >= 0.5 && !notifiedMilestones.halfway) {
    notifiedMilestones.halfway = true;
    showMilestoneNotification('halfway');
  }
  
  // 75% done (25% remaining)
  if (progress >= 0.75 && !notifiedMilestones.quarterLeft) {
    notifiedMilestones.quarterLeft = true;
    showMilestoneNotification('quarterLeft');
  }
  
  // 5 minutes left
  if (remaining <= 300 && remaining > 60 && !notifiedMilestones.fiveMin && totalSeconds > 300) {
    notifiedMilestones.fiveMin = true;
    showMilestoneNotification('fiveMin');
  }
  
  // 1 minute left
  if (remaining <= 60 && remaining > 0 && !notifiedMilestones.oneMin) {
    notifiedMilestones.oneMin = true;
    showMilestoneNotification('oneMin');
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// ALARM LISTENER
// ═══════════════════════════════════════════════════════════════════════════════

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'studyTimer') {
    // Prevent double notification - only if not already completed
    if (!timerState.completedSession) {
      // Validate duration before storing completed session
      const validDuration = timerState.duration || 25;
      
      // Session complete! Store for claiming when popup opens
      timerState.completedSession = {
        duration: validDuration,
        completedAt: Date.now()
      };
      timerState.isRunning = false;
      timerState.remaining = 0;
      
      showCompletionNotification();
      clearBadge();
      
      chrome.alarms.clear('timerTick');
      saveTimerState(); // Persist state
      
      console.log('Session completed in background:', timerState.completedSession);
    }
  }
  
  if (alarm.name === 'timerTick') {
    updateBadge();
    checkMilestones(); // Check for milestone notifications
  }
  
  if (alarm.name === 'dailyReminder') {
    showReminderNotification();
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// MESSAGE LISTENER
// ═══════════════════════════════════════════════════════════════════════════════

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.action) {
    case 'startTimer':
      // Validate duration before starting timer
      const duration = message.duration;
      if (!duration || duration <= 0 || duration > 180 || isNaN(duration)) {
        console.error('Invalid duration in startTimer:', duration);
        sendResponse({ success: false, error: 'Invalid duration' });
        return true;
      }
      startTimerAlarm(duration);
      sendResponse({ success: true });
      break;
      
    case 'stopTimer':
      stopTimerAlarm();
      sendResponse({ success: true });
      break;
      
    case 'pauseTimer':
      pauseTimer();
      sendResponse({ success: true });
      break;
      
    case 'resumeTimer':
      resumeTimer();
      sendResponse({ success: true });
      break;
      
    case 'getTimerState':
      // Always try to restore from storage first (in case browser was closed/reopened)
      // Storage is the source of truth after service worker restarts
      // This ensures paused timers persist across browser restarts
      loadTimerState().then(() => {
        calculateAndReturnTimerState(sendResponse);
      }).catch((error) => {
        console.error('Error loading timer state for getTimerState:', error);
        // Still return current state even if load fails
        calculateAndReturnTimerState(sendResponse);
      });
      return true; // Keep channel open for async
      
    case 'claimSession':
      // Return and clear completed session
      const session = timerState.completedSession;
      timerState.completedSession = null;
      saveTimerState(); // Persist state
      sendResponse({ session: session });
      break;
      
    case 'sessionComplete':
      showCompletionNotification();
      stopTimerAlarm();
      sendResponse({ success: true });
      break;
      
    case 'streakNotification':
      // Validate parameters
      const streakType = message.type;
      const streakDays = message.streakDays;
      if (streakType && (streakDays === undefined || streakDays < 0 || isNaN(streakDays))) {
        console.error('Invalid streak notification parameters:', message);
        sendResponse({ success: false, error: 'Invalid parameters' });
        return true;
      }
      showStreakNotification(streakType, streakDays);
      sendResponse({ success: true });
      break;
      
    default:
      console.warn('Unknown message action:', message.action);
      sendResponse({ success: false, error: 'Unknown action' });
      break;
  }
  
  return true; // Keep message channel open for async response
});

// ═══════════════════════════════════════════════════════════════════════════════
// IDLE DETECTION
// ═══════════════════════════════════════════════════════════════════════════════

chrome.idle.onStateChanged.addListener(async (state) => {
  if (timerState.isRunning && !timerState.isPaused) {
    if (state === 'idle' || state === 'locked') {
      // Check if notifications are enabled before showing idle warning
      try {
        const result = await chrome.storage.local.get('sanrioStudyPals');
        const settings = result.sanrioStudyPals?.settings;
        if (settings && settings.notificationsEnabled === false) {
          console.log('Notifications disabled, skipping idle warning');
          return;
        }
      } catch (e) {
        console.error('Error checking notification settings:', e);
      }
      
      // User went idle - could pause timer or show notification
      chrome.notifications.create('idleWarning', {
        type: 'basic',
        iconUrl: 'icons/icon128.png',
        title: '😿 Where did you go?',
        message: 'Your study pal misses you! Come back to continue your session.',
        priority: 1
      });
    }
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// NOTIFICATION CLICK HANDLER
// ═══════════════════════════════════════════════════════════════════════════════

chrome.notifications.onClicked.addListener((notificationId) => {
  // Open popup when notification is clicked
  chrome.action.openPopup();
  chrome.notifications.clear(notificationId);
});

// ═══════════════════════════════════════════════════════════════════════════════
// INSTALLATION HANDLER
// ═══════════════════════════════════════════════════════════════════════════════

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Welcome notification
    chrome.notifications.create('welcome', {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: '🎀 Welcome to Sanrio Study Pals!',
      message: 'Click the extension icon to start studying with your new friends! 💕',
      priority: 2
    });
  }
});

// ═══════════════════════════════════════════════════════════════════════════════
// KEEP ALIVE (for Manifest V3)
// ═══════════════════════════════════════════════════════════════════════════════

// Periodic check to keep service worker alive during active session
setInterval(() => {
  if (timerState.isRunning && !timerState.isPaused) {
    updateBadge();
    checkMilestones();
  }
}, 15000); // Check every 15 seconds

console.log('🎀 Sanrio Study Pals background service worker started!');

