import { KeyColor, Tone, tonalPaletteProp } from "./color-token.lib";
import type { CSSProperties } from "react";
type Props = {
  color: KeyColor;
  tones: Tone[];
};
const styles: { [name: string]: CSSProperties } = {
  palette: {
    display: "flex",
    border: "1px solid var(--md-sys-color-outline)",
    borderRadius: "12px",
    overflow: "hidden"
  },
  item: {
    flex: "1 1 0",
    blockSize: "64px"
  }
};
export const TonalPalette = ({color, tones}: Props) => (
  <div style={styles.palette}>
    {tones.map((tone) => <div key={`${color}${tone}`} style={{
      ...styles.item,
      backgroundColor: `var(${tonalPaletteProp(color, tone)}, oklch(${tone}% 0 0))`
    }}></div>)}
  </div>
);
