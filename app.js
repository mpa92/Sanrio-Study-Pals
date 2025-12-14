/**
 * 🎀 Sanrio Study Pals - Main Application
 * A cozy study companion Chrome extension
 */

// ═══════════════════════════════════════════════════════════════════════════════
// CHARACTER DATA
// ═══════════════════════════════════════════════════════════════════════════════

const CHARACTERS = {
  cinnamoroll: {
    id: 'cinnamoroll',
    name: 'Cinnamoroll',
    emoji: '☁️',
    sprite: '🐕',
    image: 'icons/cinnamonroll_character-removebg-preview.png',
    theme: 'cinnamoroll',
    mood: 'Café + cloud theme',
    environment: 'Dreamy café with pastries',
    unlockRequirement: 0,
    dialogues: {
      1: [
        "Hi! Ready to study together? ☁️",
        "Let's float through this together!",
        "I brought some pastries for us! 🧁",
        "Nice to meet you! I'm Cinnamoroll!",
        "Let's do our best today!"
      ],
      2: [
        "You're getting really good at focusing!",
        "Want to grab a coffee break after? ☕",
        "I like studying with you!",
        "We make a great team!",
        "Keep up the amazing work!"
      ],
      3: [
        "We're such great study buddies now!",
        "I saved you the best pastry! 🥐",
        "Your dedication inspires me!",
        "Let's reach for the clouds together!",
        "I'm so glad we're friends!"
      ],
      4: [
        "You're my favorite study partner ever!",
        "I look forward to every session with you!",
        "Let's make today magical! ✨",
        "Nothing can stop us together!",
        "You make studying so fun!"
      ],
      5: [
        "You're my best friend! 💕",
        "We've accomplished so much together!",
        "I'm so proud of how far we've come!",
        "Forever study buddies! 🌟",
        "You're amazing, you know that?"
      ]
    },
    emotes: ['☁️', '✨', '💫', '☕', '🧁', '💙']
  },
  hellokitty: {
    id: 'hellokitty',
    name: 'Hello Kitty',
    emoji: '🍎',
    sprite: '🐱',
    image: 'icons/hellokitty_character-removebg-preview.png',
    theme: 'hellokitty',
    mood: 'Classic school vibe',
    environment: 'Cute classroom with apples',
    unlockRequirement: 100,
    dialogues: {
      1: [
        "Hello! Let's study together! 🎀",
        "I packed some apple slices for us!",
        "Ready to learn new things?",
        "School time is the best time!",
        "Let's make today productive!"
      ],
      2: [
        "You're such a hard worker!",
        "I'm proud of your progress!",
        "Let's keep this momentum going!",
        "You're doing wonderfully!",
        "Study time with you is special!"
      ],
      3: [
        "We're really close friends now!",
        "I made you a friendship bracelet! 💝",
        "Your dedication is inspiring!",
        "Let's achieve our dreams together!",
        "I believe in you!"
      ],
      4: [
        "You're one of my dearest friends!",
        "Every study session is a joy!",
        "Let's make wonderful memories!",
        "You bring out the best in me!",
        "Together, we're unstoppable!"
      ],
      5: [
        "You're my very best friend! 🎀💕",
        "We've grown so much together!",
        "I cherish our friendship!",
        "Forever and always, study pals!",
        "You mean the world to me!"
      ]
    },
    emotes: ['🎀', '🍎', '💖', '⭐', '🌸', '❤️']
  },
  mymelody: {
    id: 'mymelody',
    name: 'My Melody',
    emoji: '🌸',
    sprite: '🐰',
    image: 'icons/mymelody_character-removebg-preview.png',
    theme: 'mymelody',
    mood: 'Nature & forest',
    environment: 'Flower meadow with gentle animals',
    unlockRequirement: 200,
    dialogues: {
      1: [
        "Hello there! Let's study in peace! 🌸",
        "I found a quiet spot for us!",
        "Nature sounds help me focus!",
        "Ready for a calming study session?",
        "Let's bloom together!"
      ],
      2: [
        "You're really finding your rhythm!",
        "I planted a flower for you! 🌷",
        "Keep growing, just like nature!",
        "Your focus is blooming beautifully!",
        "We're growing together!"
      ],
      3: [
        "Our friendship garden is flourishing!",
        "You make studying feel like spring!",
        "I treasure our time together!",
        "Let's pick flowers after this! 🌺",
        "You're a wonderful friend!"
      ],
      4: [
        "Our bond is strong like an oak tree!",
        "You're my sunshine on cloudy days!",
        "Every moment with you is precious!",
        "We've built something beautiful!",
        "I'm so grateful for you!"
      ],
      5: [
        "Best friends forever! 🌸💕",
        "Our friendship is in full bloom!",
        "You're my most treasured friend!",
        "Together through all seasons!",
        "I love you, friend! 💖"
      ]
    },
    emotes: ['🌸', '🌷', '🌺', '🦋', '🍃', '💗']
  },
  kuromi: {
    id: 'kuromi',
    name: 'Kuromi',
    emoji: '💀',
    sprite: '🐰',
    image: 'icons/kuromi_character-removebg-preview.png',
    theme: 'kuromi',
    mood: 'Rock concert / bedroom',
    environment: 'Gothic-cute studio with instruments',
    unlockRequirement: 350,
    dialogues: {
      1: [
        "Tch... Fine, let's study. 💀",
        "Don't expect me to go easy on you!",
        "Ready to rock this study session?",
        "I guess you're kinda cool...",
        "Let's get this done!"
      ],
      2: [
        "Not bad... for a beginner!",
        "You've got some guts, I like that!",
        "We're making progress, I guess...",
        "Keep pushing, don't slack off!",
        "You're tougher than you look!"
      ],
      3: [
        "Okay, you're officially cool now!",
        "I wrote you into my song! 🎸",
        "We make a pretty rad team!",
        "Don't tell anyone, but... I like you!",
        "You're not like the others!"
      ],
      4: [
        "You're my ride or die now! 💜",
        "I'd share my last pudding with you!",
        "We're basically besties... whatever!",
        "You bring out my soft side...",
        "Don't you dare leave me!"
      ],
      5: [
        "You're my #1, got it?! 💀💜",
        "We're bonded for life now!",
        "You're the coolest person I know!",
        "Best friends forever... or else!",
        "I... I really care about you!"
      ]
    },
    emotes: ['💀', '💜', '🎸', '⚡', '🖤', '✨']
  },
  pompompurin: {
    id: 'pompompurin',
    name: 'Pompompurin',
    emoji: '🍮',
    sprite: '🐕',
    image: 'icons/pompompurin_character-removebg-preview.png',
    theme: 'pompompurin',
    mood: 'Cozy home',
    environment: 'Warm living room with pudding snacks',
    unlockRequirement: 500,
    dialogues: {
      1: [
        "Purin! Let's study together! 🍮",
        "I brought pudding for energy!",
        "Nice and cozy, ready to learn!",
        "Home is the best study spot!",
        "Let's take it easy and focus!"
      ],
      2: [
        "You're doing so well!",
        "Want some pudding? There's plenty!",
        "Cozy vibes are helping us focus!",
        "You're a natural at this!",
        "Keep it up, friend!"
      ],
      3: [
        "You're like family to me now!",
        "I saved the biggest pudding for you! 🍮",
        "Our study sessions are the coziest!",
        "You make everything warmer!",
        "So grateful for our friendship!"
      ],
      4: [
        "You're my comfort person!",
        "Nothing beats studying with you!",
        "You belong in my cozy world!",
        "Every day is better with you!",
        "You're so special to me!"
      ],
      5: [
        "You're my best purin pal! 🍮💛",
        "Our friendship is the sweetest!",
        "Forever cozy, forever friends!",
        "You complete my pudding world!",
        "I love you so much! 💕"
      ]
    },
    emotes: ['🍮', '💛', '☀️', '🏠', '🧸', '💫']
  },
  badtzmaru: {
    id: 'badtzmaru',
    name: 'Badtz-Maru',
    emoji: '🐧',
    sprite: '🐧',
    image: 'icons/badtzmaru_character-removebg-preview.png',
    theme: 'badtzmaru',
    mood: 'Cool rebel vibes',
    environment: 'Edgy hangout spot',
    unlockRequirement: 700,
    dialogues: {
      1: [
        "Hmph. Fine, let's study. 🐧",
        "Don't expect me to be nice about it.",
        "World domination requires education!",
        "I guess you're not totally lame...",
        "Let's get this over with."
      ],
      2: [
        "You're... not terrible at this.",
        "Don't let it go to your head!",
        "Maybe you're kinda cool.",
        "Keep studying, I'm watching you.",
        "Hmph, not bad for a human."
      ],
      3: [
        "Okay, you've earned my respect.",
        "We make a decent team, I guess.",
        "You're one of the cool ones now.",
        "Don't tell anyone I said this, but... nice work.",
        "World domination partner? Maybe."
      ],
      4: [
        "You're actually pretty awesome.",
        "I'd share my fish with you!",
        "Best study rival ever!",
        "You're on my good side now.",
        "Partners in crime... I mean, studying!"
      ],
      5: [
        "You're my #1 minion! 🐧💛",
        "Okay fine, we're best friends!",
        "World domination, together!",
        "You're the only human I like!",
        "Don't ever leave me, got it?!"
      ]
    },
    emotes: ['🐧', '💛', '⚡', '😤', '🖤', '✨']
  },
  hangyodon: {
    id: 'hangyodon',
    name: 'Hangyodon',
    emoji: '🐟',
    sprite: '🐟',
    image: 'icons/hangyodon_character-removebg-preview.png',
    theme: 'hangyodon',
    mood: 'Underwater chill',
    environment: 'Deep sea study cave',
    unlockRequirement: 900,
    dialogues: {
      1: [
        "Blub blub! Let's study! 🐟",
        "The ocean of knowledge awaits!",
        "Dive into learning with me!",
        "Ready to make a splash?",
        "Let's swim through these books!"
      ],
      2: [
        "You're swimming along nicely!",
        "Keep those brain waves flowing!",
        "We're making waves together!",
        "You're a natural at this!",
        "Blub blub! Great progress!"
      ],
      3: [
        "We're like fish in the same school!",
        "You're my favorite study buddy!",
        "The sea of knowledge is ours!",
        "We're making a big splash together!",
        "So happy to study with you!"
      ],
      4: [
        "You're the best catch ever!",
        "My heart bubbles when you're here!",
        "We're totally in sync!",
        "Best underwater study team!",
        "You're my treasure!"
      ],
      5: [
        "Best friends forever, blub blub! 🐟💙",
        "You're my ocean, my everything!",
        "We'll conquer all knowledge together!",
        "Soulmates of the sea!",
        "I love you, study buddy! 💕"
      ]
    },
    emotes: ['🐟', '💙', '🌊', '🫧', '💦', '✨']
  },
  keroppi: {
    id: 'keroppi',
    name: 'Keroppi',
    emoji: '🐸',
    sprite: '🐸',
    image: 'icons/keroppi_character-removebg-preview.png',
    theme: 'keroppi',
    mood: 'Pond-side adventure',
    environment: 'Lily pad study spot',
    unlockRequirement: 1100,
    dialogues: {
      1: [
        "Kero kero! Let's study! 🐸",
        "Hop into learning with me!",
        "The pond is peaceful for studying!",
        "Ready to leap into knowledge?",
        "Ribbit! Let's do our best!"
      ],
      2: [
        "You're leaping ahead!",
        "Great hops of progress!",
        "Kero kero! Keep it up!",
        "We're lily pad hopping through this!",
        "You're doing ribbiting work!"
      ],
      3: [
        "We're the best pond pals!",
        "Hop hop! I love studying with you!",
        "You make my lily pad feel like home!",
        "Kero! We're such a great team!",
        "Best frog friend ever!"
      ],
      4: [
        "You're my favorite human!",
        "I'd share my flies with you! 🪰",
        "Kero kero! You're amazing!",
        "Every hop is better with you!",
        "We're inseparable now!"
      ],
      5: [
        "Best friends for-ribbit! 🐸💚",
        "You're the lily to my pad!",
        "Kero kero! I love you!",
        "Forever pond pals!",
        "You make my heart hop! 💕"
      ]
    },
    emotes: ['🐸', '💚', '🍀', '🌿', '🪷', '✨']
  },
  chococat: {
    id: 'chococat',
    name: 'Chococat',
    emoji: '🐱',
    sprite: '🐱',
    image: 'icons/chococat_character-removebg-preview.png',
    theme: 'chococat',
    mood: 'Curious explorer',
    environment: 'Cozy tech corner',
    unlockRequirement: 1300,
    dialogues: {
      1: [
        "Meow! Ready to learn? 🐱",
        "My whiskers sense knowledge nearby!",
        "Let's explore new things together!",
        "Curiosity is the best teacher!",
        "Time to discover something new!"
      ],
      2: [
        "My whiskers are tingling! Good work!",
        "You're as curious as me!",
        "We're uncovering so much!",
        "Keep exploring, friend!",
        "Purr-fect progress!"
      ],
      3: [
        "We're like two curious cats!",
        "My antenna picks up your awesomeness!",
        "Best exploration buddy!",
        "You make learning an adventure!",
        "So happy we're friends!"
      ],
      4: [
        "You're my favorite discovery!",
        "I'd follow my whiskers to you!",
        "Best curious companions!",
        "Every day is an adventure with you!",
        "You're purr-fect to me!"
      ],
      5: [
        "Best friends fur-ever! 🐱🖤",
        "You're my greatest discovery!",
        "Meow! I love you!",
        "Together, we'll explore everything!",
        "You're my whole world! 💕"
      ]
    },
    emotes: ['🐱', '🖤', '💙', '🔍', '💡', '✨']
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// ACHIEVEMENTS DATA
// ═══════════════════════════════════════════════════════════════════════════════

const ACHIEVEMENTS = [
  // First Steps
  { id: 'first_focus', name: 'First Focus', desc: 'Complete your first session', icon: '🌱', fpReward: 5, condition: (stats) => stats.totalSessions >= 1 },
  { id: 'hour_1', name: 'First Hour', desc: 'Study for 1 hour total', icon: '⏰', fpReward: 15, condition: (stats) => stats.totalMinutes >= 60 },
  { id: 'friend_1', name: 'First Friend', desc: 'Reach friendship level 2', icon: '🤝', fpReward: 5, condition: (stats) => stats.maxFriendshipLevel >= 2 },
  
  // Session Counts
  { id: 'pomodoro_pro', name: 'Pomodoro Pro', desc: 'Complete 10 sessions', icon: '🍅', fpReward: 15, condition: (stats) => stats.totalSessions >= 10 },
  { id: 'session_25', name: 'Quick Learner', desc: 'Complete 25 sessions', icon: '⭐', fpReward: 20, condition: (stats) => stats.totalSessions >= 25 },
  { id: 'study_master', name: 'Study Master', desc: 'Complete 50 sessions', icon: '📚', fpReward: 30, condition: (stats) => stats.totalSessions >= 50 },
  { id: 'session_100', name: 'Centurion', desc: 'Complete 100 sessions', icon: '💎', fpReward: 40, condition: (stats) => stats.totalSessions >= 100 },
  
  // Time Milestones 
  { id: 'hour_3', name: 'Three Hours', desc: 'Study for 3 hours total', icon: '📖', fpReward: 20, condition: (stats) => stats.totalMinutes >= 180 },
  { id: 'hour_12', name: 'Half Day', desc: 'Study for 12 hours total', icon: '☀️', fpReward: 25, condition: (stats) => stats.totalMinutes >= 720 },
  { id: 'hour_24', name: 'Full Day', desc: 'Study for 24 hours total', icon: '📚', fpReward: 35, condition: (stats) => stats.totalMinutes >= 1440 },
  { id: 'hour_48', name: 'Two Days', desc: 'Study for 48 hours total', icon: '🎓', fpReward: 45, condition: (stats) => stats.totalMinutes >= 2880 },
  { id: 'hour_100', name: 'Century', desc: 'Study for 100 hours total', icon: '🏆', fpReward: 60, condition: (stats) => stats.totalMinutes >= 6000 },
  
  // Streaks
  { id: 'streak_3', name: 'On Fire', desc: '3 day streak', icon: '🔥', fpReward: 15, condition: (stats) => stats.currentStreak >= 3 },
  { id: 'streak_7', name: 'Week Warrior', desc: '7 day streak', icon: '⚔️', fpReward: 20, condition: (stats) => stats.currentStreak >= 7 },
  { id: 'streak_14', name: 'Two Weeks Strong', desc: '14 day streak', icon: '💪', fpReward: 35, condition: (stats) => stats.currentStreak >= 14 },
  { id: 'streak_21', name: 'Three Weeks', desc: '21 day streak', icon: '🏅', fpReward: 45, condition: (stats) => stats.currentStreak >= 21 },
  { id: 'streak_30', name: 'Monthly Master', desc: '30 day streak', icon: '👑', fpReward: 50, condition: (stats) => stats.bestStreak >= 30 },
  { id: 'streak_60', name: 'Two Months', desc: '60 day streak', icon: '👑', fpReward: 75, condition: (stats) => stats.bestStreak >= 60 },
  
  // Friendship Levels
  { id: 'friend_3', name: 'Close Friend', desc: 'Reach friendship level 3', icon: '💖', fpReward: 10, condition: (stats) => stats.maxFriendshipLevel >= 3 },
  { id: 'friend_4', name: 'Bestie', desc: 'Reach friendship level 4', icon: '💕', fpReward: 25, condition: (stats) => stats.maxFriendshipLevel >= 4 },
  { id: 'friend_max', name: 'BFF Status', desc: 'Max friendship with any character', icon: '💕', fpReward: 75, condition: (stats) => stats.maxFriendshipLevel >= 5 },
  
  // Session Lengths
  { id: 'long_session_60', name: 'Hour Power', desc: 'Complete a 60-min session', icon: '⏱️', fpReward: 15, condition: (stats) => stats.longestSession >= 60 },
  { id: 'deep_focus', name: 'Deep Focus', desc: 'Complete a 90-min session', icon: '🧘', fpReward: 20, condition: (stats) => stats.longestSession >= 90 },
  { id: 'long_session_120', name: 'Two Hour Champion', desc: 'Complete a 120-min session', icon: '🏆', fpReward: 35, condition: (stats) => stats.longestSession >= 120 },
  
  // Daily Challenges
  { id: 'session_3', name: 'Triple Threat', desc: '3 sessions in one day', icon: '🎯', fpReward: 15, condition: (stats) => stats.sessionsToday >= 3 },
  { id: 'marathon', name: 'Marathon', desc: '5 sessions in one day', icon: '🏃', fpReward: 30, condition: (stats) => stats.sessionsToday >= 5 },
  
  // Time of Day
  { id: 'early_bird', name: 'Early Bird', desc: 'Study before 8 AM', icon: '🌅', fpReward: 5, condition: (stats) => stats.earlyBird },
  { id: 'night_owl', name: 'Night Owl', desc: 'Study after 10 PM', icon: '🦉', fpReward: 5, condition: (stats) => stats.nightOwl },
  { id: 'both_times', name: 'Day & Night', desc: 'Study both early and late in one day', icon: '🌙', fpReward: 10, condition: (stats) => stats.earlyBird && stats.nightOwl },
  
  // Mastery Achievement (unlocks when all others are completed)
  { id: 'mastery', name: 'Ultimate Mastery', desc: 'Unlock all achievements', icon: '✨', fpReward: 200, condition: (stats) => {
    // This will be checked separately - all other achievements must be unlocked
    return false; // Always false, checked manually in checkAchievements
  }}
];

// ═══════════════════════════════════════════════════════════════════════════════
// COLLECTIBLES DATA
// ═══════════════════════════════════════════════════════════════════════════════

const COLLECTIBLES = {
  wallpapers: [
    { id: 'wp_cloud', name: 'Cloud Dreams', icon: '☁️', character: 'cinnamoroll', fpRequired: 50 },
    { id: 'wp_cafe', name: 'Cozy Café', icon: '☕', character: 'cinnamoroll', fpRequired: 150 },
    { id: 'wp_ribbon', name: 'Ribbon World', icon: '🎀', character: 'hellokitty', fpRequired: 50 },
    { id: 'wp_apple', name: 'Apple Garden', icon: '🍎', character: 'hellokitty', fpRequired: 150 },
    { id: 'wp_meadow', name: 'Flower Meadow', icon: '🌸', character: 'mymelody', fpRequired: 50 },
    { id: 'wp_forest', name: 'Forest Calm', icon: '🌲', character: 'mymelody', fpRequired: 150 },
    { id: 'wp_punk', name: 'Punk Rock', icon: '🎸', character: 'kuromi', fpRequired: 50 },
    { id: 'wp_night', name: 'Midnight Star', icon: '🌙', character: 'kuromi', fpRequired: 150 },
    { id: 'wp_home', name: 'Cozy Home', icon: '🏠', character: 'pompompurin', fpRequired: 50 },
    { id: 'wp_pudding', name: 'Pudding Land', icon: '🍮', character: 'pompompurin', fpRequired: 150 }
  ],
  stickers: [
    { id: 'st_heart', name: 'Love Heart', icon: '💖', fpRequired: 25 },
    { id: 'st_star', name: 'Sparkle Star', icon: '⭐', fpRequired: 50 },
    { id: 'st_rainbow', name: 'Rainbow', icon: '🌈', fpRequired: 75 },
    { id: 'st_crown', name: 'Crown', icon: '👑', fpRequired: 100 },
    { id: 'st_bow', name: 'Red Bow', icon: '🎀', fpRequired: 125 },
    { id: 'st_flower', name: 'Flower', icon: '🌺', fpRequired: 150 },
    { id: 'st_music', name: 'Music Note', icon: '🎵', fpRequired: 175 },
    { id: 'st_diamond', name: 'Diamond', icon: '💎', fpRequired: 200 },
    { id: 'st_butterfly', name: 'Butterfly', icon: '🦋', fpRequired: 250 }
  ],
  accessories: [
    { id: 'ac_bow', name: 'Cute Bow', icon: '🎀', cost: 15, duration: 30, fpBonus: 0.15, imageKey: 'cutebow' },
    { id: 'ac_flower', name: 'Hair Flower', icon: '🌸', cost: 20, duration: 30, fpBonus: 0.20, imageKey: 'handflower' },
    { id: 'ac_glasses', name: 'Glasses', icon: '👓', cost: 25, duration: 45, fpBonus: 0.25, imageKey: 'glasses' },
    { id: 'ac_hat', name: 'Beret', icon: '🎨', cost: 30, duration: 45, fpBonus: 0.30, imageKey: 'beret' },
    { id: 'ac_headphones', name: 'Headphones', icon: '🎧', cost: 40, duration: 60, fpBonus: 0.35, imageKey: 'headphones' },
    { id: 'ac_tiara', name: 'Tiara', icon: '👸', cost: 50, duration: 60, fpBonus: 0.40, imageKey: 'tiara' },
    { id: 'ac_wings', name: 'Angel Wings', icon: '👼', cost: 75, duration: 90, fpBonus: 0.50, imageKey: 'angelwings' },
    { id: 'ac_halo', name: 'Halo', icon: '😇', cost: 100, duration: 90, fpBonus: 0.60, imageKey: 'halo' },
    { id: 'ac_crown', name: 'Royal Crown', icon: '👑', cost: 150, duration: 120, fpBonus: 0.75, imageKey: 'royalcrown' }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════════
// FRIENDSHIP LEVELS
// ═══════════════════════════════════════════════════════════════════════════════

const FRIENDSHIP_LEVELS = [
  { level: 1, name: 'Acquaintance', minPercent: 0, maxPercent: 20 },
  { level: 2, name: 'Study Buddy', minPercent: 21, maxPercent: 40 },
  { level: 3, name: 'Close Friend', minPercent: 41, maxPercent: 60 },
  { level: 4, name: 'Bestie', minPercent: 61, maxPercent: 85 },
  { level: 5, name: 'BFF', minPercent: 86, maxPercent: 100 }
];

// ═══════════════════════════════════════════════════════════════════════════════
// DEFAULT STATE
// ═══════════════════════════════════════════════════════════════════════════════

const DEFAULT_STATE = {
  currentCharacter: 'cinnamoroll',
  theme: 'cinnamoroll',
  totalFP: 0,
  characters: {
    cinnamoroll: { fp: 0, unlocked: true },
    hellokitty: { fp: 0, unlocked: true },
    mymelody: { fp: 0, unlocked: true },
    kuromi: { fp: 0, unlocked: true },
    pompompurin: { fp: 0, unlocked: true },
    badtzmaru: { fp: 0, unlocked: true },
    hangyodon: { fp: 0, unlocked: true },
    keroppi: { fp: 0, unlocked: true },
    chococat: { fp: 0, unlocked: true }
  },
  stats: {
    totalSessions: 0,
    totalMinutes: 0,
    currentStreak: 0,
    bestStreak: 0,
    lastSessionDate: null,
    sessionsToday: 0,
    dailyMinutes: 0,
    yesterdayMinutes: 0,
    todayDate: null,
    earlyBird: false,
    nightOwl: false,
    longestSession: 0,
    streakNotifiedToday: false  // Track if we've notified about reaching 120 min today
  },
  achievements: [],
  collectibles: [],
  settings: {
    soundEnabled: true,
    notificationsEnabled: true
  },
  timer: {
    isRunning: false,
    isPaused: false,
    duration: 25,
    remaining: 25 * 60,
    startTime: null
  },
  placedStickers: [],  // Array of {id, icon, x, y}
  activeWallpaper: null,  // Currently equipped wallpaper id
  activeAccessory: null,  // Currently active accessory id
  accessoryExpiresAt: null  // Timestamp when accessory boost expires
};

// ═══════════════════════════════════════════════════════════════════════════════
// APP STATE
// ═══════════════════════════════════════════════════════════════════════════════

let state = { ...DEFAULT_STATE };
let timerInterval = null;
let syncInterval = null;
let idleReactionInterval = null;
let isSyncing = false; // Prevent concurrent syncs

// ═══════════════════════════════════════════════════════════════════════════════
// STORAGE FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

async function loadState() {
  try {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      const result = await chrome.storage.local.get('sanrioStudyPals');
      if (result.sanrioStudyPals) {
        state = { ...DEFAULT_STATE, ...result.sanrioStudyPals };
      }
    } else {
      const saved = localStorage.getItem('sanrioStudyPals');
      if (saved) {
        try {
          state = { ...DEFAULT_STATE, ...JSON.parse(saved) };
        } catch (e) {
          console.error('Error parsing saved state from localStorage:', e);
          // Use default state if parsing fails
          state = { ...DEFAULT_STATE };
        }
      }
    }
    
    // Ensure all characters exist in state and are unlocked
    Object.keys(CHARACTERS).forEach(charId => {
      if (!state.characters[charId]) {
        state.characters[charId] = { fp: 0, unlocked: true };
      } else {
        // Make sure all characters are unlocked
        state.characters[charId].unlocked = true;
      }
    });
    
    // Ensure stats has all required fields (for migration)
    if (!state.stats.streakNotifiedToday) {
      state.stats.streakNotifiedToday = false;
    }
    if (state.stats.yesterdayMinutes === undefined) {
      state.stats.yesterdayMinutes = 0;
    }
    
    // Check if there's an active accessory boost and start timer
    const now = Date.now();
    if (state.activeAccessory && state.accessoryExpiresAt) {
      if (state.accessoryExpiresAt > now) {
        // Boost still active, start timer
        startAccessoryTimer();
      } else {
        // Boost expired, clear it
        state.activeAccessory = null;
        state.accessoryExpiresAt = null;
      }
    }
    
  } catch (e) {
    console.error('Error loading state, using default:', e);
    // Use default state on error
    state = { ...DEFAULT_STATE };
  }
  return state;
}

async function saveState() {
  try {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      await chrome.storage.local.set({ sanrioStudyPals: state });
    } else {
      localStorage.setItem('sanrioStudyPals', JSON.stringify(state));
    }
  } catch (e) {
    console.error('Failed to save state:', e);
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function getFriendshipLevel(percent) {
  for (let i = FRIENDSHIP_LEVELS.length - 1; i >= 0; i--) {
    if (percent >= FRIENDSHIP_LEVELS[i].minPercent) {
      return FRIENDSHIP_LEVELS[i];
    }
  }
  return FRIENDSHIP_LEVELS[0];
}

function getRandomDialogue(character, level) {
  // Validate character exists
  if (!CHARACTERS[character] || !CHARACTERS[character].dialogues) {
    return "Let's study together!";
  }
  const dialogues = CHARACTERS[character].dialogues[level] || CHARACTERS[character].dialogues[1];
  if (!dialogues || !Array.isArray(dialogues) || dialogues.length === 0) {
    return "Let's study together!";
  }
  return dialogues[Math.floor(Math.random() * dialogues.length)];
}

function getRandomEmote(character) {
  // Validate character exists
  if (!CHARACTERS[character] || !CHARACTERS[character].emotes) {
    return '✨';
  }
  const emotes = CHARACTERS[character].emotes;
  if (!Array.isArray(emotes) || emotes.length === 0) {
    return '✨';
  }
  return emotes[Math.floor(Math.random() * emotes.length)];
}

function calculateFPReward(minutes) {
  // Base rewards - 96 hours to max friendship without accessories
  // 500 FP needed for 100%, ~64 sessions of 90 min = 96 hours
  if (minutes >= 90) return 8;    // 64 sessions × 8 FP = 512 FP ≈ 96 hours
  if (minutes >= 50) return 5;    // ~100 sessions = 83 hours  
  if (minutes >= 25) return 2;    // ~250 sessions = 104 hours
  if (minutes >= 2) return 1;     // Minimum 1 FP for 2+ min sessions
  return 0;                       // 1 min = no reward
}

function isSameDay(date1, date2) {
  if (!date1 || !date2) return false;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  // Validate dates are valid
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return false;
  return d1.toDateString() === d2.toDateString();
}

function isYesterday(dateStr) {
  if (!dateStr) return false;
  const date = new Date(dateStr);
  // Validate date is valid
  if (isNaN(date.getTime())) return false;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return date.toDateString() === yesterday.toDateString();
}

// ═══════════════════════════════════════════════════════════════════════════════
// UI UPDATE FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function updateTheme(themeName) {
  const app = document.getElementById('app');
  if (app) {
    app.className = `theme-${themeName}`;
  }
  state.theme = themeName;
  saveState();
  
  // Reapply wallpaper when theme changes to ensure it's visible with new theme colors
  // This ensures wallpaper works properly with all themes
  applyWallpaper();
}

function updateHeader() {
  const totalFPEl = document.getElementById('total-fp');
  const streakCountEl = document.getElementById('streak-count');
  if (totalFPEl) totalFPEl.textContent = state.totalFP;
  if (streakCountEl) streakCountEl.textContent = state.stats.currentStreak;
}

function updateCharacterDisplay() {
  // Validate current character exists
  if (!CHARACTERS[state.currentCharacter] || !state.characters[state.currentCharacter]) {
    console.warn('Invalid current character, using default');
    state.currentCharacter = Object.keys(CHARACTERS)[0] || 'cinnamoroll';
  }
  const character = CHARACTERS[state.currentCharacter];
  const charData = state.characters[state.currentCharacter];
  // Use 1 decimal place for more accurate progress display
  const percentExact = Math.min(100, (charData.fp / 500) * 100);
  const percent = Math.round(percentExact * 10) / 10; // Round to 1 decimal
  const level = getFriendshipLevel(Math.floor(percentExact)); // Levels still use whole numbers
  
  // Update sprite - try image first, fallback to emoji
  const spriteEl = document.getElementById('character-sprite');
  if (spriteEl) {
    if (character.image) {
      const img = new Image();
      img.src = character.image;
      img.alt = character.name;
      img.onerror = () => {
        // Fallback to emoji if image fails to load
        spriteEl.innerHTML = `<span class="emoji-fallback">${character.sprite}</span>`;
      };
      img.onload = () => {
        spriteEl.innerHTML = '';
        spriteEl.appendChild(img);
      };
      // Show emoji while loading
      spriteEl.innerHTML = `<span class="emoji-fallback">${character.sprite}</span>`;
    } else {
      spriteEl.innerHTML = `<span class="emoji-fallback">${character.sprite}</span>`;
    }
  }
  
  // Update dialogue
  const dialogueNameEl = document.getElementById('dialogue-name');
  const dialogueTextEl = document.getElementById('dialogue-text');
  if (dialogueNameEl) dialogueNameEl.textContent = character.name;
  if (dialogueTextEl) dialogueTextEl.textContent = getRandomDialogue(state.currentCharacter, level.level);
  
  // Update friendship display
  const friendshipLevelEl = document.getElementById('friendship-level');
  const friendshipFillEl = document.getElementById('friendship-fill');
  const friendshipPercentEl = document.getElementById('friendship-percent');
  if (friendshipLevelEl) friendshipLevelEl.textContent = `Lv. ${level.level} - ${level.name}`;
  if (friendshipFillEl) friendshipFillEl.style.width = `${percent}%`;
  if (friendshipPercentEl) friendshipPercentEl.textContent = percent;
}

function updateTimer() {
  const timerTimeEl = document.getElementById('timer-time');
  if (timerTimeEl) timerTimeEl.textContent = formatTime(state.timer.remaining);
  
  // Update progress ring
  const progress = document.getElementById('timer-progress');
  if (progress) {
    const circumference = 2 * Math.PI * 90;
    const totalSeconds = (state.timer.duration || 25) * 60; // Prevent division by zero
    const elapsed = Math.max(0, totalSeconds - state.timer.remaining);
    const offset = totalSeconds > 0 ? (elapsed / totalSeconds) * circumference : 0;
    progress.style.strokeDasharray = circumference;
    progress.style.strokeDashoffset = circumference - offset;
  }
}

function updateTimerLabel(label) {
  const timerLabelEl = document.getElementById('timer-label');
  if (timerLabelEl) timerLabelEl.textContent = label;
}

function showElement(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = '';
}

function hideElement(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

function showEmote(emote) {
  const emoteEl = document.getElementById('character-emote');
  emoteEl.textContent = emote;
  emoteEl.classList.add('show');
  setTimeout(() => emoteEl.classList.remove('show'), 2000);
}

function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ═══════════════════════════════════════════════════════════════════════════════
// CUSTOM SANRIO MODAL (replaces ugly browser dialogs)
// ═══════════════════════════════════════════════════════════════════════════════

let modalResolve = null;
let achievementQueue = [];
let showingAchievement = false;

function showSanrioModal(options = {}) {
  return new Promise((resolve) => {
    const overlay = document.getElementById('sanrio-modal-overlay');
    const modal = document.getElementById('sanrio-modal');
    const character = document.getElementById('modal-character');
    const title = document.getElementById('modal-title');
    const message = document.getElementById('modal-message');
    const confirmBtn = document.getElementById('modal-confirm');
    const cancelBtn = document.getElementById('modal-cancel');
    
    // Check if all required elements exist (popup might be closed)
    if (!overlay || !modal || !character || !title || !message || !confirmBtn || !cancelBtn) {
      console.warn('Modal elements not found, resolving with false');
      resolve(false);
      return;
    }
    
    // Set content
    character.textContent = options.character || '🎀';
    title.textContent = options.title || 'Are you sure?';
    message.textContent = options.message || '';
    confirmBtn.textContent = options.confirmText || 'Yes';
    cancelBtn.textContent = options.cancelText || 'Cancel';
    
    // Set danger style if needed
    if (options.danger) {
      confirmBtn.classList.add('danger');
    } else {
      confirmBtn.classList.remove('danger');
    }
    
    // Show/hide cancel button
    cancelBtn.style.display = options.showCancel !== false ? 'block' : 'none';
    
    modalResolve = resolve;
    overlay.classList.add('show');
  });
}

function hideModal(result) {
  const overlay = document.getElementById('sanrio-modal-overlay');
  if (overlay) {
    overlay.classList.remove('show');
  }
  if (modalResolve) {
    modalResolve(result);
    modalResolve = null;
  }
}

function initModal() {
  document.getElementById('modal-confirm').addEventListener('click', () => hideModal(true));
  document.getElementById('modal-cancel').addEventListener('click', () => hideModal(false));
  document.getElementById('sanrio-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'sanrio-modal-overlay') hideModal(false);
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// ENGAGEMENT FEATURES
// ═══════════════════════════════════════════════════════════════════════════════

// Time-based greetings
function updateGreetingBanner() {
  const hour = new Date().getHours();
  const banner = document.getElementById('greeting-banner');
  // Validate current character exists
  if (!CHARACTERS[state.currentCharacter]) {
    console.warn('Invalid current character in updateGreetingBanner, using default');
    state.currentCharacter = Object.keys(CHARACTERS)[0] || 'cinnamoroll';
  }
  const character = CHARACTERS[state.currentCharacter];
  
  let greeting, emoji;
  
  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
    emoji = "🌅";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
    emoji = "☀️";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good evening";
    emoji = "🌆";
  } else {
    greeting = "Late night study session";
    emoji = "🌙";
  }
  
  const greetings = [
    `${emoji} ${greeting}! Let's make today amazing! ${character.emoji}`,
    `${emoji} ${greeting}! ${character.name} is happy to see you! 💕`,
    `${emoji} ${greeting}! Ready to be productive? ✨`,
    `${emoji} ${greeting}! Your study buddy awaits! ${character.emoji}`,
    `${emoji} ${greeting}! Let's achieve great things! 🌟`
  ];
  
  banner.textContent = greetings[Math.floor(Math.random() * greetings.length)];
}

// Confetti celebration
function showConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) {
    console.warn('Confetti container not found');
    return;
  }
  const colors = ['#ff6b9d', '#7fc4d6', '#ffd966', '#b794e0', '#ffb5ba', '#a8d8ea'];
  const emojis = ['⭐', '💖', '✨', '🌟', '💕', '🎀', '🌸'];
  
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('span');
    confetti.className = 'confetti';
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.fontSize = (Math.random() * 15 + 10) + 'px';
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    container.appendChild(confetti);
    
    setTimeout(() => confetti.classList.add('active'), 10);
    setTimeout(() => confetti.remove(), 4000);
  }
}

// FP Popup animation
function showFPPopup(amount) {
  const popup = document.getElementById('fp-popup');
  const amountEl = document.getElementById('fp-popup-amount');
  
  if (!popup || !amountEl) {
    console.warn('FP popup elements not found');
    return;
  }
  
  amountEl.textContent = `+${amount}`;
  popup.classList.add('show');
  
  setTimeout(() => {
    if (popup) {
      popup.classList.remove('show');
    }
  }, 2000);
}

// Encouraging messages during study
const ENCOURAGEMENTS = [
  "You're doing amazing! 💪",
  "Keep it up! Almost there! ✨",
  "So proud of you! 🌟",
  "You've got this! 💖",
  "Stay focused, superstar! ⭐",
  "Wonderful progress! 🎀",
  "You're unstoppable! 🔥",
  "Keep shining! ✨",
  "Believe in yourself! 💕",
  "You're a study champion! 🏆"
];

function showEncouragement() {
  const bubble = document.getElementById('encourage-bubble');
  const message = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
  
  bubble.textContent = message;
  bubble.classList.add('show');
  
  setTimeout(() => {
    bubble.classList.remove('show');
  }, 3000);
}

// Update streak badge with fire effect
function updateStreakBadge() {
  const streakBadge = document.querySelector('.streak-badge');
  if (!streakBadge) {
    console.warn('Streak badge element not found');
    return;
  }
  if (state.stats.currentStreak >= 3) {
    streakBadge.classList.add('on-fire');
  } else {
    streakBadge.classList.remove('on-fire');
  }
}

// Level up celebration
function celebrateLevelUp(newLevel) {
  // Flash effect
  const flash = document.createElement('div');
  flash.className = 'level-up-effect';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 1000);
  
  // Confetti
  showConfetti();
  
  // Toast
  showToast(`🎉 Level Up! Now ${newLevel}!`);
  
  // Play sound
  playSound('complete');
}

// Random character reactions during idle
function startIdleReactions() {
  // Clear existing interval to prevent memory leaks
  if (idleReactionInterval) {
    clearInterval(idleReactionInterval);
  }
  idleReactionInterval = setInterval(() => {
    if (!state.timer.isRunning) {
      const random = Math.random();
      if (random < 0.15) {
        showEmote(getRandomEmote(state.currentCharacter));
      }
    }
  }, 8000);
}

// Motivational tips
const STUDY_TIPS = [
  "💡 Tip: Take a 5-min break every 25 minutes!",
  "💡 Tip: Stay hydrated while studying! 💧",
  "💡 Tip: A tidy space = a focused mind! ✨",
  "💡 Tip: Review notes before bed for better memory! 🌙",
  "💡 Tip: Break big tasks into smaller chunks! 📝",
  "💡 Tip: Reward yourself after completing goals! 🎁"
];

function showRandomTip() {
  if (Math.random() < 0.3) {
    const tip = STUDY_TIPS[Math.floor(Math.random() * STUDY_TIPS.length)];
    showToast(tip);
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// STICKER DECORATION SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

let decorateMode = false;
let draggedSticker = null;
let dragOffset = { x: 0, y: 0 };

function toggleDecorateMode(forceClose = false) {
  if (forceClose) {
    decorateMode = false;
  } else {
    decorateMode = !decorateMode;
  }
  
  const tray = document.getElementById('sticker-tray');
  const scene = document.getElementById('character-scene');
  
  if (!tray || !scene) return;
  
  if (decorateMode) {
    tray.classList.add('open');
    scene.classList.add('decorate-mode');
    renderStickerTray();
  } else {
    tray.classList.remove('open');
    scene.classList.remove('decorate-mode');
  }
}

function closeDecorateMode() {
  decorateMode = false;
  const tray = document.getElementById('sticker-tray');
  const scene = document.getElementById('character-scene');
  
  if (tray) tray.classList.remove('open');
  if (scene) scene.classList.remove('decorate-mode');
}

function renderStickerTray() {
  const container = document.getElementById('sticker-tray-items');
  if (!container) {
    console.warn('Sticker tray container not found');
    return;
  }
  
  const ownedStickers = state.collectibles.filter(id => id.startsWith('st_'));
  
  if (ownedStickers.length === 0) {
    container.innerHTML = '<div class="sticker-tray-item empty">No stickers yet! Buy some in Items tab.</div>';
    return;
  }
  
  const stickers = COLLECTIBLES.stickers || [];
  container.innerHTML = ownedStickers.map(stickerId => {
    const sticker = stickers.find(s => s.id === stickerId);
    if (!sticker) return '';
    return `<div class="sticker-tray-item" data-sticker="${sticker.icon}" title="${sticker.name}">${sticker.icon}</div>`;
  }).join('');
  
  // Add click handlers (event listeners are automatically removed when innerHTML is set)
  container.querySelectorAll('.sticker-tray-item:not(.empty)').forEach(item => {
    item.addEventListener('click', () => {
      const icon = item.dataset.sticker;
      placeSticker(icon);
    });
  });
}

function placeSticker(icon) {
  const scene = document.getElementById('character-scene');
  if (!scene) {
    console.warn('Character scene not found');
    return;
  }
  const rect = scene.getBoundingClientRect();
  
  // Place in random position within scene
  const x = 20 + Math.random() * 60; // 20-80% from left
  const y = 20 + Math.random() * 50; // 20-70% from top
  
  const sticker = {
    id: Date.now(),
    icon: icon,
    x: x,
    y: y
  };
  
  state.placedStickers.push(sticker);
  saveState();
  renderPlacedStickers();
  
  playSound('click');
  showToast(`${icon} placed!`);
}

function renderPlacedStickers() {
  const container = document.getElementById('placed-stickers');
  if (!container) {
    console.warn('Placed stickers container not found');
    return;
  }
  
  container.innerHTML = state.placedStickers.map(sticker => {
    return `<span class="placed-sticker" 
                  data-id="${sticker.id}" 
                  style="left: ${sticker.x}%; top: ${sticker.y}%;"
                  draggable="false">${sticker.icon}</span>`;
  }).join('');
  
  // Add drag handlers
  container.querySelectorAll('.placed-sticker').forEach(el => {
    el.addEventListener('mousedown', startDragSticker);
    el.addEventListener('touchstart', startDragSticker, { passive: false });
    
    // Double-click to remove
    el.addEventListener('dblclick', () => {
      if (decorateMode) {
        const id = parseInt(el.dataset.id);
        removeSticker(id);
      }
    });
  });
}

function startDragSticker(e) {
  if (!decorateMode) return;
  
  e.preventDefault();
  const el = e.target;
  const scene = document.getElementById('character-scene');
  if (!scene) {
    console.warn('Character scene not found');
    return;
  }
  const rect = scene.getBoundingClientRect();
  
  draggedSticker = {
    element: el,
    id: parseInt(el.dataset.id)
  };
  
  el.classList.add('dragging');
  
  const clientX = e.clientX || e.touches[0].clientX;
  const clientY = e.clientY || e.touches[0].clientY;
  
  dragOffset.x = clientX - el.getBoundingClientRect().left;
  dragOffset.y = clientY - el.getBoundingClientRect().top;
  
  document.addEventListener('mousemove', dragSticker);
  document.addEventListener('mouseup', stopDragSticker);
  document.addEventListener('touchmove', dragSticker, { passive: false });
  document.addEventListener('touchend', stopDragSticker);
}

function dragSticker(e) {
  if (!draggedSticker) return;
  
  e.preventDefault();
  const scene = document.getElementById('character-scene');
  if (!scene) {
    stopDragSticker(e);
    return;
  }
  const rect = scene.getBoundingClientRect();
  
  const clientX = e.clientX || e.touches[0].clientX;
  const clientY = e.clientY || e.touches[0].clientY;
  
  let x = ((clientX - rect.left - dragOffset.x) / rect.width) * 100;
  let y = ((clientY - rect.top - dragOffset.y) / rect.height) * 100;
  
  // Clamp to scene bounds
  x = Math.max(5, Math.min(90, x));
  y = Math.max(5, Math.min(85, y));
  
  draggedSticker.element.style.left = x + '%';
  draggedSticker.element.style.top = y + '%';
}

function stopDragSticker(e) {
  if (!draggedSticker) return;
  
  const el = draggedSticker.element;
  el.classList.remove('dragging');
  
  // Update state
  const sticker = state.placedStickers.find(s => s.id === draggedSticker.id);
  if (sticker) {
    sticker.x = parseFloat(el.style.left);
    sticker.y = parseFloat(el.style.top);
    saveState();
  }
  
  draggedSticker = null;
  
  document.removeEventListener('mousemove', dragSticker);
  document.removeEventListener('mouseup', stopDragSticker);
  document.removeEventListener('touchmove', dragSticker);
  document.removeEventListener('touchend', stopDragSticker);
}

function removeSticker(id) {
  state.placedStickers = state.placedStickers.filter(s => s.id !== id);
  saveState();
  renderPlacedStickers();
  playSound('click');
}

async function clearAllStickers() {
  if (state.placedStickers.length === 0) return;
  
  const confirmed = await showSanrioModal({
    character: '🧹',
    title: 'Clear all stickers?',
    message: 'This will remove all stickers from your scene.',
    confirmText: 'Clear All',
    cancelText: 'Keep Them'
  });
  
  if (confirmed) {
    state.placedStickers = [];
    saveState();
    renderPlacedStickers();
    showToast('All stickers cleared!');
  }
}

function initStickerDecorating() {
  // Decorate button
  const decorateBtn = document.getElementById('decorate-btn');
  if (decorateBtn) {
    decorateBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDecorateMode();
    });
  }
  
  // Tray close button
  const closeBtn = document.getElementById('sticker-tray-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDecorateMode();
    });
  }
  
  // Done button
  const doneBtn = document.getElementById('sticker-done-btn');
  if (doneBtn) {
    doneBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDecorateMode();
    });
  }
  
  // Clear button
  const clearBtn = document.getElementById('sticker-clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearAllStickers);
  }
  
  // Render any saved stickers
  renderPlacedStickers();
}

