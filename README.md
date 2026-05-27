# 🌐 Community Event Portal

---

## 📌 Project Overview

The Community Event Portal is a front-end web application built with HTML5, CSS3, and JavaScript. It allows community residents to explore local events, register for activities, watch event promo videos, and discover nearby events using the browser's Geolocation API — no server or framework required.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Browser APIs (Geolocation, localStorage, sessionStorage)

---

## ✨ Features

### 1. 🧱 HTML5 Base Template
- Semantic HTML structure with `<!DOCTYPE html>`
- Meta charset and viewport tags for responsiveness
- Sections organized with comments for readability

### 2. 🔗 Navigation & Linking
- Responsive navbar with links: Home · Events · Registration · Contact · Help
- Internal anchor-tag navigation between sections
- External Help page (`help.html`)

### 3. 🎉 Welcome Banner
- CSS-styled banner using `id` and `class`
- Inline `<span>` styling for highlighted offers

### 4. 🖼️ Event Image Gallery
- 2×3 HTML table-based gallery
- Each image includes `alt`, `title`, borders, and captions

### 5. 📋 Event Registration Form
Fields: Name · Email · Phone · Event Date · Event Selection · Feedback

Attributes used: `placeholder`, `required`, `autofocus`

- Shows a confirmation message after successful submission

### 6. ⚡ JavaScript Event Handling

| Event | Action |
|---|---|
| `onblur` | Phone number validation |
| `onchange` | Display event fee |
| `onclick` | Registration confirmation |
| `ondblclick` | Image enlargement |
| Keyboard event | Character counter in textarea |

### 7. 🎬 Video Invite
- Community event promo video embedded on the page
- `oncanplay` event triggers a "video ready" message
- `onbeforeunload` warning when leaving the page

### 8. 💾 User Preferences
- Saves preferred event using `localStorage`
- Auto-loads saved preference on next visit
- Clear Preferences button to reset

### 9. 📍 Geolocation
- "Find Nearby Events" button using `navigator.geolocation.getCurrentPosition()`
- Displays user coordinates on success
- Handles errors: Permission Denied · Timeout · Location Unavailable

### 10. 🐛 DevTools Debugging
- Used Chrome/Edge DevTools for DOM inspection
- Console debugging and JS breakpoints
- Fixed image path issues during development

---

## 📁 Folder Structure
Community-Event-Portal/
│
├── index.html
├── help.html
├── style.css
├── script.js
├── README.md
│
├── images/
│   ├── musical-event.png
│   ├── food-event.png
│   ├── art-event.png
│   ├── sports-event.png
│   ├── cultural-event.png
│   ├── workshop-event.png
│   └── MyHome.png
│
└── videos/
  └── community-event.mp4

---

## 🚀 How to Run

1. Download or clone the repository
2. Open the project folder in **VS Code**
3. Install the **Live Server** extension
4. Right-click `index.html`
5. Click **"Open with Live Server"**

---

## 🎓 What I Learned

Through this project, I gained hands-on experience with:

- HTML5 semantic structure
- CSS styling and layouts
- JavaScript DOM manipulation
- Event handling techniques
- Browser APIs (Geolocation, Storage)
- Local & session storage
- Debugging with Chrome DevTools
- GitHub project management

---

## 👩‍💻 Author

**Sumasri** — Built this project from scratch with all features fully functional.

---

## ✅ Project Status
Completed Successfully 
