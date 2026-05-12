export const APP_VERSION = "0.1.1";
export const APP_NAME = "QuotaBar";
export const BUNDLE_ID = "com.quotabar.app";
export const MACOS_MIN = "macOS 13+";
export const DOWNLOAD_URL = "https://github.com/swanbl34/QuotoBar-app/releases/download/v0.1.1/QuotaBar.dmg";
export const GITHUB_URL = "https://github.com/swanbl34/QuotoBar-app";

export const FEATURES = [
  {
    icon: "Activity",
    title: "Real-time monitoring",
    description:
      "Your OpenAI Codex quota updated automatically — no browser tabs, no dashboards. Just a number in your menu bar.",
  },
  {
    icon: "CircleDot",
    title: "Status at a glance",
    description:
      "Green, orange, red. Know your quota health the instant you look up — without opening anything.",
  },
  {
    icon: "RefreshCw",
    title: "Auto-refresh",
    description:
      "Choose your cadence from 1 to 60 minutes. QuotaBar checks silently in the background.",
  },
  {
    icon: "Bell",
    title: "Reset notifications",
    description:
      "Get a native macOS notification the moment your quota resets, so you can get straight back to work.",
  },
  {
    icon: "KeyRound",
    title: "Keychain storage",
    description:
      "Your API key lives in the macOS Keychain. Never stored in plain text, never leaves your machine.",
  },
  {
    icon: "Minimize2",
    title: "Zero footprint",
    description:
      "No Dock icon. No persistent windows. Pure menu bar extra — it's there when you need it, invisible when you don't.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "KeyRound",
    title: "Connect your key",
    description:
      "Open Settings and paste your OpenAI API key. QuotaBar stores it securely in your macOS Keychain.",
  },
  {
    step: "02",
    icon: "BarChart2",
    title: "See your quota live",
    description:
      "The menu bar label updates immediately: OAI 45%. No browser, no dashboard — always visible.",
  },
  {
    step: "03",
    icon: "Bell",
    title: "Get notified on reset",
    description:
      "When your quota resets, macOS delivers a notification so you know exactly when you can get back to full speed.",
  },
] as const;
