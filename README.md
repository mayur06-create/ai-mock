# 🤖 AI Mock Interview Platform

An intelligent web-based mock interview system that simulates real interview environments using AI, voice interaction, emotion detection, and anti-cheating mechanisms.

---

## 🚀 Features

### 🎤 AI Interviewer

* Dynamic question generation using Google Gemini API
* Domain & role-based interviews
* Difficulty levels: Beginner, Intermediate, Professional

### 🗣️ Voice Interaction

* AI asks questions using Text-to-Speech
* User answers using Speech Recognition
* Real-time conversational flow

### 📊 Performance Tracker

* Scores each answer
* Provides feedback & improvement tips
* Generates final performance report

### 🎥 Webcam Proctoring

* Face detection using face-api.js
* Emotion analysis (confident, nervous, etc.)
* Anti-cheating system (detects multiple faces)

### 🌐 Multi-language Support

* English 🇺🇸
* Hindi 🇮🇳

---

## 🧠 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **AI:** Google Gemini API
* **Face Detection:** face-api.js
* **Speech:** Web Speech API (TTS + STT)

---

## 📂 Project Structure

```
ai-web-app/
│── index.html
│── style.css
│── script.js
│── /models (face-api models)
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-mock-interview.git
cd ai-mock-interview
```

---

### 2️⃣ Add Face Detection Models

Download models from:
👉 https://github.com/justadudewhohacks/face-api.js-models

Place inside:

```
/models
```

---

### 3️⃣ Add Gemini API Key

Open `script.js` and add:

```javascript
const API_KEY = "YOUR_GEMINI_API_KEY";
```

---

### 4️⃣ Run the Project

Use Live Server (VS Code recommended):

```bash
Right Click → Open with Live Server
```

OR open:

```
index.html
```

---

## 🎯 How It Works

1. Select domain & difficulty
2. Start interview
3. AI asks questions (voice + text)
4. User answers via microphone
5. AI evaluates and continues
6. Webcam tracks emotion & cheating
7. Final report is generated

---

## 📸 Screenshots

### 🎥 Interview Camera

(Add your screenshot here)

### 🤖 AI Interview Panel

(Add your screenshot here)

### 📊 Performance Report

(Add your screenshot here)

---

## ⚠️ Important Notes

* Allow microphone & camera permissions
* Ensure good lighting for face detection
* Do not expose API key in production

---

## 💡 Future Improvements

* Resume-based interview
* Company-specific questions (Google, Amazon)
* Eye tracking for advanced proctoring
* Backend integration for secure API

---
---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
