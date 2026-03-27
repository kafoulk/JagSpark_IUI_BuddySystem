# JagSpark_IUI_BuddySystem

**JagSpark: IUI Buddy System** An interactive buddy system designed to foster positive connections. Built with **React + TypeScript**, and powered by **Capacitor** for a seamless mobile and desktop experience.

---

## Platforms
* **Web:** High-performance Vite-based web app.
* **Android:** Native mobile app via Capacitor.
* **Desktop:** (Optional) Electron-ready.

---

## Getting Started

### 1. Prerequisites
Ensure you have the following installed:
* **Node.js** (v18+)
* **Android Studio** (for mobile development)
* **NPM** (comes with Node)

### 2. Installation
Clone the repository and install dependencies:


git clone <https://github.com/kafoulk/JagSpark_IUI_BuddySystem)>
cd jagspark-app
npm install --legacy-peer-deps

> **Note:** We use `--legacy-peer-deps` to ensure compatibility between Vite 8 and React plugins.

---

## Development Workflow

### Running the Web Version
To start the local development server:

npm run dev

### Deploying to Android (Pixel 7 / Physical Device)
Every time you make UI changes and want to see them on your phone, follow these **three steps**:

**Build the web project:**
   
npm run build

Sync with Capacitor:

npx cap sync

### Open & Run in Android Studio:

npx cap open android

#### In Android Studio, select your device and hit the Green Play Button.

## Tech Stack
Frontend: React + TypeScript
Bundler: Vite
Mobile Bridge: Capacitor
Storage: LocalStorage (Current) / Planned: Firebase