// ═══════════════════════════════════════════════════════════════════════════════
// TIMER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function startTimer(minutes) {
  // Validate minutes input
  if (!minutes || minutes <= 0 || minutes > 180) {
    console.error('Invalid timer duration:', minutes);
    showToast('Please enter a valid duration (1-180 minutes)');
    return;
  }
  
  // CRITICAL: Stop any existing timer before starting a new one
  // This prevents conflicts if startTimer is called while a timer is already running
  if (state.timer.isRunning || timerInterval || syncInterval) {
    console.log('Stopping existing timer before starting new one');
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    if (syncInterval) {
      clearInterval(syncInterval);
      syncInterval = null;
    }
    // Notify background to stop existing timer and wait for confirmation
    // This prevents race conditions where startTimer is sent before stopTimer completes
    sendChromeMessage({ action: 'stopTimer' }, (response, error) => {
      if (error) {
        console.error('Failed to stop timer:', error);
        // Still try to start new timer even if stop failed
      }
      // After stopTimer completes (or fails), start the new timer
      startNewTimer(minutes);
    });
    return; // Exit early, startNewTimer will handle the rest
  }
  
  // No existing timer, start immediately
  startNewTimer(minutes);
}

// Helper function to actually start the timer (called after stopTimer completes if needed)
function startNewTimer(minutes) {
  state.timer.duration = minutes;
  state.timer.remaining = minutes * 60;
  state.timer.isRunning = true;
  state.timer.isPaused = false;
  state.timer.startTime = Date.now();
  
  saveState();
  
  // Update UI
  hideElement('mode-selection');
  showElement('timer-controls');
  hideElement('session-complete');
  updateTimerLabel('Focus Time');
  
  // Update button text
  const pauseBtn = document.getElementById('pause-btn');
  if (pauseBtn) {
    pauseBtn.innerHTML = '<span class="btn-icon">⏸️</span> Pause';
  }
  
  // Notify background FIRST to ensure it has the correct startTime
  sendChromeMessage({ action: 'startTimer', duration: minutes }, (response, error) => {
    if (error || (response && response.success === false)) {
      console.error('Failed to start timer in background:', error || response?.error);
      // Revert UI state if start failed
      state.timer.isRunning = false;
      state.timer.isPaused = false;
      showElement('mode-selection');
      hideElement('timer-controls');
      showToast('Failed to start timer. Please try again.');
      return;
    }
    // Start interval after background confirms
    runTimer();
  });
  
  // Show character reaction
  showEmote(getRandomEmote(state.currentCharacter));
  showToast(`Let's study for ${minutes} minutes! 📚`);
}

function runTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  
  // Track last milestone times to prevent duplicate notifications
  let lastMilestoneCheck = {
    halfway: false,
    quarterLeft: false,
    oneMin: false,
    fiveMinReaction: null // Track last 5-minute mark we reacted at
  };
  
  timerInterval = setInterval(() => {
    if (!state.timer.isPaused && state.timer.isRunning && state.timer.startTime) {
      // Recalculate remaining time from startTime to prevent drift
      // This ensures accuracy even if the popup was minimized
      const elapsed = Math.floor((Date.now() - state.timer.startTime) / 1000);
      // Validate duration to prevent calculation errors
      const validDuration = state.timer.duration || 25;
      const totalSeconds = validDuration * 60;
      state.timer.remaining = Math.max(0, totalSeconds - elapsed);
      
      updateTimer();
      
      // Random character reactions every 5 minutes (300 seconds)
      // Check if we've crossed a 5-minute boundary
      const currentFiveMinMark = Math.floor(elapsed / 300);
      if (state.timer.remaining > 0 && lastMilestoneCheck.fiveMinReaction !== currentFiveMinMark && currentFiveMinMark > 0) {
        lastMilestoneCheck.fiveMinReaction = currentFiveMinMark;
        showEmote(getRandomEmote(state.currentCharacter));
        showEncouragement();
      }
      
      // Milestone encouragements (only show once per milestone)
      // Prevent division by zero
      const progress = totalSeconds > 0 ? elapsed / totalSeconds : 0;
      const remainingSeconds = state.timer.remaining;
      
      if (progress >= 0.5 && !lastMilestoneCheck.halfway) {
        lastMilestoneCheck.halfway = true;
        showToast("🎯 Halfway there! Keep going!");
      } else if (progress >= 0.75 && !lastMilestoneCheck.quarterLeft) {
        lastMilestoneCheck.quarterLeft = true;
        showToast("🔥 Almost done! You've got this!");
      } else if (remainingSeconds <= 60 && remainingSeconds > 0 && !lastMilestoneCheck.oneMin) {
        lastMilestoneCheck.oneMin = true;
        showToast("⏰ Final minute! Finish strong! 💪");
      }
      
      // Complete! But verify we've actually run for the full duration
      if (state.timer.remaining <= 0) {
        // Double-check: ensure we've actually elapsed the full duration
        const elapsed = Math.floor((Date.now() - state.timer.startTime) / 1000);
        // Validate duration before using it
        const validDuration = state.timer.duration || 25;
        const expectedDurationSeconds = validDuration * 60;
        
        // Only complete if we've actually run for the full expected duration
        // This prevents early completion when duration gets changed incorrectly
        if (elapsed >= expectedDurationSeconds) {
          completeSession();
        } else {
          console.warn('Timer completion prevented in runTimer - elapsed:', Math.floor(elapsed/60), 'min, expected:', validDuration, 'min');
          // Reset remaining to prevent this check from running constantly
          state.timer.remaining = expectedDurationSeconds - elapsed;
        }
      }
    } else if (state.timer.isPaused) {
      // When paused, still update display but don't recalculate
      updateTimer();
    }
  }, 1000);
  
  // Also sync with background periodically to ensure accuracy
  // Only create sync interval if timer is actually running and not paused
  // This prevents creating unnecessary intervals that immediately clear themselves
  if (syncInterval) clearInterval(syncInterval);
  if (state.timer.isRunning && !state.timer.isPaused) {
    syncInterval = setInterval(() => {
      if (state.timer.isRunning && !state.timer.isPaused) {
        syncWithBackground().catch(err => console.log('Sync error:', err));
      } else {
        if (syncInterval) {
          clearInterval(syncInterval);
          syncInterval = null;
        }
      }
    }, 5000); // Sync every 5 seconds
  } else {
    syncInterval = null;
  }
}

