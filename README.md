<div align="center">
  <img src="icons/ChatGPT Image Dec 13, 2025, 04_21_02 AM.png" alt="Sanrio Study Pals" width="600"/>
</div>

# 🎀 Sanrio Study Pals

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A cozy Chrome extension that combines productivity with the charm of a Sanrio friendship simulator. Study alongside adorable characters, earn Friendship Points, and unlock cute collectibles!

## 📑 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
  - [Study Timer](#-study-timer)
  - [Friendship System](#-friendship-system)
  - [Progression](#-progression)
  - [Achievements](#-achievements)
  - [Collectibles](#-collectibles)
  - [Accessory Shop](#-accessory-shop)
- [Installation](#-installation)
- [Themes](#-themes)
- [FP Rewards & Friendship](#-fp-rewards--friendship)
- [Technical Details](#-technical-details)
- [Project Structure](#-project-structure)
- [License](#-license)

## 🚀 Quick Start

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked"
5. Select the `Sanrio Study Pals` folder
6. Start studying with your favorite Sanrio character! 🎀

## ✨ Features

### 🍅 Study Timer
- **Quick Start**: 25-minute Pomodoro sessions
- **Extended**: 50-minute focused study
- **Deep Focus**: 90-minute marathon sessions
- **Custom Timer**: Set your own duration (1-180 minutes)

### 💖 Friendship System
Study with 9 adorable Sanrio characters:
- ☁️ **Cinnamoroll** - Café & cloud theme
- 🍎 **Hello Kitty** - Classic school vibe
- 🌸 **My Melody** - Nature & forest theme
- 💀 **Kuromi** - Rock concert aesthetic
- 🍮 **Pompompurin** - Cozy home vibes
- 🐧 **Badtz-Maru** - Cool rebel vibes
- 🐟 **Hangyodon** - Ocean dreamer theme
- 🐸 **Keroppi** - Fresh & upbeat pond life
- 🐱 **Chococat** - Curious explorer aesthetic

Each character has:
- 5 friendship levels (Acquaintance → BFF)
- Unique dialogues per level
- Special emotes and reactions
- Themed environments

### 🌟 Progression
- **Friendship Points (FP)**: Earn by completing study sessions
- **Streak Bonuses**: Get up to 1.3x FP multiplier for consistent studying (14+ day streak)
- **All Characters Available**: Choose any character from the start - no unlocking required!
- **Friendship Levels**: Progress through 5 levels (Acquaintance → BFF) with each character
- **96 Hours to Max**: Complete approximately 96 hours of study sessions to reach 100% friendship (without accessory multipliers)

### 🏆 Achievements
**30 total achievements** with FP rewards! Unlock achievements for:
- **Session Milestones**: First Focus, Quick Learner (25), Pomodoro Pro (10), Study Master (50), Centurion (100), Legend (250)
- **Time Milestones**: First Hour, Half Day (5h), Dedicated (10h), Full Day (25h), Two Days (50h), Century (100h)
- **Streak Achievements**: On Fire (3 days), Week Warrior (7), Two Weeks Strong (14), Three Weeks (21), Monthly Master (30), Two Months (60), Century Streak (100)
- **Friendship Levels**: First Friend (Lv.2), Close Friend (Lv.3), Bestie (Lv.4), BFF Status (Lv.5)
- **Daily Challenges**: Triple Threat (3 sessions/day), Marathon (5 sessions/day), Power User (10 sessions/day)
- **Session Length**: Hour Power (60 min), Deep Focus (90 min), Two Hour Champion (120 min)
- **Special**: Early Bird, Night Owl, Day & Night

Each achievement unlocks with a cute Sanrio-themed popup and FP reward!

### 🎁 Collectibles
- **Wallpapers**: Character-themed animated backgrounds that cover the entire study tab
- **Stickers**: Cute decorations to place around your study scene (double-click to delete!)
- **Accessories**: Temporary FP and friendship boosters (see Accessory Shop below)

### 💫 Accessory Shop
Buy temporary boosts to supercharge your FP and friendship gains! Accessories create interactive visual effects around your character and multiply your rewards.

| Accessory | Cost | Duration | Boost |
|-----------|------|----------|-------|
| 🎀 Cute Bow | 15 FP | 30 min | +15% |
| 🌸 Hair Flower | 20 FP | 30 min | +20% |
| 👓 Glasses | 25 FP | 45 min | +25% |
| 🎨 Beret | 30 FP | 45 min | +30% |
| 🎧 Headphones | 40 FP | 60 min | +35% |
| 👸 Tiara | 50 FP | 60 min | +40% |
| 👼 Angel Wings | 75 FP | 90 min | +50% |
| 😇 Halo | 100 FP | 90 min | +60% |
| 👑 Royal Crown | 150 FP | 120 min | +75% |

**Features:**
- Accessories can be purchased repeatedly
- Active accessories show floating effects around your character
- Multipliers stack with streak bonuses for maximum gains!

## 📦 Installation

### From Chrome Web Store
*(Coming soon)*

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked"
5. Select the `Sanrio Study Pals` folder
6. Click the extension icon to start studying! 🎀

**Note**: The extension icons (`icon16.png`, `icon32.png`, `icon48.png`, `icon128.png`) are already included in the `icons/` folder.

## 🎨 Themes

The extension features 9 beautiful themes, one for each character:
- **Cinnamoroll**: Pastel blue & white clouds
- **Hello Kitty**: Bright pink & red
- **My Melody**: Soft pink florals
- **Kuromi**: Dark purple gothic-cute
- **Pompompurin**: Warm beige & yellow
- **Badtz-Maru**: Bold yellow & black
- **Hangyodon**: Cool aqua & teal ocean
- **Keroppi**: Fresh green & blue
- **Chococat**: Chocolate brown & cream

## 💡 FP Rewards & Friendship

| Session Length | Base FP | Friendship % Gain* |
|---------------|---------|-------------------|
| 2-24 minutes  | 1 FP    | ~0.2%            |
| 25 minutes    | 2 FP    | ~0.4%            |
| 50 minutes    | 5 FP    | ~1.0%            |
| 90 minutes    | 8 FP    | ~1.6%            |

*Friendship percentage shown with 1 decimal precision. Values are approximate and include multipliers.

**Streak System:**
- Requires **2 hours (120 minutes)** of study per day to start or continue a streak
- Streak bonuses:
  - 3+ day streak: 1.1x multiplier
  - 7+ day streak: 1.2x multiplier
  - 14+ day streak: 1.3x multiplier
- Streak progress shown on session completion screen
- Browser notifications for streak milestones

**Accessory Multipliers:**
- Stack with streak bonuses for even bigger gains!
- Active accessories show a countdown timer and bonus badge

**Session Completion:**
- Shows both FP earned and friendship percentage gained
- **Streak Progress Display**: See your daily progress toward the 2-hour streak requirement
- Shows "Building Your Streak" or "Continuing Your X-Day Streak" with progress bar
- Celebratory confetti and animations!
- Browser notifications when minimized (milestones: 50%, 75%, 5 min left, 1 min left)

## 🔧 Technical Details

- **Manifest Version**: 3
- **Permissions**: storage, notifications, alarms, idle
- **Storage**: Chrome Storage API (syncs across devices)
- **Timer**: Background service worker for persistent tracking
- **Background Timer**: Timer continues running when extension is closed/minimized
- **Notifications**: Browser notifications for study milestones and session completion
- **Custom Modals**: Sanrio-themed dialogue boxes replace default browser alerts

## 📁 Project Structure

```
Sanrio Study Pals/
├── manifest.json          # Extension configuration
├── popup.html             # Main popup UI
├── styles.css             # Sanrio-inspired styling
├── app.js                 # Main application logic
├── background.js          # Background service worker
├── icons/                 # Extension icons & character images
│   ├── icon16.png         # 16x16 extension icon
│   ├── icon32.png         # 32x32 extension icon
│   ├── icon48.png         # 48x48 extension icon
│   ├── icon128.png        # 128x128 extension icon
│   └── [character images] # Character PNG files
├── Sanrio Character Accessories Images/  # Accessory images (optional)
│   └── [Character folders with accessory images]
└── README.md              # This file
```

## 🖼️ Adding Character Images

To use real Sanrio character images:

1. **Get your character images** (PNG with transparent background works best)
2. **Name them correctly:**
   - `cinnamoroll_character-removebg-preview.png` (or similar)
   - `hellokitty_character-removebg-preview.png`
   - `mymelody_character-removebg-preview.png`
   - `kuromi_character-removebg-preview.png`
   - `pompompurin_character-removebg-preview.png`
   - `badtzmaru_character-removebg-preview.png`
   - `hangyodon_character-removebg-preview.png`
   - `keroppi_character-removebg-preview.png`
   - `chococat_character-removebg-preview.png`
3. **Place them in:** `icons/` folder
4. **Update the image paths in `app.js`** if your filenames differ
5. **Reload the extension**

The extension will automatically display the images! If an image is missing, it falls back to an emoji.

## 🎀 Accessory System

Accessories are now interactive boosts that create visual effects around your character! When you purchase an accessory:

- **Floating Effects**: The accessory emoji floats around your character
- **Orbiting Sparkles**: Cute sparkles orbit the character
- **Bonus Badge**: Shows the active multiplier percentage
- **Character Glow**: A subtle glow effect around your character
- **Countdown Timer**: See how much time is left on your boost

**Note**: The accessory system no longer changes character images. Instead, it provides engaging visual feedback and powerful multipliers!

### Early Session Penalties

If you end a session early, you'll face reduced penalties:
- Less than 25% complete: -10 FP, -5% friendship
- Less than 50% complete: -8 FP, -2% friendship
- Less than 75% complete: -3 FP
- 75%+ complete: Partial FP reward

**Streak Breaking**: Breaking a study streak also applies penalties based on streak length.

## 🌈 Future Plans

- [ ] Seasonal events (Spring Blossom Festival, Halloween Party)
- [ ] Daily challenges
- [ ] Friend mode (see friends' progress)
- [ ] Web dashboard for study stats
- [ ] Custom ambient sounds per character
- [ ] More character interactions and dialogues
- [ ] Achievement badges and rewards

## ✨ Key Features

- **Background Timer**: Study sessions continue even when the extension is closed
- **Browser Notifications**: Get notified of study milestones (50%, 75%, 5 min left, 1 min left) and streak events when minimized
- **Session Completion**: Shows FP earned, friendship percentage gained, and streak progress
- **Achievement System**: 30 achievements with individual popup celebrations and FP rewards
- **Streak Tracking**: Visual progress bar showing daily progress toward 2-hour requirement
- **Interactive Stickers**: Place stickers on your study scene, double-click to delete
- **Animated Wallpapers**: Beautiful emoji patterns that cover the entire study tab
- **Custom Modals**: Cute Sanrio-themed dialogue boxes replace default browser alerts
- **Progress Precision**: Friendship percentage displayed with 1 decimal place for accurate tracking

## 📝 Icon Files

The extension includes all required icon files in the `icons/` folder:
- `icon16.png` (16×16 pixels)
- `icon32.png` (32×32 pixels)
- `icon48.png` (48×48 pixels)
- `icon128.png` (128×128 pixels)

These are already configured in `manifest.json` and ready to use!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Important Note**: This extension is a fan project and is NOT affiliated with, endorsed by, or connected to Sanrio Co., Ltd. All Sanrio characters, names, and related materials are trademarks and/or copyrights of Sanrio Co., Ltd.

## 💕 Credits

Inspired by Sanrio characters and the cozy study app aesthetic. This is a fan project made with love for productivity and kawaii culture!

---

Made with 💖 by a fellow Sanrio fan

*Study hard, but remember to take breaks! Your Sanrio pals care about your well-being! 🌸*

