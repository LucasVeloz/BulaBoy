import { PixelRatio, Platform } from "react-native";

export const dynamicFontSize = (size: number) => {
  const newSize = size * PixelRatio.getFontScale();
  return PixelRatio.roundToNearestPixel(newSize)
}
