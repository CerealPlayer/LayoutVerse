interface ScreenDims {
  Width: number;
  Height: number;
  Top: number;
  Left: number;
}

interface LayoutWindow {
  dims: ScreenDims;
  appName: string;
}