function pauseTimer() {
  // Only allow pausing if timer is actually running
  if (!state.timer.isRunning) {
    console.warn('Cannot pause timer - timer is not running');
    return;
  }
  
  // Prevent rapid clicking - if already in the desired state, do nothing
  // This prevents state mismatches from rapid button clicks
  const wantsToPause = !state.timer.isPaused;
  if (wantsToPause === state.timer.isPaused) {
    console.log('Timer already in desired state, ignoring click');
    return;
  }
  
  state.timer.isPaused = !state.timer.isPaused;
  
  const pauseBtn = document.getElementById('pause-btn');
  if (state.timer.isPaused) {
    if (pauseBtn) {
      pauseBtn.innerHTML = '<span class="btn-icon">▶️</span> Resume';
    }
    updateTimerLabel('Paused');
    showToast('Take a quick breather! 🌸');
    
    // Calculate remaining time before pausing
    if (state.timer.startTime && state.timer.startTime > 0) {
      const elapsed = Math.floor((Date.now() - state.timer.startTime) / 1000);
      const validDuration = state.timer.duration || 25;
      state.timer.remaining = Math.max(0, (validDuration * 60) - elapsed);
    }
    
    // Stop the timer interval and sync interval
    if (timerInterval) clearInterval(timerInterval);
    if (syncInterval) clearInterval(syncInterval);
    timerInterval = null;
    syncInterval = null;
    
    // Tell background to pause
    sendChromeMessage({ action: 'pauseTimer' }, (response, error) => {
      if (error || (response && response.success === false)) {
        console.error('Failed to pause timer in background:', error || response?.error);
        // Revert UI state if pause failed
        state.timer.isPaused = false;
        if (pauseBtn) {
          pauseBtn.innerHTML = '<span class="btn-icon">⏸️</span> Pause';
        }
        updateTimerLabel('Focus Time');
        showToast('Failed to pause timer. Please try again.');
      }
    });
  } else {
    if (pauseBtn) {
      pauseBtn.innerHTML = '<span class="btn-icon">⏸️</span> Pause';
    }
    updateTimerLabel('Focus Time');
    showToast("Let's keep going! 💪");
    
    // Tell background to resume FIRST, then update local state after confirmation
    // This ensures state consistency if resume fails
    sendChromeMessage({ action: 'resumeTimer' }, (response) => {
      if (response && response.success !== false) {
        // Adjust startTime to account for pause duration
        // Calculate how much time was remaining when paused
        // CRITICAL: Ensure remainingSeconds is valid and doesn't exceed duration
        // Also validate duration to prevent calculation errors
        const validDuration = state.timer.duration || 25;
        const remainingSeconds = Math.max(0, Math.min(state.timer.remaining, validDuration * 60));
        const elapsedBeforePause = (validDuration * 60) - remainingSeconds;
        // Adjust startTime to account for the elapsed time before pause
        state.timer.startTime = Date.now() - (elapsedBeforePause * 1000);
        
        // Restart timer after background confirms
        runTimer();
      } else {
        // Resume failed, revert pause state
        console.error('Failed to resume timer, reverting to paused state');
        state.timer.isPaused = true;
        if (pauseBtn) {
          pauseBtn.innerHTML = '<span class="btn-icon">▶️</span> Resume';
        }
        updateTimerLabel('Paused');
      }
    });
  }
  
  saveState();
}

