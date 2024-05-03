import { StyleSheet } from 'react-native';

// Define a strict type for font families using 'as const' to ensure immutability and strictness
export const FontFamily = {
  interBold: "Inter-Bold",
  interExtraBold: "Inter-ExtraBold",
  interRegular: "Inter-Regular",
  interMedium: "Inter-Medium",
  interSemiBold: "Inter-SemiBold",
  interBlack: "Inter-Black",
  aksharRegular: "Akshar-Regular",
  bebasNeueRegular: "BebasNeue-Regular",
  interLight: "Inter-Light",
  montserratRegular: "Montserrat-Regular",
  montserratSemiBold: "Montserrat-SemiBold",
} as const;

// Define type for FontFamily using TypeScript utility types
export type FontFamilyType = typeof FontFamily[keyof typeof FontFamily];

// Enum for font sizes for better structure and readability
export enum FontSize {
  ExtraSmall = 10,
  Small = 15,
  Base = 16,
  Large = 20,
  ExtraLarge = 24,
}

// Color palette defined with 'as const' to ensure values are read-only
export const Color = {
  White: "#fff",
  MistyRose: "#ffe1eb",
  PaleVioletRed100: "#aa5a74",
  PaleVioletRed200: "#aa5474",
  Gray100: "#898787",
  Gray200: "#7c7c7c",
  Dark: "#180f20",
  Gray300: "#030202",
  Gray400: "rgba(255, 255, 255, 0)",
  SkyBlue100: "#78d0de",
  SkyBlue200: "#7dc6d6",
  SkyBlue300: "#7dc6d5",
  DimGray: "#525252",
  Black: "#000",
  Green: "#239f0f",
  LightYellow100: "#f5f8d8",
  Salmon: "#ff6969",
  DodgerBlue100: "#6582eb",
  BurlyWood: "#fec284",
  LightPink100: "#ffbabe",
  LightCoral100: "#f38195",
  LightCoral200: "#ff728f",
  LightCyan: "#d8f2f8",
  Lavender: "#e9efff",
  OrangeRed: "#ff6500",
  Pink: "#ffc9be",
  AliceBlue: "#e6f3ff",
  Gainsboro100: "#dcdcdc",
  Gainsboro200: "#d9d9d9",
  DarkGray: "#b1b1b1",
} as const;

// Define type for Color using TypeScript utility types
export type ColorType = typeof Color[keyof typeof Color];

// Padding sizes as an example of how to define single value styles
export const Padding = {
  Small: 8,
  Medium: 12,
  Large: 16,
} as const;

// Define type for Padding using TypeScript utility types
export type PaddingType = typeof Padding[keyof typeof Padding];

// Border radiuses for UI elements
export const BorderRadius = {
  Small: 4,
  Medium: 8,
  Large: 12,
} as const;

// Define type for BorderRadius using TypeScript utility types
export type BorderRadiusType = typeof BorderRadius[keyof typeof BorderRadius];

// Example of a common box shadow style using an interface
export interface BoxShadowStyle {
  shadowOpacity: number;
  shadowRadius: number;
  shadowColor: string;
  elevation: number;
}

// Common box shadow settings used across the app
export const commonBoxShadow: BoxShadowStyle = {
  shadowOpacity: 0.1,
  shadowRadius: 5,
  shadowColor: "rgba(0, 0, 0, 0.25)",
  elevation: 3,
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.LightCyan,
  },
  text: {
    fontSize: FontSize.Base,
    color: Color.Black,
    fontFamily: FontFamily.interRegular,
  },
  button: {
    padding: Padding.Medium,
    backgroundColor: Color.SkyBlue100,
borderRadius: BorderRadius?.br_8xs || 'default_value'
  },
});

export default styles;
