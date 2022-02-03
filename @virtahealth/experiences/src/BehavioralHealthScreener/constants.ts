import { CommonAnalyticsProperties } from "@virtahealth/components";

// Screen sizes & helpers
export const MOBILE_WIDTH_SMALL_BREAKPOINT = 320;
export const MOBILE_WIDTH_STANDARD_BREAKPOINT = 640;
export const MOBILE_HEIGHT_STANDARD_BREAKPOINT = 1000;
export const MOBILE_HEIGHT_LANDSCAPE_BREAKPOINT = 400;
export const PA_WEB_NAVBAR_HEIGHT = 55;
export const PA_MOBILE_WEB_APP_INSTALL_BAR_HEIGHT = 60;
export const SCREENER_ITEM_MAX_WIDTH = 350;

// Analytics
export const ANALYTICS_EVENTS = {
  VIEW: {
    SCREENER: "Screener",
    SCREENER_COMPLETION_SCREEN: "Screener Completion Screen",
    SCREENER_FOLLOW_UP: "Screener Follow Up",
  },
  CLICK: {
    SCREENER_ANSWER: "Screener Answer",
    SKILL_LEARN_BUTTON: "Skill Learn Button",
    SKILL_LEARN_DISMISS_BUTTON: "Skill Learn Dismiss Button",
  },
};

export const COMMON_ANALYTICS_PROPERTIES: CommonAnalyticsProperties = {
  screen_name: "Behavioral Health Screener",
  screen_path: "/actions/screener",
};

// Copy
export const DONE_VIEW_DEFAULT_SUBTEXT = `You’ll be asked to reflect again in a few weeks to monitor changes.`;