async function stopTimer() {
  // Validate duration to prevent division by zero
  const totalMinutes = state.timer.duration || 25;
  const elapsedMinutes = Math.floor((totalMinutes * 60 - state.timer.remaining) / 60);
  const percentComplete = totalMinutes > 0 ? elapsedMinutes / totalMinutes : 0;
  
  let character = '😿';
  let title = 'End session early?';
  let warningMsg = '';
  let isDanger = true;
  
  if (percentComplete < 0.25) {
    character = '😭';
    title = 'Wait, don\'t go!';
    warningMsg = 'Penalty: -10 FP and friendship will decrease slightly. Your pal will be sad...';
  } else if (percentComplete < 0.5) {
    character = '😢';
    title = 'Leaving so soon?';
    warningMsg = 'Small penalty: -8 FP and friendship will decrease slightly. Your pal is a bit disappointed...';
  } else if (percentComplete < 0.75) {
    character = '😕';
    title = 'Almost there!';
    warningMsg = 'Tiny penalty: -3 FP. Keep going a bit more!';
  } else {
    character = '🤔';
    title = 'So close!';
    warningMsg = 'You completed most of it! You\'ll get partial FP.';
    isDanger = false;
  }
  
  const confirmed = await showSanrioModal({
    character,
    title,
    message: warningMsg,
    confirmText: 'End Session',
    cancelText: 'Keep Studying',
    danger: isDanger
  });
  
  if (confirmed) {
    applyEarlyEndPenalty(percentComplete, elapsedMinutes);
    resetTimer();
  }
}

function applyEarlyEndPenalty(percentComplete, elapsedMinutes) {
  // Validate current character exists
  if (!CHARACTERS[state.currentCharacter]) {
    console.warn('Invalid current character in applyEarlyEndPenalty, using default');
    state.currentCharacter = Object.keys(CHARACTERS)[0] || 'cinnamoroll';
  }
  const character = CHARACTERS[state.currentCharacter];
  
  if (percentComplete < 0.25) {
    // Reduced penalty - quit very early
    loseFP(10);
    loseFriendship(5);
    showEmote('😢');
    showToast(`${character.name} is sad... -10 FP, -5% friendship 💔`);
  } else if (percentComplete < 0.5) {
    // Reduced medium penalty
    loseFP(8);
    loseFriendship(2);
    showEmote('😞');
    showToast(`${character.name} is a bit disappointed... -8 FP, -2% friendship`);
  } else if (percentComplete < 0.75) {
    // Reduced small penalty
    loseFP(3);
    showEmote('😕');
    showToast('Session ended early... -3 FP');
  } else {
    // Completed most - small reward
    const partialFP = Math.floor(elapsedMinutes * 0.5);
    if (partialFP > 0) {
      state.totalFP += partialFP;
      state.characters[state.currentCharacter].fp += Math.floor(partialFP * 0.3);
      updateHeader();
      updateCharacterDisplay();
      saveState();
      showToast(`Almost there! +${partialFP} FP (partial)`);
    }
  }
}

function loseFriendship(percent) {
  const currentFP = state.characters[state.currentCharacter].fp;
  const loss = Math.floor(currentFP * (percent / 100));
  state.characters[state.currentCharacter].fp = Math.max(0, currentFP - loss);
  updateCharacterDisplay();
  saveState();
}

function applyStreakBrokenPenalty(lostStreak) {
  // Validate current character exists
  if (!CHARACTERS[state.currentCharacter]) {
    console.warn('Invalid current character in applyStreakBrokenPenalty, using default');
    state.currentCharacter = Object.keys(CHARACTERS)[0] || 'cinnamoroll';
  }
  const character = CHARACTERS[state.currentCharacter];
  
  // Penalty scales with how big the streak was
  let fpPenalty = 0;
  let friendshipPenalty = 0;
  let message = '';
  
  if (lostStreak >= 14) {
    // Lost a 2+ week streak - devastating
    fpPenalty = 100;
    friendshipPenalty = 15;
    message = `💔 You lost a ${lostStreak}-day streak! ${character.name} is devastated...\n-${fpPenalty} FP, -${friendshipPenalty}% friendship`;
  } else if (lostStreak >= 7) {
    // Lost a week streak - severe
    fpPenalty = 50;
    friendshipPenalty = 10;
    message = `😢 You lost a ${lostStreak}-day streak! ${character.name} missed you...\n-${fpPenalty} FP, -${friendshipPenalty}% friendship`;
  } else if (lostStreak >= 3) {
    // Lost a small streak - moderate
    fpPenalty = 20;
    friendshipPenalty = 5;
    message = `😞 You lost your ${lostStreak}-day streak...\n-${fpPenalty} FP, -${friendshipPenalty}% friendship`;
  } else {
    // Small streak loss - minor
    fpPenalty = 5;
    friendshipPenalty = 0;
    message = `Your streak was reset. -${fpPenalty} FP`;
  }
  
  // Apply penalties
  state.totalFP = Math.max(0, state.totalFP - fpPenalty);
  
  if (friendshipPenalty > 0) {
    Object.keys(state.characters).forEach(charId => {
      if (state.characters[charId].unlocked) {
        const currentFP = state.characters[charId].fp;
        const loss = Math.floor(currentFP * (friendshipPenalty / 100));
        state.characters[charId].fp = Math.max(0, currentFP - loss);
      }
    });
  }
  
  updateHeader();
  updateCharacterDisplay();
  saveState();
  
  // Show toast notification
  showToast(`💔 Streak Lost! Your ${lostStreak}-day streak was broken...`);
  
  // Send browser notification
  sendChromeMessage({ 
    action: 'streakNotification', 
    type: 'lost', 
    streakDays: lostStreak 
  });
  
  // Show warning after a delay
  // Check if modal elements exist before showing (popup might be closed)
  setTimeout(() => {
    const modal = document.getElementById('sanrio-modal');
    if (modal) {
      showSanrioModal({
        character: lostStreak >= 7 ? '💔' : '😢',
        title: 'Streak Lost!',
        message: message,
        confirmText: 'I\'ll do better!',
        showCancel: false
      });
    }
  }, 500);
}

function resetTimer() {
  if (timerInterval) clearInterval(timerInterval);
  if (syncInterval) clearInterval(syncInterval);
  if (idleReactionInterval) clearInterval(idleReactionInterval);
  // Note: accessoryTimerInterval is intentionally not cleared here as it's independent of the timer
  timerInterval = null;
  syncInterval = null;
  idleReactionInterval = null;
  
  // Reset completion flag
  isCompletingSession = false;
  
  state.timer.isRunning = false;
  state.timer.isPaused = false;
  state.timer.remaining = 25 * 60;
  state.timer.duration = 25;
  state.timer.startTime = null;
  
  saveState();
  
  // Update UI
  showElement('mode-selection');
  hideElement('timer-controls');
  hideElement('session-complete');
  updateTimer();
  updateTimerLabel('Ready');
  
  sendChromeMessage({ action: 'stopTimer' });
}

// Track if we're currently completing a session to prevent double-completion
let isCompletingSession = false;

function completeSession() {
  // Prevent double-completion
  if (isCompletingSession) {
    console.log('Session completion already in progress');
    return;
  }
  
  // Check if timer was actually running (or just completed)
  const wasRunning = state.timer.isRunning || state.timer.remaining === 0;
  const validDuration = state.timer.duration || 25;
  if (!wasRunning && state.timer.remaining === validDuration * 60) {
    // Timer was never started or was reset
    console.log('Timer was not running, cannot complete');
    return;
  }
  
  isCompletingSession = true;
  
  // Clear intervals immediately to prevent race conditions
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  if (syncInterval) {
    clearInterval(syncInterval);
  }
  syncInterval = null;
  
  // CRITICAL: Use the duration that was set when the timer started
  // Verify that we've actually run for the full duration before completing
  let duration = state.timer.duration;
  
  // If we have a startTime, verify we've actually completed the full duration
  if (state.timer.startTime && state.timer.startTime > 0) {
    const elapsed = Math.floor((Date.now() - state.timer.startTime) / 1000);
    const elapsedMinutes = Math.floor(elapsed / 60);
    const expectedDurationSeconds = duration * 60;
    
    // Only allow completion if we've actually run for at least the expected duration
    // This prevents early completion bugs
    if (elapsed < expectedDurationSeconds) {
      console.warn('Timer completion prevented - not enough time elapsed. Elapsed:', elapsedMinutes, 'min, Expected:', duration, 'min');
      isCompletingSession = false;
      // Restart timer if it was still supposed to be running
      if (state.timer.isRunning && !state.timer.isPaused) {
        runTimer();
      }
      return;
    }
    
    console.log('Session completion verified - elapsed:', elapsedMinutes, 'minutes, duration:', duration);
  }
  
  // Ensure we have a valid duration
  if (!duration || duration <= 0) {
    console.error('Invalid duration for session completion:', duration);
    isCompletingSession = false;
    return;
  }
  
  const fp = calculateFPReward(duration);
  
  // Mark timer as not running to prevent double-completion
  state.timer.isRunning = false;
  state.timer.isPaused = false;
  state.timer.remaining = 0;
  
  // Calculate friendship percentage before awarding
  const prevFP = state.characters[state.currentCharacter].fp;
  const prevPercent = Math.min(100, (prevFP / 500) * 100);
  
  // Update stats
  updateStats(duration);
  
  // Award FP
  awardFP(fp);
  
  // Calculate friendship percentage after awarding
  const newFP = state.characters[state.currentCharacter].fp;
  const newPercent = Math.min(100, (newFP / 500) * 100);
  const friendshipGained = Math.round((newPercent - prevPercent) * 10) / 10; // Round to 1 decimal
  
  // Check achievements
  checkAchievements();
  
  // Update UI
  hideElement('timer-controls');
  
  // Calculate final FP with multipliers (same logic as awardFP)
  let streakMultiplier = 1;
  if (state.stats.currentStreak >= 14) streakMultiplier = 1.3;
  else if (state.stats.currentStreak >= 7) streakMultiplier = 1.2;
  else if (state.stats.currentStreak >= 3) streakMultiplier = 1.1;
  const accessoryBonus = getAccessoryBonus();
  const totalMultiplier = streakMultiplier + accessoryBonus;
  const finalFP = Math.floor(fp * totalMultiplier);
  
  const rewardFPEl = document.getElementById('reward-fp');
  const rewardFriendshipEl = document.getElementById('reward-friendship');
  if (rewardFPEl) rewardFPEl.textContent = `+${finalFP} FP`;
  if (rewardFriendshipEl) rewardFriendshipEl.textContent = `+${friendshipGained}% Friendship`;
  
  // Update streak progress display
  updateStreakProgress(duration);
  
  // Validate current character exists
  if (!CHARACTERS[state.currentCharacter] || !state.characters[state.currentCharacter]) {
    console.warn('Invalid current character in completeSession, using default');
    state.currentCharacter = Object.keys(CHARACTERS)[0] || 'cinnamoroll';
    // Ensure character data exists
    if (!state.characters[state.currentCharacter]) {
      state.characters[state.currentCharacter] = { fp: 0, unlocked: true };
    }
  }
  const character = CHARACTERS[state.currentCharacter];
  const level = getFriendshipLevel(Math.min(100, Math.floor((state.characters[state.currentCharacter].fp / 500) * 100)));
  const completeMessageEl = document.getElementById('complete-message');
  if (completeMessageEl) {
    completeMessageEl.textContent = getRandomDialogue(state.currentCharacter, level.level);
  }
  
  showElement('session-complete');
  
  // Celebration effects!
  showConfetti();
  playSound('complete');
  
  // Notify background
  sendChromeMessage({ action: 'sessionComplete', fp: finalFP });
  
  saveState();
  
  // Reset completion flag after a short delay
  setTimeout(() => {
    isCompletingSession = false;
  }, 1000);
}

