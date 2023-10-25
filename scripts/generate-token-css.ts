import { dirname } from "node:path";
import { open } from "node:fs/promises";
import {
  KeyColor,
  keyColors,
  tonesOf,
  tonalPaletteProp,
  TonalPaletteProp,
  keyColorProp,
  Tone,
  ColorSchemeName,
  colorSchemeProp,
} from "./../src/color-token.lib";
import { root, comment, rule, decl, atRule, AtRule } from "postcss";

const scriptDir = dirname(new URL(import.meta.url).pathname);

const keyColorDecls = keyColors.map((c) =>
  decl({ prop: keyColorProp(c), value: "oklch(0 0 0)" }),
);
const tonalPaletteDecls = (color: KeyColor, tones: number[]) =>
  tones.map((tone) =>
    decl({
      prop: tonalPaletteProp(color, tone),
      value: `oklch(from var(${keyColorProp(color)}) ${tone}% c h)`,
    }),
  );
const tonalPaletteDeclsWith = (colors: readonly KeyColor[]) =>
  colors
    .map((color) => [
      comment({ text: color }),
      ...tonalPaletteDecls(color, tonesOf(color)),
    ])
    .flat();
const rootRule = rule({
  selector: ":root",
  nodes: [...keyColorDecls, ...tonalPaletteDeclsWith(keyColors)],
});
type LightTone = Tone;
type DarkTone = Tone;
type ColorScheme = {
  [name in ColorSchemeName]: [KeyColor, [LightTone, DarkTone]];
};
const colorScheme: ColorScheme = {
  primary: ["primary", [40, 80]],
  "on-primary": ["primary", [100, 20]],
  "primary-container": ["primary", [90, 30]],
  "on-primary-container": ["primary", [10, 90]],
  secondary: ["secondary", [40, 80]],
  "on-secondary": ["secondary", [100, 20]],
  "secondary-container": ["secondary", [90, 30]],
  "on-secondary-container": ["secondary", [10, 90]],
  tertiary: ["tertiary", [40, 80]],
  "on-tertiary": ["tertiary", [100, 20]],
  "tertiary-container": ["tertiary", [90, 30]],
  "on-tertiary-container": ["tertiary", [10, 90]],
  error: ["error", [40, 80]],
  "on-error": ["error", [100, 20]],
  "error-container": ["error", [90, 30]],
  "on-error-container": ["error", [10, 90]],
  "surface-dim": ["neutral", [87, 6]],
  surface: ["neutral", [98, 6]],
  "surface-bright": ["neutral", [98, 24]],
  "surface-container-lowest": ["neutral", [100, 4]],
  "surface-container-low": ["neutral", [96, 10]],
  "surface-container": ["neutral", [94, 12]],
  "surface-container-high": ["neutral", [92, 17]],
  "surface-container-highest": ["neutral", [90, 22]],
  "on-surface": ["neutral", [10, 90]],
  "on-surface-variant": ["neutral-variant", [30, 80]],
  outline: ["neutral-variant", [90, 60]],
  "outline-variant": ["neutral-variant", [80, 30]],
};
type GetThemeColor = (dfn: ColorScheme[ColorSchemeName]) => TonalPaletteProp;
const lightColor = ([color, [tone, _]]: ColorScheme[ColorSchemeName]) =>
  tonalPaletteProp(color, tone);
const darkColor = ([color, [_, tone]]: ColorScheme[ColorSchemeName]) =>
  tonalPaletteProp(color, tone);
const colorSchemeDecls = (scheme: ColorScheme, fn: GetThemeColor) =>
  Object.entries(scheme).map(([name, dfn]) =>
    decl({
      prop: colorSchemeProp(name as ColorSchemeName),
      value: `var(${fn(dfn)})`,
    }),
  );
const theme = (mode: "light" | "dark"): AtRule =>
  atRule({
    name: "media",
    params: `(prefers-color-scheme: ${mode})`,
    nodes: [
      rule({
        selector: ":root",
        nodes: colorSchemeDecls(
          colorScheme,
          mode === "light" ? lightColor : darkColor,
        ),
      }),
    ],
  });
const css = root({
  nodes: [rootRule, theme("light"), theme("dark")],
});

const tokenCssPath = `${scriptDir}/../src/color.tokens.css`;
const tokenCss = await open(tokenCssPath, "w");
await tokenCss.write(css.toString(), null, "utf-8");
