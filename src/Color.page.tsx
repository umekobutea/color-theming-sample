import { TonalPalette } from "./TonalPalette.component";
import { keyColors, tonesOf, BgColorName, FgColorName, colorSchemeProp, ColorSchemeName } from "./color-token.lib";
import "./Color.page.css";

export const Color = () => (
  <main className="color">
    <section className="color-scheme">
    <h2>Color Scheme</h2>
    <div className="color-scheme-main" style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "8px"
    }}>
      <MainSchemeItem fg="on-primary" bg="primary" />
      <MainSchemeItem fg="on-secondary" bg="secondary" />
      <MainSchemeItem fg="on-tertiary" bg="tertiary" />
      <MainSchemeItem fg="on-error" bg="error" />
      <MainSchemeItem fg="on-primary-container" bg="primary-container" />
      <MainSchemeItem fg="on-secondary-container" bg="secondary-container" />
      <MainSchemeItem fg="on-tertiary-container" bg="tertiary-container" />
      <MainSchemeItem fg="on-error-container" bg="error-container" />
    </div>
    <div className="color-scheme-surface">
      <div className="row">
        <ColorItem color="surface-dim" />
        <ColorItem color="surface" />
        <ColorItem color="surface-bright" />
      </div>
      <div className="row">
        <ColorItem color="surface-container-lowest" />
        <ColorItem color="surface-container-low" />
        <ColorItem color="surface-container" />
        <ColorItem color="surface-container-high" />
        <ColorItem color="surface-container-highest" />
      </div>
      <div className="row">
        <ColorItem color="on-surface" />
        <ColorItem color="on-surface-variant" />
        <ColorItem color="outline" />
        <ColorItem color="outline-variant" />
      </div>
    </div></section>
    <h2>Tonal Palette</h2>
    {keyColors.map((keyColor) => (
      <div className="tonal-palette" key={keyColor}>
        <h3>{keyColor}</h3>
        <TonalPalette color={keyColor} tones={tonesOf(keyColor)} />
      </div>
    ))}
  </main>
);

const MainSchemeItem = ({fg, bg}: {fg: FgColorName, bg: BgColorName}) => (
  <div className="main-scheme-item">
    <div className="bg" style={{
      backgroundColor: `var(${colorSchemeProp(bg)})`,
      color: `var(${colorSchemeProp(fg)})`,
    }}>{bg}</div>
    <div className="fg" style={{
      backgroundColor: `var(${colorSchemeProp(fg)})`,
      color: `var(${colorSchemeProp(bg)})`,
    }}>{fg}</div>
  </div>
);

const ColorItem = ({color}: { color: ColorSchemeName}) => (
  <div className="color-item" style={{
    backgroundColor: `var(${colorSchemeProp(color)})`,
    color: `var(${colorSchemeProp(onSurfaceColor(color))})`,
    padding: "16px"
  }}>{color}</div>
);

const onSurfaceColor = (color: ColorSchemeName): ColorSchemeName => {
  switch (color) {
    case "on-surface":
    case "on-surface-variant":
    case "outline":
      return "outline-variant";
    default:
      return "on-surface"
  }
}
