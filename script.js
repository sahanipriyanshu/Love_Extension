// ══════════════════════════════════════════════════════════════
//  ⚙️  YOUR IMAGEKIT CONFIGURATION  — EDIT THIS SECTION
//
//  HOW TO SET UP:
//  1. Go to https://imagekit.io and create a free account
//  2. Click "Upload" and upload your romantic photos
//  3. After uploading, click each image → copy the "URL endpoint"
//     It looks like: https://ik.imagekit.io/YOUR_ID/filename.jpg
//  4. Paste each URL into the IMAGES array below
//  5. Reload the extension — a new random photo appears every tab!
// ══════════════════════════════════════════════════════════════

const IMAGES = [
  "https://ik.imagekit.io/lzzlwueda/img_3p1BRyDkN.jpg?updatedAt=1772933385388",
  "https://ik.imagekit.io/lzzlwueda/IMG_20230313_184801_9jbiTft--.jpg?updatedAt=1772932994118",
  "https://ik.imagekit.io/lzzlwueda/New%20Folder/US/IMG-20230715-WA0036.jpg",
  "https://ik.imagekit.io/lzzlwueda/New%20Folder/US/IMG-20230703-WA0069.jpg",
  "https://ik.imagekit.io/lzzlwueda/New%20Folder/US/IMG_20230610_212924.jpg"
];

// ══════════════════════════════════════════
//  FALLBACK QUOTES  (shown if API is offline)
// ══════════════════════════════════════════
const fallbackQuotes = [
  { text: "You are my sun, my moon, and all of my stars.", author: "— E.E. Cummings" },
  { text: "Whatever our souls are made of, yours and mine are the same.", author: "— Emily Brontë" },
  { text: "In all the world, there is no heart for me like yours.", author: "— Maya Angelou" },
  { text: "I carry your heart with me; I carry it in my heart.", author: "— E.E. Cummings" },
  { text: "The best thing to hold onto in life is each other.", author: "— Audrey Hepburn" },
  { text: "You are the poem I never knew how to write.", author: "— Tyler Knott Gregson" },
  { text: "My heart is, and always will be, yours.", author: "— Jane Austen" },
  { text: "Every love story is beautiful, but ours is my favorite.", author: "— Unknown" }
];

// ══════════════════════════════════════════
//  FETCH LIVE LOVE QUOTE from quotable.io
//  → Fresh random quote on every new tab
// ══════════════════════════════════════════
async function fetchLoveQuote() {
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('quote-author');

  try {
    const res = await fetch('https://api.quotable.io/random?tags=love', { cache: 'no-store' });
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    quoteEl.textContent = `"${data.content}"`;
    authorEl.textContent = `— ${data.author}`;
  } catch (_) {
    // Offline or API down — use a random fallback quote silently
    const fb = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    quoteEl.textContent = `"${fb.text}"`;
    authorEl.textContent = fb.author;
  }
}

// ══════════════════════════════════════════
//  DAILY COMPLIMENTS
// ══════════════════════════════════════════
const compliments = [
  "💖 You are the reason someone smiles every single day.",
  "🌸 Your smile could light up the darkest room.",
  "✨ The world is a more beautiful place because you're in it.",
  "🌹 You are extraordinary, and don't you ever forget it.",
  "💕 Your kindness is one of the most beautiful things about you.",
  "🦋 You have a heart full of gold and a soul full of grace.",
  "💫 You are loved more than words could ever express.",
  "🌷 Every day is sweeter because you exist.",
  "💝 You are someone's favorite reason to smile.",
  "🌟 You make ordinary moments feel magical.",
  "🎀 You are incredibly special — never doubt that.",
  "💞 Your presence alone makes everything better.",
  "🌺 You radiate warmth, love, and beauty effortlessly.",
  "🌙 Even the moon envies how brightly you shine.",
  "💌 You deserve all the love and happiness in the world.",
  "🕊️ You are pure magic — rare and irreplaceable.",
  "🌈 Life is more colorful with you in it.",
  "🫧 Your laughter is the most wonderful sound in the world.",
  "🍓 You are sweeter than anything in the whole universe.",
  "🌻 You bring sunshine wherever you go.",
  "💎 You are precious and one of a kind.",
  "🦄 There is no one else quite like you — and that is a beautiful thing.",
  "🧸 You are everything and more to the one who loves you.",
  "🎶 Your voice is music; your smile is poetry.",
  "🌊 Your love is the calming wave in a restless sea.",
  "🍀 Finding you was the luckiest thing that ever happened.",
  "☀️ You are the sunshine on a cloudy day.",
  "🌙 You are the dream someone never wants to wake from.",
  "🏹 You've captured a heart completely and forever.",
  "💖 Being yours is the greatest privilege in the world."
];

