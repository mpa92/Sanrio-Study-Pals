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

// ═══════════════════════════════════════════════════════════════════════════════
// ALARM HANDLERS
// ═══════════════════════════════════════════════════════════════════════════════

// Create timer alarm
function startTimerAlarm(minutes) {
  timerState.isRunning = true;
  timerState.isPaused = false;
  timerState.duration = minutes;
  timerState.remaining = minutes * 60;
  timerState.startTime = Date.now();
  
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
}

// Stop timer alarm
function stopTimerAlarm() {
  timerState.isRunning = false;
  timerState.isPaused = false;
  
  chrome.alarms.clear('studyTimer');
  chrome.alarms.clear('timerTick');
  
  clearBadge();
  resetMilestones();
}

// Pause timer
function pauseTimer() {
  if (timerState.isRunning && !timerState.isPaused) {
    timerState.isPaused = true;
    timerState.pausedAt = Date.now();
    
    // Calculate remaining time
    const elapsed = Math.floor((Date.now() - timerState.startTime) / 1000);
    timerState.remaining = (timerState.duration * 60) - elapsed;
    
    chrome.alarms.clear('studyTimer');
    chrome.alarms.clear('timerTick');
  }
}

// Resume timer
function resumeTimer() {
  if (timerState.isRunning && timerState.isPaused) {
    timerState.isPaused = false;
    timerState.startTime = Date.now() - ((timerState.duration * 60 - timerState.remaining) * 1000);
    
    // Reset alarm with remaining time
    const remainingMinutes = timerState.remaining / 60;
    chrome.alarms.create('studyTimer', {
      delayInMinutes: remainingMinutes
    });
    
    chrome.alarms.create('timerTick', {
      periodInMinutes: 1
    });
    
    updateBadge();
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
  
  const elapsed = Math.floor((Date.now() - timerState.startTime) / 1000);
  const remaining = Math.max(0, (timerState.duration * 60) - elapsed);
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

function showCompletionNotification() {
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

function showReminderNotification() {
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

function showMilestoneNotification(milestone) {
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

function showStreakNotification(type, streakDays) {
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

function checkMilestones() {
  if (!timerState.isRunning || timerState.isPaused) return;
  
  const elapsed = Math.floor((Date.now() - timerState.startTime) / 1000);
  const totalSeconds = timerState.duration * 60;
  const remaining = Math.max(0, totalSeconds - elapsed);
  const progress = elapsed / totalSeconds;
  
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
      // Session complete! Store for claiming when popup opens
      timerState.completedSession = {
        duration: timerState.duration,
        completedAt: Date.now()
      };
      timerState.isRunning = false;
      timerState.remaining = 0;
      
      showCompletionNotification();
      clearBadge();
      
      chrome.alarms.clear('timerTick');
      
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
      startTimerAlarm(message.duration);
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
      // Calculate current remaining time
      if (timerState.isRunning && !timerState.isPaused) {
        const elapsed = Math.floor((Date.now() - timerState.startTime) / 1000);
        timerState.remaining = Math.max(0, (timerState.duration * 60) - elapsed);
        
        // Check if timer completed while calculating
        if (timerState.remaining <= 0) {
          timerState.completedSession = {
            duration: timerState.duration,
            completedAt: Date.now()
          };
          timerState.isRunning = false;
          chrome.alarms.clear('studyTimer');
          chrome.alarms.clear('timerTick');
          clearBadge();
        }
      }
      sendResponse(timerState);
      break;
      
    case 'claimSession':
      // Return and clear completed session
      const session = timerState.completedSession;
      timerState.completedSession = null;
      sendResponse({ session: session });
      break;
      
    case 'sessionComplete':
      showCompletionNotification();
      stopTimerAlarm();
      sendResponse({ success: true });
      break;
      
    case 'streakNotification':
      showStreakNotification(message.type, message.streakDays);
      sendResponse({ success: true });
      break;
  }
  
  return true; // Keep message channel open for async response
});

// ═══════════════════════════════════════════════════════════════════════════════
// IDLE DETECTION
// ═══════════════════════════════════════════════════════════════════════════════

chrome.idle.onStateChanged.addListener((state) => {
  if (timerState.isRunning && !timerState.isPaused) {
    if (state === 'idle' || state === 'locked') {
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