function updateStats(duration) {
  const now = new Date();
  const today = now.toDateString();
  
  state.stats.totalSessions++;
  state.stats.totalMinutes += duration;
  
  if (duration > state.stats.longestSession) {
    state.stats.longestSession = duration;
  }
  
  // Check time achievements
  const hour = now.getHours();
  if (hour < 8) state.stats.earlyBird = true;
  if (hour >= 22) state.stats.nightOwl = true;
  
  // Update daily sessions and minutes
  const STREAK_REQUIREMENT = 120; // 2 hours in minutes
  const wasNewDay = state.stats.todayDate !== today;
  
  if (wasNewDay) {
    // New day - save yesterday's minutes and check streak
    // CRITICAL: Save yesterday's minutes BEFORE resetting, but AFTER checking if it was valid
    const yesterdayMinutes = state.stats.dailyMinutes || 0;
    state.stats.yesterdayMinutes = yesterdayMinutes;
    
    // Check if yesterday met the requirement
    if (state.stats.lastSessionDate) {
      const lastDate = new Date(state.stats.lastSessionDate);
      // Validate date is valid before using it
      if (isNaN(lastDate.getTime())) {
        console.warn('Invalid lastSessionDate, resetting:', state.stats.lastSessionDate);
        state.stats.lastSessionDate = null;
        // If date is invalid, we can't determine streak status, so reset streak to be safe
        if (state.stats.currentStreak > 0) {
          applyStreakBrokenPenalty(state.stats.currentStreak);
          state.stats.currentStreak = 0;
        }
      } else if (isYesterday(state.stats.lastSessionDate)) {
        // Yesterday was the last session day - check if they reached 2 hours
        if (yesterdayMinutes < STREAK_REQUIREMENT) {
          // Didn't reach 2 hours yesterday - streak broken
          if (state.stats.currentStreak > 0) {
            const lostStreak = state.stats.currentStreak;
            applyStreakBrokenPenalty(lostStreak);
            state.stats.currentStreak = 0;
          }
        }
      } else if (!isSameDay(lastDate, new Date()) && !isYesterday(state.stats.lastSessionDate)) {
        // Missed more than one day - streak broken
        if (state.stats.currentStreak > 0) {
          const lostStreak = state.stats.currentStreak;
          applyStreakBrokenPenalty(lostStreak);
          state.stats.currentStreak = 0;
        }
      }
    }
    
    // Reset for new day - this session's duration will be added below
    state.stats.todayDate = today;
    state.stats.sessionsToday = 0;
    state.stats.dailyMinutes = 0;
    state.stats.streakNotifiedToday = false; // Reset notification flag
  }
  
  state.stats.sessionsToday++;
  state.stats.dailyMinutes += duration;
  
  // Update streak - requires 2 hours (120 minutes) per day
  // Only notify once per day when reaching 120 minutes
  if (state.stats.dailyMinutes >= STREAK_REQUIREMENT && !state.stats.streakNotifiedToday) {
    // User has reached 2 hours today - can start/continue streak
    let streakEvent = null; // Track what happened: 'started', 'continued', or null
    
    // Validate lastSessionDate before using it
    let lastSessionDateValid = false;
    if (state.stats.lastSessionDate) {
      const testDate = new Date(state.stats.lastSessionDate);
      lastSessionDateValid = !isNaN(testDate.getTime());
      if (!lastSessionDateValid) {
        console.warn('Invalid lastSessionDate in streak logic, resetting:', state.stats.lastSessionDate);
        state.stats.lastSessionDate = null;
      }
    }
    
    if (!state.stats.lastSessionDate || !lastSessionDateValid) {
      // First time - start streak
      state.stats.currentStreak = 1;
      state.stats.lastSessionDate = now.toISOString();
      streakEvent = 'started';
    } else if (isSameDay(state.stats.lastSessionDate, now)) {
      // Same day - streak already counted when we first hit 120 minutes
      // Just update lastSessionDate to keep it current
      state.stats.lastSessionDate = now.toISOString();
      // Don't notify again if we already notified today
    } else if (isYesterday(state.stats.lastSessionDate)) {
      // Yesterday was completed - continue streak
      state.stats.currentStreak++;
      state.stats.lastSessionDate = now.toISOString();
      streakEvent = 'continued';
    } else {
      // Missed a day - streak broken, start new one
      if (state.stats.currentStreak > 0) {
        applyStreakBrokenPenalty(state.stats.currentStreak);
      }
      state.stats.currentStreak = 1;
      state.stats.lastSessionDate = now.toISOString();
      streakEvent = 'started';
    }
    
    if (state.stats.currentStreak > state.stats.bestStreak) {
      state.stats.bestStreak = state.stats.currentStreak;
    }
    
    // Show notifications for streak events (only once per day)
    if (streakEvent === 'started') {
      state.stats.streakNotifiedToday = true;
      showToast(`🔥 Streak Started! Day ${state.stats.currentStreak} of your study streak! 💪`);
      sendChromeMessage({ 
        action: 'streakNotification', 
        type: 'started', 
        streakDays: state.stats.currentStreak 
      });
    } else if (streakEvent === 'continued') {
      state.stats.streakNotifiedToday = true;
      showToast(`🔥 Amazing! Day ${state.stats.currentStreak} of your streak! Keep going! ✨`);
      sendChromeMessage({ 
        action: 'streakNotification', 
        type: 'continued', 
        streakDays: state.stats.currentStreak 
      });
    }
  } else if (state.stats.dailyMinutes >= STREAK_REQUIREMENT && state.stats.streakNotifiedToday) {
    // Already reached 120 min today, just update lastSessionDate if needed
    if (state.stats.lastSessionDate && isSameDay(state.stats.lastSessionDate, now)) {
      state.stats.lastSessionDate = now.toISOString();
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// STREAK PROGRESS DISPLAY
// ═══════════════════════════════════════════════════════════════════════════════

function updateStreakProgress(sessionDuration) {
  const STREAK_REQUIREMENT = 120; // 2 hours in minutes
  const dailyMinutes = state.stats.dailyMinutes;
  const progressPercent = Math.min(100, (dailyMinutes / STREAK_REQUIREMENT) * 100);
  const remainingMinutes = Math.max(0, STREAK_REQUIREMENT - dailyMinutes);
  
  const streakSection = document.getElementById('streak-progress-section');
  const streakStatus = document.getElementById('streak-status');
  const streakProgressFill = document.getElementById('streak-progress-fill');
  const streakProgressText = document.getElementById('streak-progress-text');
  
  if (!streakSection || !streakStatus || !streakProgressFill || !streakProgressText) return;
  
  // Update progress bar
  streakProgressFill.style.width = `${progressPercent}%`;
  
  // Determine status message
  if (state.stats.currentStreak > 0) {
    // User has an active streak
    if (dailyMinutes >= STREAK_REQUIREMENT) {
      streakStatus.textContent = `Continuing Your ${state.stats.currentStreak}-Day Streak!`;
      streakProgressText.textContent = `✅ 120 / 120 minutes - Streak maintained!`;
      streakProgressFill.style.background = 'linear-gradient(90deg, #ff6b7f, #ff8a9b)';
    } else {
      streakStatus.textContent = `Continuing Your ${state.stats.currentStreak}-Day Streak`;
      streakProgressText.textContent = `${dailyMinutes} / 120 minutes (${remainingMinutes} min left)`;
      streakProgressFill.style.background = 'linear-gradient(90deg, #ff6b7f, #ff8a9b)';
    }
  } else {
    // User is building a streak
    if (dailyMinutes >= STREAK_REQUIREMENT) {
      streakStatus.textContent = 'Streak Started!';
      streakProgressText.textContent = `✅ 120 / 120 minutes - Streak earned!`;
      streakProgressFill.style.background = 'linear-gradient(90deg, #ff6b7f, #ff8a9b)';
    } else {
      streakStatus.textContent = 'Building Your Streak';
      streakProgressText.textContent = `${dailyMinutes} / 120 minutes (${remainingMinutes} min left)`;
      streakProgressFill.style.background = 'linear-gradient(90deg, #ffb5ba, #ff8a9b)';
    }
  }
  
  // Show the streak section
  streakSection.style.display = 'block';
}

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

// Safe Chrome message sender with error handling
function sendChromeMessage(message, callback) {
  if (typeof chrome !== 'undefined' && chrome.runtime) {
    try {
      chrome.runtime.sendMessage(message, (response) => {
        if (chrome.runtime.lastError) {
          console.warn('Chrome message error:', chrome.runtime.lastError.message);
          if (callback) callback(null, chrome.runtime.lastError);
          return;
        }
        if (callback) callback(response);
      });
    } catch (error) {
      console.error('Error sending Chrome message:', error);
      if (callback) callback(null, error);
    }
  } else {
    console.warn('Chrome runtime not available');
    if (callback) callback(null, new Error('Chrome runtime not available'));
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// FRIENDSHIP & FP FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function awardFP(amount) {
  // Apply streak multiplier (lower base - accessories matter more!)
  let streakMultiplier = 1;
  if (state.stats.currentStreak >= 14) streakMultiplier = 1.3;      // 2 weeks
  else if (state.stats.currentStreak >= 7) streakMultiplier = 1.2;  // 1 week
  else if (state.stats.currentStreak >= 3) streakMultiplier = 1.1;  // 3 days
  
  // Apply accessory bonus (this is where the real gains come from!)
  const accessoryBonus = getAccessoryBonus();
  const totalMultiplier = streakMultiplier + accessoryBonus;
  
  const finalAmount = Math.max(0, Math.floor(amount * totalMultiplier)); // Ensure non-negative
  
  // Check previous level
  const prevPercent = Math.min(100, Math.floor((state.characters[state.currentCharacter].fp / 500) * 100));
  const prevLevel = getFriendshipLevel(prevPercent);
  
  // Ensure FP values don't go negative
  state.totalFP = Math.max(0, state.totalFP + finalAmount);
  state.characters[state.currentCharacter].fp = Math.max(0, state.characters[state.currentCharacter].fp + finalAmount);
  
  // Check new level
  const newPercent = Math.min(100, Math.floor((state.characters[state.currentCharacter].fp / 500) * 100));
  const newLevel = getFriendshipLevel(newPercent);
  
  // Level up celebration!
  if (newLevel.level > prevLevel.level) {
    celebrateLevelUp(`Lv.${newLevel.level} - ${newLevel.name}`);
  }
  
  // Check if unlocked new characters
  checkCharacterUnlocks();
  
  updateHeader();
  updateStreakBadge();
  updateCharacterDisplay();
  saveState();
  
  // Show FP popup
  showFPPopup(finalAmount);
  
  // Show bonus messages
  if (totalMultiplier > 1) {
    let bonusMsg = '';
    if (streakMultiplier > 1 && accessoryBonus > 0) {
      bonusMsg = `${totalMultiplier.toFixed(2)}x bonus (streak + accessory)! 🔥🎀`;
    } else if (streakMultiplier > 1) {
      bonusMsg = `${streakMultiplier}x streak bonus! 🔥`;
    } else if (accessoryBonus > 0) {
      bonusMsg = `+${Math.round(accessoryBonus * 100)}% accessory bonus! 🎀`;
    }
    if (bonusMsg) {
      setTimeout(() => showToast(bonusMsg), 2500);
    }
  }
}

function loseFP(amount) {
  state.characters[state.currentCharacter].fp = Math.max(0, state.characters[state.currentCharacter].fp - amount);
  updateHeader();
  updateCharacterDisplay();
  saveState();
}

function checkCharacterUnlocks() {
  // All characters are always unlocked - no progression needed
  // This function is kept for compatibility but does nothing
}

// ═══════════════════════════════════════════════════════════════════════════════
// ACHIEVEMENTS
// ═══════════════════════════════════════════════════════════════════════════════

// Show achievements from queue one at a time
async function showNextAchievement() {
  if (showingAchievement || achievementQueue.length === 0) return;
  
  showingAchievement = true;
  const achievement = achievementQueue.shift();
  
  await showSanrioModal({
    character: achievement.icon,
    title: '🏆 Achievement Unlocked!',
    message: achievement.fpReward 
      ? `${achievement.name}\n${achievement.desc}\n\n💖 +${achievement.fpReward} FP Reward!`
      : `${achievement.name}\n${achievement.desc}`,
    confirmText: 'Awesome!',
    showCancel: false
  });
  
  showingAchievement = false;
  
  // Show next achievement if any
  if (achievementQueue.length > 0) {
    setTimeout(() => showNextAchievement(), 300);
  }
}

function checkAchievements() {
  const stats = {
    ...state.stats,
    maxFriendshipLevel: Math.max(...Object.values(state.characters).map(c => getFriendshipLevel(Math.min(100, Math.floor((c.fp / 500) * 100))).level)),
    unlockedCharacters: Object.values(state.characters).filter(c => c.unlocked).length
  };
  
  const newlyUnlocked = [];
  
  // Check all achievements except mastery first
  const regularAchievements = ACHIEVEMENTS.filter(a => a.id !== 'mastery');
  regularAchievements.forEach(achievement => {
    if (!state.achievements.includes(achievement.id) && achievement.condition(stats)) {
      state.achievements.push(achievement.id);
      
      // Award FP for unlocking achievement
      if (achievement.fpReward) {
        state.totalFP += achievement.fpReward;
        showFPPopup(achievement.fpReward);
        updateHeader();
      }
      
      // Add to queue for showing
      newlyUnlocked.push(achievement);
    }
  });
  
  // Check mastery achievement (only if all other achievements are unlocked)
  const masteryAchievement = ACHIEVEMENTS.find(a => a.id === 'mastery');
  if (masteryAchievement && !state.achievements.includes('mastery')) {
    // Count how many regular achievements are unlocked
    const unlockedCount = state.achievements.filter(id => id !== 'mastery').length;
    const totalRegularAchievements = regularAchievements.length;
    
    // If all regular achievements are unlocked, unlock mastery!
    if (unlockedCount >= totalRegularAchievements) {
      state.achievements.push('mastery');
      
      // Award FP for mastery
      if (masteryAchievement.fpReward) {
        state.totalFP += masteryAchievement.fpReward;
        showFPPopup(masteryAchievement.fpReward);
        updateHeader();
      }
      
      // Add mastery to queue (should show last)
      newlyUnlocked.push(masteryAchievement);
    }
  }
  
  // Add all newly unlocked achievements to queue
  if (newlyUnlocked.length > 0) {
    achievementQueue.push(...newlyUnlocked);
    
    // Start showing achievements after a delay (to let session complete screen show first)
    setTimeout(() => {
      showNextAchievement();
    }, 500);
  }
  
  saveState();
}

function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) {
    console.warn('Achievements grid not found');
    return;
  }
  grid.innerHTML = ACHIEVEMENTS.map(achievement => {
    const unlocked = state.achievements.includes(achievement.id);
    return `
      <div class="achievement-item ${unlocked ? 'unlocked' : 'locked'}">
        <div class="achievement-icon">${achievement.icon}</div>
        <div class="achievement-info">
          <div class="achievement-name">${achievement.name}</div>
          <div class="achievement-desc">${achievement.desc}</div>
          ${achievement.fpReward ? `<div class="achievement-reward">💖 +${achievement.fpReward} FP</div>` : ''}
        </div>
        <div class="achievement-check">${unlocked ? '✅' : '🔒'}</div>
      </div>
    `;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════════════════════
// COLLECTIBLES
// ═══════════════════════════════════════════════════════════════════════════════

function renderCollectibles(category = 'accessories') {
  const grid = document.getElementById('collectibles-grid');
  if (!grid) {
    console.warn('Collectibles grid not found');
    return;
  }
  const items = COLLECTIBLES[category];
  if (!items || !Array.isArray(items)) {
    console.warn('Invalid collectibles category:', category);
    return;
  }
  
  // Special rendering for accessories (shop items)
  if (category === 'accessories') {
    renderAccessoryShop();
    return;
  }
  
  let html = '<div class="collectible-items-grid">';
  html += items.map(item => {
    const owned = state.collectibles.includes(item.id);
    const canAfford = state.totalFP >= item.fpRequired;
    const locked = !owned && !canAfford;
    
    // Check if equipped (for wallpapers)
    const isEquipped = (category === 'wallpapers' && state.activeWallpaper === item.id);
    
    let statusText = '';
    let statusClass = '';
    
    if (isEquipped) {
      statusText = '⭐ Equipped';
      statusClass = 'owned equipped';
    } else if (owned) {
      if (category === 'stickers') {
        statusText = '🎨 Place with 🎨';
      } else {
        statusText = '👆 Tap to equip';
      }
      statusClass = 'owned';
    } else if (canAfford) {
      statusText = `💖 ${item.fpRequired}`;
      statusClass = 'can-buy';
    } else {
      statusText = `🔒 ${item.fpRequired}`;
      statusClass = 'locked';
    }
    
    return `
      <div class="collectible-item ${statusClass}" 
           data-id="${item.id}" 
           data-cost="${item.fpRequired}">
        <span class="collectible-icon">${item.icon}</span>
        <span class="collectible-name">${item.name}</span>
        <span class="collectible-status">${statusText}</span>
      </div>
    `;
  }).join('');
  html += '</div>';
  grid.innerHTML = html;
  
  // Add click handlers
  grid.querySelectorAll('.collectible-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      const cost = parseInt(item.dataset.cost);
      handleCollectibleClick(id, cost);
    });
  });
}

// Render accessory shop with temporary boost items
function renderAccessoryShop() {
  const grid = document.getElementById('collectibles-grid');
  if (!grid) {
    console.warn('Collectibles grid not found in renderAccessoryShop');
    return;
  }
  const accessories = COLLECTIBLES.accessories;
  if (!accessories || !Array.isArray(accessories)) {
    console.warn('Accessories not found or invalid');
    return;
  }
  
  // Check if there's an active boost
  const now = Date.now();
  const hasActiveBoost = state.activeAccessory && state.accessoryExpiresAt && state.accessoryExpiresAt > now;
  const activeAcc = hasActiveBoost ? accessories.find(a => a.id === state.activeAccessory) : null;
  const timeRemaining = hasActiveBoost ? Math.ceil((state.accessoryExpiresAt - now) / 60000) : 0;
  
  let shopHTML = '';
  
  // Show active boost banner if any
  if (hasActiveBoost && activeAcc) {
    shopHTML += `
      <div class="active-boost-banner">
        <div class="boost-icon">${activeAcc.icon}</div>
        <div class="boost-info">
          <div class="boost-name">${activeAcc.name} Active!</div>
          <div class="boost-bonus">+${Math.round(activeAcc.fpBonus * 100)}% FP & Friendship</div>
        </div>
        <div class="boost-time">⏰ ${timeRemaining}m</div>
      </div>
    `;
  }
  
  // Shop grid - 3x3 clean layout
  shopHTML += '<div class="accessory-shop-grid">';
  shopHTML += accessories.map(acc => {
    const canAfford = state.totalFP >= acc.cost;
    const isActive = state.activeAccessory === acc.id && hasActiveBoost;
    
    return `
      <div class="shop-item ${canAfford ? 'can-buy' : 'locked'} ${isActive ? 'active' : ''}" 
           data-id="${acc.id}">
        <span class="shop-icon">${acc.icon}</span>
        <span class="shop-name">${acc.name}</span>
        <span class="shop-bonus">+${Math.round(acc.fpBonus * 100)}%</span>
        <span class="shop-price ${canAfford ? '' : 'locked'}">💖 ${acc.cost}</span>
      </div>
    `;
  }).join('');
  shopHTML += '</div>';
  
  grid.innerHTML = shopHTML;
  
  // Add click handlers for shop items
  grid.querySelectorAll('.shop-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      purchaseAccessoryBoost(id);
    });
  });
}