// ══════════════════════════════════════════
//  HEART EMOJIS
// ══════════════════════════════════════════
const heartEmojis = ['💖', '💗', '💓', '💞', '💕', '🌹', '🌸', '✨', '💝', '🌷'];

// ══════════════════════════════════════════
//  UTILITY: same index all day (changes at midnight)
// ══════════════════════════════════════════
function dailyIndex(arrayLength) {
  const now = new Date();
  const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
  return seed % arrayLength;
}

// ══════════════════════════════════════════
//  RANDOM IMAGEKIT BACKGROUND
//  → A different random photo every new tab
// ══════════════════════════════════════════
function applyRandomBackground() {
  const bgEl = document.getElementById('bg-image');

  if (!IMAGES || IMAGES.length === 0) {
    // No images configured — fall back to gradient
    document.body.style.background = 'linear-gradient(135deg, #1a0010, #3d0030, #1a0010)';
    bgEl.classList.add('loaded');
    return;
  }

  // Pick a truly random image (different each tab open)
  const idx = Math.floor(Math.random() * IMAGES.length);
  const url = IMAGES[idx];

  // Preload image first, then fade it in smoothly
  const img = new Image();
  img.onload = () => {
    bgEl.style.backgroundImage = `url("${url}")`;
    // Small timeout lets the paint happen before fade-in
    requestAnimationFrame(() => bgEl.classList.add('loaded'));
  };
  img.onerror = () => {
    // If image fails to load, show a romantic gradient instead
    document.body.style.background = 'linear-gradient(135deg, #1a0010, #3d0030, #6e0038)';
    bgEl.classList.add('loaded');
  };
  img.src = url;
}

// ══════════════════════════════════════════
//  DAILY COMPLIMENT  (same all day)
// ══════════════════════════════════════════
function showDailyCompliment() {
  const idx = dailyIndex(compliments.length);
  document.getElementById('compliment').textContent = compliments[idx];
}

// ══════════════════════════════════════════
//  LIVE CLOCK
// ══════════════════════════════════════════
function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  document.getElementById('clock').textContent =
    `${String(h).padStart(2, '0')} : ${m} : ${s}  ${ampm}`;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').textContent =
    now.toLocaleDateString('en-US', options);
}

// ══════════════════════════════════════════
//  FLOATING HEARTS
// ══════════════════════════════════════════
function spawnHeart() {
  const container = document.getElementById('hearts-bg');
  const el = document.createElement('div');
  el.classList.add('heart-particle');
  el.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  el.style.left = (Math.random() * 100) + 'vw';
  const size = (Math.random() * 1.4 + 0.7).toFixed(2);
  el.style.fontSize = size + 'rem';
  const dur = (Math.random() * 8 + 6).toFixed(2);
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = (Math.random() * 2).toFixed(2) + 's';
  container.appendChild(el);
  setTimeout(() => el.remove(), (parseFloat(dur) + 2) * 1000);
}

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
applyRandomBackground();
fetchLoveQuote();       // live API — fresh quote every tab!
showDailyCompliment();
updateClock();
setInterval(updateClock, 1000);
setInterval(spawnHeart, 700);

// Burst of hearts on load
for (let i = 0; i < 10; i++) {
  setTimeout(spawnHeart, i * 150);
}
