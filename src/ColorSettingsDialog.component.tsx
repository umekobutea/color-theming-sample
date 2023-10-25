import {
  MdDialog,
  MdIconButton,
  MdIcon,
  MdElevatedButton,
  MdFilledButton,
} from "./material-web";
import { MdDialog as MdDialogElement } from "@material/web/dialog/dialog";
import styles from "./ColorSettingsDialog.module.css";
import { useEffect, useRef, useState } from "react";
import { KeyColorInput } from "./KeyColorInput.component";

const colorTypes = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "neutral",
  "neutral-variant",
] as const;
type ColorType = (typeof colorTypes)[number];
type KeyColors = {
  [key in ColorType]: string;
};

const mapKeyColors = (fn: (type: ColorType) => string): KeyColors =>
  colorTypes.reduce(
    (obj, type) => ({
      ...obj,
      [type]: fn(type),
    }),
    {} as KeyColors,
  );

const keyColorProp = (type: ColorType) => `--md-ref-key-color-${type}`;
const getCssPropValue = (style: CSSStyleDeclaration) => (type: ColorType) =>
  style.getPropertyValue(keyColorProp(type));
const setCssProp =
  (style: CSSStyleDeclaration, keyColors: KeyColors) => (type: ColorType) =>
    style.setProperty(keyColorProp(type), keyColors[type]);

type Props = {
  onClose?: () => void;
};
export const ColorSettingDialogs = ({ onClose }: Props) => {
  const dialog = useRef<MdDialogElement>(null);
  const [keyColors, setKeyColors] = useState(mapKeyColors((_) => ""));
  useEffect(() => {
    const docStyles = globalThis.getComputedStyle(document.documentElement);
    const getDocCssPropValue = getCssPropValue(docStyles);
    setKeyColors(mapKeyColors(getDocCssPropValue));
  }, []);
  const changeKeyColor = (type: ColorType) => (v: string) =>
    setKeyColors((old) => ({
      ...old,
      [type]: v,
    }));
  const update = () => {
    const setDocCssProp = setCssProp(document.documentElement.style, keyColors);
    colorTypes.forEach(setDocCssProp);
    dialog.current?.close();
  };
  return (
    <MdDialog className="colorSettings" open onClose={onClose} ref={dialog}>
      <span slot="headline">
        <span className={styles.headlineText}>Color Settings</span>
        <MdIconButton onClick={onClose}>
          <MdIcon>close</MdIcon>
        </MdIconButton>
      </span>
      <form className={styles.form} slot="content">
        {colorTypes.map((type) => (
          <KeyColorInput
            key={type}
            label={type}
            value={keyColors[type]}
            onChange={changeKeyColor(type)}
          />
        ))}
      </form>
      <div slot="actions">
        <MdElevatedButton onClick={onClose}>キャンセル</MdElevatedButton>
        <MdFilledButton type="submit" onClick={update}>
          変更
        </MdFilledButton>
      </div>
    </MdDialog>
  );
};
