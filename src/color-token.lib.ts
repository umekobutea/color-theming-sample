import { range } from "./utils.lib";
export const keyColors = ["primary", "secondary", "tertiary", "error", "neutral", "neutral-variant"] as const;
export type KeyColor = typeof keyColors[number];
export type Tone = number;
export const tonesOf = (color: KeyColor): Tone[] => {
    switch (color) {
        case "neutral":
            return [0, 4, 6, 10, 12, 17, 22, 24, 30, 50, 60, 80, 87, 90, 92, 94, 96, 98, 99, 100]
        default:
            return [0, 10, ...range(20, 95, 5), 98, 99, 100];
    }
};
export const keyColorProp = (color: string) => `--md-ref-key-color-${color}`
export type TonalPaletteProp = string;
export const tonalPaletteProp = (color: KeyColor, tone: Tone): TonalPaletteProp => `--md-ref-palette-${color}${tone}`;
export type ColorSchemeName = BgColorName | FgColorName;
export type BgColorName =
  | "primary"
  | "primary-container"
  | "secondary"
  | "secondary-container"
  | "tertiary"
  | "tertiary-container"
  | "error"
  | "error-container"
  | "surface-dim"
  | "surface"
  | "surface-bright"
  | "surface-container-lowest"
  | "surface-container-low"
  | "surface-container"
  | "surface-container-high"
  | "surface-container-highest"
  ;
export type FgColorName =
  | "on-primary"
  | "on-primary-container"
  | "on-secondary"
  | "on-secondary-container"
  | "on-tertiary"
  | "on-tertiary-container"
  | "on-error"
  | "on-error-container"
  | "on-surface"
  | "on-surface-variant"
  | "outline"
  | "outline-variant"
  ;
export const colorSchemeProp = (colorName: ColorSchemeName) => `--md-sys-color-${colorName}`;
