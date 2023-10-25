import { MdOutlinedTextField } from "./material-web";
import styles from "./ColorSettingsForm.module.css";

type Props = {
  id: string;
  slot: string;
  keyColors: KeyColors;
  onChange?: (x: KeyColors) => void;
};
const colorType = ["primary", "secondary", "tertiary"] as const;
type ColorType = (typeof colorType)[number];
export type KeyColors = {
  [key in ColorType]: string;
};

export const ColorSettingsForm = ({ id, slot, keyColors, onChange }: Props) => {
  const change = (type: ColorType) => (event: Event) => {
    const target = event.currentTarget;
    let value = "";
    if (target !== null) {
      value = (target as HTMLInputElement)?.value;
    }
    if (onChange !== undefined) {
      onChange({
        ...keyColors,
        [type]: value,
      });
    }
  };
  return (
    <form id={id} slot={slot} className={styles.form}>
      {colorType.map((type) => (
        <MdOutlinedTextField
          key={type}
          label={type}
          value={keyColors[type]}
          onChange={change(type)}
        />
      ))}
    </form>
  );
};
