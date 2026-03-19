# 💖 Love Tab — Romantic Chrome Extension

A beautiful Chrome new tab extension made with love 💕  
Every time a new tab is opened, a **random romantic photo** appears as the full-screen background along with a **fresh love quote**, a daily compliment, a live clock, and floating hearts.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖼️ **Random Background** | A different romantic photo appears on every new tab (hosted on ImageKit CDN) |
| 💬 **Live Love Quotes** | Fetched fresh from [quotable.io](https://api.quotable.io/random?tags=love) on every tab |
| 💕 **Daily Compliment** | A sweet compliment that changes every day at midnight |
| 🕐 **Live Clock** | 12-hour clock with full date, updating every second |
| 💖 **Floating Hearts** | Animated heart & flower emojis continuously drift upward |
| 🪟 **Frosted Glass UI** | All content sits inside a gorgeous glassmorphism card |

---

## 📁 File Structure

```
Love_Extension/
│
├── manifest.json   → Chrome Extension config (Manifest V3)
├── newtab.html     → New tab page layout
├── style.css       → Romantic dark theme & animations
├── script.js       → Quote API, random background, clock, hearts
└── README.md       → This file
```

---

## 🚀 How to Load in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **"Load unpacked"**
4. Select the `Love_Extension` folder
5. Open a **new tab** and enjoy! 🎉

---

## 🖼️ Adding Your Own Photos

Images are served from [ImageKit](https://imagekit.io). To add or change photos:

1. Upload your images to ImageKit
2. Copy the image CDN URLs
3. Open `script.js` and update the `IMAGES` array at the top:

```js
const IMAGES = [
  "https://ik.imagekit.io/YOUR_ID/photo1.jpg",
  "https://ik.imagekit.io/YOUR_ID/photo2.jpg",
  // add more...
];
```

4. Reload the extension at `chrome://extensions/`

---

## 💬 Love Quotes API

Quotes are fetched from the free [Quotable API](https://api.quotable.io):

```
GET https://api.quotable.io/random?tags=love
```

If the user is offline, a built-in fallback quote is shown automatically.

---

## 🛠️ Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript**
- **Chrome Extension Manifest V3**
- **[ImageKit](https://imagekit.io)** — Image CDN
- **[Quotable API](https://quotable.io)** — Love quotes
- **[Google Fonts](https://fonts.google.com)** — Dancing Script & Lato

---

## 💝 Made with Love

> *"Every love story is beautiful, but ours is my favorite."*

Made for someone very special. 🌹