// Purchase an accessory boost
async function purchaseAccessoryBoost(accessoryId) {
  const accessories = COLLECTIBLES.accessories || [];
  const accessory = accessories.find(a => a.id === accessoryId);
  if (!accessory) return;
  
  // Can't afford
  if (state.totalFP < accessory.cost) {
    showToast(`Need ${accessory.cost - state.totalFP} more FP! 💔`);
    return;
  }
  
  // Warn if already have active boost
  const now = Date.now();
  if (state.activeAccessory && state.accessoryExpiresAt && state.accessoryExpiresAt > now) {
    const accessories = COLLECTIBLES.accessories || [];
    const currentAcc = accessories.find(a => a.id === state.activeAccessory);
    const confirmed = await showSanrioModal({
      character: accessory.icon,
      title: 'Replace Current Boost?',
      message: `You have an active ${currentAcc?.name || 'boost'}! Buying ${accessory.name} will replace it.`,
      confirmText: '💫 Replace!',
      cancelText: 'Keep Current'
    });
    if (!confirmed) return;
  }
  
  // Confirm purchase
  const confirmed = await showSanrioModal({
    character: accessory.icon,
    title: `Buy ${accessory.name}?`,
    message: `${accessory.cost} FP for +${Math.round(accessory.fpBonus * 100)}% boost for ${accessory.duration} minutes!`,
    confirmText: '💖 Buy!',
    cancelText: 'Maybe Later'
  });
  
  if (confirmed) {
    // Purchase!
    state.totalFP -= accessory.cost;
    state.activeAccessory = accessoryId;
    state.accessoryExpiresAt = Date.now() + (accessory.duration * 60 * 1000);
    
    updateHeader();
    renderAccessoryShop();
    applyAccessory();
    saveState();
    
    showConfetti();
    showToast(`✨ ${accessory.icon} ${accessory.name} activated! +${Math.round(accessory.fpBonus * 100)}%`);
    playSound('complete');
    
    // Start countdown timer update
    startAccessoryTimer();
  }
}

// Timer to update accessory boost countdown
let accessoryTimerInterval = null;
function startAccessoryTimer() {
  if (accessoryTimerInterval) clearInterval(accessoryTimerInterval);
  
  accessoryTimerInterval = setInterval(() => {
    const now = Date.now();
    if (!state.accessoryExpiresAt || state.accessoryExpiresAt <= now) {
      // Boost expired
      if (state.activeAccessory) {
        const accessories = COLLECTIBLES.accessories || [];
        const expiredAcc = accessories.find(a => a.id === state.activeAccessory);
        showToast(`${expiredAcc?.icon || '⏰'} Boost expired!`);
        state.activeAccessory = null;
        state.accessoryExpiresAt = null;
        applyAccessory();
        saveState();
        
        // Update shop if on accessories tab
        const activeTab = document.querySelector('.collect-tab.active');
        if (activeTab && activeTab.dataset.collect === 'accessories') {
          renderAccessoryShop();
        }
      }
      clearInterval(accessoryTimerInterval);
      accessoryTimerInterval = null;
    } else {
      // Update display if on accessories tab
      const activeTab = document.querySelector('.collect-tab.active');
      if (activeTab && activeTab.dataset.collect === 'accessories') {
        renderAccessoryShop();
      }
    }
  }, 30000); // Update every 30 seconds
}

// Get current accessory boost multiplier
function getAccessoryBonus() {
  const now = Date.now();
  if (state.activeAccessory && state.accessoryExpiresAt && state.accessoryExpiresAt > now) {
    const accessories = COLLECTIBLES.accessories || [];
    const accessory = accessories.find(a => a.id === state.activeAccessory);
    return accessory ? accessory.fpBonus : 0;
  }
  return 0;
}

async function handleCollectibleClick(id, cost) {
  // Validate COLLECTIBLES arrays exist
  const wallpapers = COLLECTIBLES.wallpapers || [];
  const stickers = COLLECTIBLES.stickers || [];
  const item = [...wallpapers, ...stickers].find(i => i.id === id);
  
  if (!item) return;
  
  const category = id.startsWith('wp_') ? 'wallpaper' : 'sticker';
  
  // Already owned - equip/unequip for wallpapers
  if (state.collectibles.includes(id)) {
    if (category === 'wallpaper') {
      if (state.activeWallpaper === id) {
        state.activeWallpaper = null;
        showToast(`${item.icon} Wallpaper removed!`);
      } else {
        state.activeWallpaper = id;
        showToast(`${item.icon} Wallpaper equipped!`);
      }
      applyWallpaper();
      saveState();
      renderCollectibles('wallpapers');
    } else {
      showToast('Use 🎨 to place stickers!');
    }
    return;
  }
  
  // Can't afford
  if (state.totalFP < cost) {
    showToast(`Need ${cost - state.totalFP} more FP! 💔`);
    return;
  }
  
  // Confirm purchase
  const confirmed = await showSanrioModal({
    character: item.icon,
    title: `Buy ${item.name}?`,
    message: `This will cost ${cost} FP. You have ${state.totalFP} FP.`,
    confirmText: '💖 Buy!',
    cancelText: 'Maybe Later'
  });
  
  if (confirmed) {
    // Purchase!
    state.totalFP -= cost;
    state.collectibles.push(id);
    
    updateHeader();
    
    // Re-render current tab
    const activeTab = document.querySelector('.collect-tab.active');
    if (activeTab) {
      renderCollectibles(activeTab.dataset.collect);
    }
    
    saveState();
    
    showConfetti();
    showToast(`🎁 Got ${item.icon} ${item.name}!`);
    playSound('complete');
  }
}

// Apply wallpaper to entire Study tab
function applyWallpaper() {
  const characterScene = document.getElementById('character-scene');
  if (!characterScene) return; // Safety check
  
  // Remove existing wallpaper overlay
  const existingOverlay = document.querySelector('.wallpaper-overlay');
  if (existingOverlay) {
    existingOverlay.remove();
  }
  
  if (state.activeWallpaper) {
    const wallpapers = COLLECTIBLES.wallpapers || [];
    const wp = wallpapers.find(w => w.id === state.activeWallpaper);
    if (wp) {
      // Create wallpaper overlay for character scene only
      const overlay = document.createElement('div');
      overlay.className = 'wallpaper-overlay';
      
      // Create a scattered pattern of emojis within scene
      const rows = 3;
      const cols = 5;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const span = document.createElement('span');
          span.className = 'wp-emoji';
          span.textContent = wp.icon;
          
          // Stagger positions for a natural look
          const offsetX = (row % 2) * 10;
          span.style.left = (col * 20 + offsetX + 2) + '%';
          span.style.top = (row * 35 + 5) + '%';
          
          // Vary animation delays
          span.style.animationDelay = (row * 0.4 + col * 0.3) + 's';
          span.style.animationDuration = (3 + Math.random() * 2) + 's';
          
          overlay.appendChild(span);
        }
      }
      
      characterScene.insertBefore(overlay, characterScene.firstChild);
    }
  }
}

// Apply accessory ON the character based on position
function applyAccessory() {
  const characterEl = document.getElementById('character');
  const spriteEl = document.getElementById('character-sprite');
  if (!characterEl) return;
  
  // Remove existing accessory effects
  const existingEffects = characterEl.querySelectorAll('.accessory-effect');
  existingEffects.forEach(el => el.remove());
  
  // Remove glow from sprite
  if (spriteEl) {
    spriteEl.classList.remove('boost-active');
  }
  
  const now = Date.now();
  const hasActiveBoost = state.activeAccessory && state.accessoryExpiresAt && state.accessoryExpiresAt > now;
  
  if (hasActiveBoost) {
    const accessories = COLLECTIBLES.accessories || [];
    const acc = accessories.find(a => a.id === state.activeAccessory);
    if (acc) {
      // Add glow effect to character sprite
      if (spriteEl) {
        spriteEl.classList.add('boost-active');
      }
      
      // Create floating accessory effects around the character
      createAccessoryEffects(characterEl, acc);
    }
  }
}

// Create interactive floating accessory effects
function createAccessoryEffects(container, accessory) {
  if (!container) {
    console.warn('Container not provided to createAccessoryEffects');
    return;
  }
  // Main accessory floating above character
  const mainAcc = document.createElement('div');
  mainAcc.className = 'accessory-effect accessory-main';
  mainAcc.innerHTML = `<span class="acc-icon">${accessory.icon}</span>`;
  container.appendChild(mainAcc);
  
  // Orbiting sparkles
  const sparkleEmojis = ['✨', '💫', '⭐', '🌟'];
  for (let i = 0; i < 4; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = `accessory-effect accessory-orbit orbit-${i}`;
    sparkle.innerHTML = sparkleEmojis[i];
    container.appendChild(sparkle);
  }
  
  // Bonus indicator
  const bonusBadge = document.createElement('div');
  bonusBadge.className = 'accessory-effect accessory-bonus-badge';
  bonusBadge.innerHTML = `+${Math.round(accessory.fpBonus * 100)}%`;
  container.appendChild(bonusBadge);
}



// ═══════════════════════════════════════════════════════════════════════════════
// FRIENDS GRID
// ═══════════════════════════════════════════════════════════════════════════════

function renderFriendsGrid() {
  const grid = document.getElementById('character-grid');
  if (!grid) {
    console.warn('Character grid not found');
    return;
  }
  
  grid.innerHTML = Object.keys(CHARACTERS).map(charId => {
    const char = CHARACTERS[charId];
    const data = state.characters[charId];
    
    // Handle case where character doesn't exist in state yet
    if (!data) {
      return '';
    }
    
    const percentExact = Math.min(100, (data.fp / 500) * 100);
    const percent = Math.round(percentExact * 10) / 10; // 1 decimal place
    const level = getFriendshipLevel(Math.floor(percentExact));
    const isActive = state.currentCharacter === charId;
    
    // Create avatar HTML - use image if available
    const avatarHTML = char.image 
      ? `<img src="${char.image}" alt="${char.name}">`
      : char.sprite;
    
    return `
      <div class="character-card ${isActive ? 'active' : ''}" 
           data-character="${charId}">
        <div class="card-avatar">${avatarHTML}</div>
        <div class="card-name">${char.name} ${char.emoji}</div>
        <div class="card-level">Lv. ${level.level} - ${level.name}</div>
        <div class="card-progress">
          <div class="card-progress-fill" style="width: ${percent}%"></div>
        </div>
      </div>
    `;
  }).join('');
  
  // Add click handlers to all character cards
  grid.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => {
      const charId = card.dataset.character;
      selectCharacter(charId);
    });
  });
}

