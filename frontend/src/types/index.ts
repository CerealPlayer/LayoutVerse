export interface ScreenDims {
  Width: number;
  Height: number;
  Top: number;
  Left: number;
}

export interface LayoutWindow {
  screenName: string;
  dims: ScreenDims;
  appName: string;
}
