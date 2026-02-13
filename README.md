# React Native NFT Marketplace (pronef)

A minimal, modern NFT marketplace UI built with React Native + Expo — clean components, responsive layouts, and example data so you can prototype NFT browsing and bidding quickly.

---

## 📋 Table of Contents
- [Demo](#-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Requirements](#requirements)
  - [Install & Run](#install--run)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🔥 Demo
- A simple NFT listing UI with search, card details and bid flow (UI-only demo with example data).
- Screens: `Home` (list + search) and `Details` (item + bids).


## ✨ Features
- Clean, component-driven UI (cards, headers, buttons)
- Search and filter sample data
- Detail screen with bids and actions
- Uses `react-native-safe-area-context` + `@react-navigation/native-stack`
- Ready for rapid prototype or to be extended into a real marketplace


## 🧰 Tech Stack
- Framework: Expo (SDK 54)
- UI: React Native
- Navigation: @react-navigation/native-stack
- Safe area handling: react-native-safe-area-context
- Bundled with example assets and fonts


## 🚀 Getting Started
### Requirements
- Node.js (LTS) installed
- Expo CLI (recommended) or use `npx expo`
- Android/iOS device or simulator, or Expo Go

### Install & Run
1. Install dependencies

```bash
npm install
```

2. Start the Metro server (clear cache on first run)

```bash
npx expo start -c
```

3. Open on device
- Scan the QR code with Expo Go
- Or press `a` to open on Android emulator / `i` for iOS simulator


## 🗂 Project Structure
Key files and directories:

- `App.js` — root navigator + SafeAreaProvider
- `screens/` — `Home.js`, `Details.js` (app screens)
- `components/` — reusable UI (NFTCard, HomeHeader, Buttons, SubInfo)
- `constants/` — assets, theme, dummy data
- `assets/` — fonts, images, icons
- `package.json` — pinned dependency versions compatible with Expo SDK 54


## 🎨 Customization
- Swap `assets/` images to show real NFTs.
- Modify `constants/dummy.js` to change example data.
- Add API integration by replacing `useState(NFTData)` in `Home.js` with a fetch call.


## 🛠 Troubleshooting & Notes
- If you see Android crash `java.lang.String cannot be cast to java.lang.Boolean` — downgrade `react-native-screens` to `4.16.0` (already pinned in `package.json`) or use an Expo dev build. This project includes the compatible versions for Expo SDK 54.
- SafeArea deprecation warning? The app uses `react-native-safe-area-context` (SafeAreaProvider + `SafeAreaView`) to avoid that.
- If navigation/native-stack errors occur, reinstall dependencies and clear Metro cache:

```bash
rm -rf node_modules package-lock.json && npm install
npx expo start -c
```


## 🤝 Contributing
- Fork the repo, add a branch, and open a PR with a clear description.
- Keep changes small and focused (UI, data, or native integration separated).


## 📜 License
MIT — feel free to use this UI/template for prototypes or learning.


---

If you want, I can:
- add screenshots to `README.md`,
- wire a mock API for dynamic data, or
- add GitHub Actions for lint/test automation.  
Tell me which one to do next. ✨