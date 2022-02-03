// Device Dimensions
export const WINDOW_WIDTH_SM = 320;
export const WINDOW_WIDTH_MD = 640;
export const WINDOW_WIDTH_LG = 1200;

export const MOBILE_SMALL_BREAKPOINT = WINDOW_WIDTH_SM;
export const MOBILE_STANDARD_BREAKPOINT = 530;
// Device Checks
export const isWindowSm = (windowWidth: number) =>
  windowWidth <= WINDOW_WIDTH_SM;
export const isWindowMd = (windowWidth: number) =>
  windowWidth > WINDOW_WIDTH_SM && windowWidth <= WINDOW_WIDTH_MD;
export const isWindowLg = (windowWidth: number) =>
  windowWidth > WINDOW_WIDTH_MD && windowWidth <= WINDOW_WIDTH_LG;
export const isWindowXL = (windowWidth: number) =>
  windowWidth > WINDOW_WIDTH_LG;