function selectCharacter(charId) {
  // Validate character exists
  if (!CHARACTERS[charId] || !state.characters[charId]) {
    console.error('Invalid character ID:', charId);
    return;
  }
  
  if (state.characters[charId].unlocked) {
    state.currentCharacter = charId;
    updateTheme(CHARACTERS[charId].theme);
    updateCharacterDisplay();
    renderFriendsGrid();
    
    // Update selector in settings
    const selector = document.getElementById('pal-selector');
    if (selector) selector.value = charId;
    
    saveState();
    showToast(`Now studying with ${CHARACTERS[charId].name}! ${CHARACTERS[charId].emoji}`);
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════════════════════════════════════════

function updateStatsDisplay() {
  document.getElementById('total-sessions').textContent = state.stats.totalSessions;
  document.getElementById('total-hours').textContent = Math.floor(state.stats.totalMinutes / 60);
  document.getElementById('best-streak').textContent = state.stats.bestStreak;
  
  // Update pal selector with lock status
  updatePalSelector();
}

function updatePalSelector() {
  const selector = document.getElementById('pal-selector');
  
  selector.innerHTML = Object.keys(CHARACTERS).map(charId => {
    const char = CHARACTERS[charId];
    const isSelected = state.currentCharacter === charId;
    return `<option value="${charId}" ${isSelected ? 'selected' : ''}>${char.emoji} ${char.name}</option>`;
  }).join('');
}

async function resetAllData() {
  const firstConfirm = await showSanrioModal({
    character: '⚠️',
    title: 'Reset all data?',
    message: 'This will delete all your progress, collectibles, and friendship!',
    confirmText: 'Yes, Reset',
    cancelText: 'No, Keep It',
    danger: true
  });
  
  if (firstConfirm) {
    const secondConfirm = await showSanrioModal({
      character: '😰',
      title: 'Are you really sure?',
      message: 'Your pals will miss you... This cannot be undone!',
      confirmText: 'Delete Everything',
      cancelText: 'Cancel',
      danger: true
    });
    
    if (secondConfirm) {
      state = { ...DEFAULT_STATE };
      saveState();
      location.reload();
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// SOUND FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function playSound(type) {
  if (!state.settings.soundEnabled) return;
  
  // Create audio context for sounds
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'complete') {
      // Happy chime
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } else if (type === 'click') {
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  } catch (e) {
    // Audio not supported
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// TAB NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════════

function switchTab(tabId) {
  // Update nav
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabId);
  });
  
  // Update content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === `tab-${tabId}`);
  });
  
  // Render tab-specific content
  if (tabId === 'friends') renderFriendsGrid();
  if (tabId === 'achievements') renderAchievements();
  if (tabId === 'collectibles') {
    // Set accessories as default tab for collectibles
    document.querySelectorAll('.collect-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.collect === 'accessories');
    });
    renderCollectibles('accessories');
  }
  if (tabId === 'settings') updateStatsDisplay();
  
  playSound('click');
}

// ═══════════════════════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════════════════════

function initEventListeners() {
  // Navigation tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
  
  // Mode buttons
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const duration = parseInt(btn.dataset.duration, 10);
      // Validate parsed duration
      if (!isNaN(duration) && duration > 0 && duration <= 180) {
        startTimer(duration);
      } else {
        console.error('Invalid duration from mode button:', btn.dataset.duration);
        showToast('Invalid timer duration. Please try again.');
      }
    });
  });
  
  // Custom timer
  document.getElementById('custom-start').addEventListener('click', () => {
    const minutes = parseInt(document.getElementById('custom-minutes').value, 10);
    // Validate parsed minutes
    if (!isNaN(minutes) && minutes >= 1 && minutes <= 180) {
      startTimer(minutes);
    } else {
      showToast('Please enter a valid duration between 1 and 180 minutes.');
    }
  });
  
  // Timer controls
  document.getElementById('pause-btn').addEventListener('click', pauseTimer);
  document.getElementById('stop-btn').addEventListener('click', stopTimer);
  document.getElementById('complete-continue').addEventListener('click', resetTimer);
  
  // Theme selector
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateTheme(btn.dataset.theme);
    });
  });
  
  // Settings toggles
  document.getElementById('sound-toggle').addEventListener('change', (e) => {
    state.settings.soundEnabled = e.target.checked;
    saveState();
  });
  
  document.getElementById('notif-toggle').addEventListener('change', (e) => {
    state.settings.notificationsEnabled = e.target.checked;
    saveState();
  });
  
  // Pal selector
  document.getElementById('pal-selector').addEventListener('change', (e) => {
    selectCharacter(e.target.value);
  });
  
  // Collectibles tabs
  document.querySelectorAll('.collect-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.collect-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCollectibles(tab.dataset.collect);
    });
  });
  
  // Reset button
  document.getElementById('reset-btn').addEventListener('click', resetAllData);
}

// ═══════════════════════════════════════════════════════════════════════════════
// BACKGROUND SYNC
// ═══════════════════════════════════════════════════════════════════════════════

function syncWithBackground() {
  // Prevent concurrent syncs to avoid race conditions
  if (isSyncing) {
    console.log('Sync already in progress, skipping');
    return Promise.resolve();
  }
  
  isSyncing = true;
  return new Promise((resolve) => {
    sendChromeMessage({ action: 'getTimerState' }, (response, error) => {
      isSyncing = false; // Reset flag when done
      
      if (error) {
        console.log('Background sync error:', error);
        resolve();
        return;
      }
      
      if (!response) {
        console.log('No response from background');
        resolve();
        return;
      }
      
      console.log('Background state:', response);
      
      // Check if there's a completed session waiting to be claimed
      if (response.completedSession) {
        console.log('Found completed session:', response.completedSession);
        
        // CRITICAL: Only claim if we're not already completing a session
        // This prevents race conditions where multiple syncs try to complete
        if (isCompletingSession) {
          console.log('Already completing session, skipping claim');
          resolve();
          return;
        }
        
        // Ensure state is properly synced before completing session
        // Use the duration from the completed session (it's the source of truth)
        // But verify it's valid before using it
        const sessionDuration = response.completedSession.duration;
        if (sessionDuration && sessionDuration > 0) {
          state.timer.duration = sessionDuration;
        } else if (!state.timer.duration || state.timer.duration <= 0) {
          // Fallback: if both are invalid, use a default
          console.warn('Invalid duration in completed session, using default');
          state.timer.duration = 25;
        }
        // Otherwise, preserve existing duration if it's valid
        
        state.timer.remaining = 0;
        state.timer.isRunning = false;
        state.timer.isPaused = false;
        
        // Save state before completing to ensure consistency
        saveState();
        
        // Show completion screen
        completeSession();
        
        // Clear the completed session from background
        sendChromeMessage({ action: 'claimSession' }, (response, error) => {
          if (error) {
            console.error('Failed to claim session:', error);
          } else {
            console.log('Completed session claimed');
          }
        });
        
        resolve();
        return;
      }
      
      if (response.isRunning) {
        console.log('Syncing active timer from background:', response);
        
        // Calculate actual remaining time from background
        const wasRunningBeforeSync = state.timer.isRunning;
        state.timer.isRunning = response.isRunning;
        state.timer.isPaused = response.isPaused;
        
        // CRITICAL: Don't overwrite duration if timer is already running with a valid duration
        // The duration should only be set when the timer starts, not during sync
        // This prevents the bug where duration gets overwritten incorrectly and causes early completion
        if (!state.timer.duration || state.timer.duration <= 0) {
          // Only update duration if it's not set or invalid (initial sync or recovery)
          // Validate response.duration before using it
          if (response.duration && response.duration > 0 && response.duration <= 180) {
            state.timer.duration = response.duration;
          } else {
            console.warn('Invalid duration in response, using default:', response.duration);
            state.timer.duration = 25;
          }
        } else if (wasRunningBeforeSync && state.timer.duration > 0) {
          // Timer was already running - preserve the original duration, don't overwrite
          console.log('Preserving original duration during active timer sync:', state.timer.duration, 'vs response:', response.duration);
        }
        // Always use the current state's duration for calculations to prevent early completion
        const currentDuration = state.timer.duration;
        // Validate startTime before using it
        if (response.startTime && response.startTime > 0) {
          state.timer.startTime = response.startTime;
        } else if (state.timer.isRunning && !state.timer.isPaused) {
          // If timer is running but startTime is invalid, we have a problem
          console.warn('Invalid startTime in sync response, timer may be in inconsistent state');
          // Try to recover by using current time and adjusting
          if (state.timer.startTime && state.timer.startTime > 0) {
            // Keep existing startTime if it's valid
          } else {
            // No valid startTime anywhere - reset timer
            console.error('No valid startTime found, resetting timer');
            resetTimer();
            resolve();
            return;
          }
        }
        
        if (!response.isPaused && state.timer.startTime && state.timer.startTime > 0) {
          // Calculate remaining time based on when timer started
          // Use currentDuration (from state) not response.duration to prevent bugs
          // Use state.timer.startTime (validated) not response.startTime
          const elapsed = Math.floor((Date.now() - state.timer.startTime) / 1000);
          state.timer.remaining = Math.max(0, (currentDuration * 60) - elapsed);
          console.log('Calculated remaining:', state.timer.remaining, 'seconds', 'duration:', currentDuration);
          
          // Check if actually completed - only complete if we've actually reached the full duration
          // Also check if we're not already completing to prevent race conditions
          if (state.timer.remaining <= 0 && elapsed >= (currentDuration * 60) && !isCompletingSession) {
            state.timer.isRunning = false;
            state.timer.isPaused = false;
            // Clear sync interval before completing to prevent it from running during completion
            if (syncInterval) {
              clearInterval(syncInterval);
              syncInterval = null;
            }
            completeSession();
            resolve();
            return;
          }
        } else {
          state.timer.remaining = response.remaining || (currentDuration * 60);
        }
        
        // Update UI
        updateTimer();
        
        if (state.timer.isRunning) {
          hideElement('mode-selection');
          showElement('timer-controls');
          
          // Update pause button state
          const pauseBtn = document.getElementById('pause-btn');
          if (pauseBtn) {
            if (state.timer.isPaused) {
              pauseBtn.innerHTML = '<span class="btn-icon">▶️</span> Resume';
              updateTimerLabel('Paused');
              // Don't run timer when paused
              if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
              }
            } else {
              pauseBtn.innerHTML = '<span class="btn-icon">⏸️</span> Pause';
              updateTimerLabel('Focus Time');
              runTimer();
            }
          } else {
            // If pause button doesn't exist, still update label and timer state
            if (state.timer.isPaused) {
              updateTimerLabel('Paused');
              if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
              }
            } else {
              updateTimerLabel('Focus Time');
              runTimer();
            }
          }
        }
      } else {
        // Timer not running - make sure UI is reset
        if (!state.timer.isRunning) {
          showElement('mode-selection');
          hideElement('timer-controls');
          hideElement('session-complete');
          if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
          }
        }
      }
      
      resolve();
    });
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════════════════════


async function init() {
  await loadState();
  
  // Apply saved theme
  updateTheme(state.theme);
  
  // Update UI
  updateHeader();
  updateCharacterDisplay();
  
  // Set settings UI to match state
  const soundToggle = document.getElementById('sound-toggle');
  const notifToggle = document.getElementById('notif-toggle');
  if (soundToggle) soundToggle.checked = state.settings.soundEnabled;
  if (notifToggle) notifToggle.checked = state.settings.notificationsEnabled;
  updatePalSelector();
  
  // Set active theme button
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === state.theme);
  });
  
  // Init event listeners
  initEventListeners();
  
  // Init custom modal
  initModal();
  
  // Init sticker decorating
  initStickerDecorating();
  
  // Apply saved wallpaper and accessory
  applyWallpaper();
  applyAccessory();
  
  // IMPORTANT: Sync with background FIRST before showing timer
  // Background has the accurate timer state
  await syncWithBackground();
  
  // Now update timer display with synced data
  updateTimer();
  
  // Check streak and apply penalty if broken
  // Streak requires 2 hours (120 minutes) per day
  const today = new Date().toDateString();
  const STREAK_REQUIREMENT = 120; // 2 hours in minutes
  
  // Reset dailyMinutes if it's a new day
  if (state.stats.todayDate !== today) {
    // Check if yesterday met the requirement before resetting
    if (state.stats.lastSessionDate) {
      const lastDate = new Date(state.stats.lastSessionDate);
      // Validate date before using it
      if (isNaN(lastDate.getTime())) {
        console.warn('Invalid lastSessionDate in init, resetting:', state.stats.lastSessionDate);
        state.stats.lastSessionDate = null;
        // If date is invalid, we can't determine streak status, so reset streak to be safe
        if (state.stats.currentStreak > 0) {
          applyStreakBrokenPenalty(state.stats.currentStreak);
          state.stats.currentStreak = 0;
          saveState();
        }
      } else if (isYesterday(state.stats.lastSessionDate)) {
        // Yesterday was the last session - check if they reached 2 hours
        // Note: dailyMinutes will be checked in updateStats when a session completes
        // This check happens at init, so we can't verify yesterday's minutes here
        // The check will happen in updateStats when the new day's first session completes
      } else if (!isSameDay(lastDate, new Date()) && !isYesterday(state.stats.lastSessionDate)) {
        // Missed more than one day - streak broken!
        if (state.stats.currentStreak > 0) {
          applyStreakBrokenPenalty(state.stats.currentStreak);
          state.stats.currentStreak = 0;
          saveState();
        }
      }
    }
    state.stats.dailyMinutes = 0;
  }
  
  // Daily login bonus - only if you have a streak
  if (state.stats.todayDate !== today && state.stats.currentStreak > 0) {
    // Streak bonus scales with streak length
    let streakBonus = Math.min(5 + state.stats.currentStreak, 25); // 5-25 FP max
    state.totalFP += streakBonus;
    state.stats.todayDate = today;
    showToast(`Daily streak bonus: +${streakBonus} FP! 🔥`);
    saveState();
    updateHeader();
  }
  
  // Timer is handled by syncWithBackground() above
  
  // Start engagement features
  updateGreetingBanner();
  updateStreakBadge();
  startIdleReactions();
  
  // Show random tip on load sometimes
  // Toast is created dynamically, so we just check if document.body exists
  setTimeout(() => {
    if (document.body) {
      showRandomTip();
    }
  }, 3000);
  
  
  console.log('🎀 Sanrio Study Pals initialized!');
}

// Make functions globally available
window.selectCharacter = selectCharacter;

// Start the app
document.addEventListener('DOMContentLoaded', init);


