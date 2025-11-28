# smart-interview-prep-extension
🧠 Smart Interview Prep – Chrome Extension (Manifest V3)

A productivity-focused Chrome Extension that helps you track your DSA practice progress while solving problems on LeetCode and GeeksforGeeks.
Built using Manifest V3, Chrome APIs, HTML, CSS, and JavaScript.

🚀 Features
✅ Platform Detection

Automatically detects if the user is currently on:

LeetCode

GeeksforGeeks

Displays the platform inside the extension popup.

✅ Track Progress for 7 Core DSA Topics

Each topic has:

A 0–10 counter

A + button to increment

Persistent storage (never resets automatically)

Topics:

Arrays

Strings

Dynamic Programming

Binary Search

Two Pointers

Trees

Graphs

✅ Daily Questions Generator

Displays 3 random DSA questions every day.

Includes:

"New Set" refresh button

Stored using chrome.storage so questions remain the same for the day

✅ Progress Persistence

All progress is saved using:

chrome.storage.local


This means:

It survives browser restarts

Never resets unless user presses Reset

✅ Reset System

One button that resets all 7 topic counters to zero.

✅ Clean and Modern UI

Built with simple, responsive CSS and card-based layout.

🛠️ Tech Stack

HTML

CSS

JavaScript

Manifest V3

Chrome APIs

Tabs API

Storage API

Extension Action API

📁 Project Structure
smart-interview-prep-extension/
│
├── manifest.json
├── popup.html
├── popup.js
├── style.css
└── icons/

📦 Installation (Developer Mode)

Download or clone this repo

Open chrome://extensions

Enable Developer mode

Click Load unpacked

Select the extension folder

The extension will now appear in your browser.

🌀 How It Works

When the user opens the extension, it detects the current tab URL

The popup shows the correct platform

The user tracks progress by pressing “+” buttons

Progress is stored in chrome.storage.local

Daily questions are generated and saved

User can reset progress anytime

🔮 Future Enhancements (Optional)

Progress bars for each topic

Daily/weekly streak tracker

Export/import progress

Notes section for each topic

Dark mode

Auto-detect LeetCode submission status

💡 Why I Built This

Solving DSA regularly is essential for placement preparation, but tracking topic completion can be complicated.
This extension helps users stay consistent and organized while practicing.

👤 Author

Anuranjan SB
B.Tech CSE (AI & ML)
GitHub: https://github.com/anuranjansb

LinkedIn: https://www.linkedin.com/in/anuranjan-sb
