import { MdOutlinedTextField } from "./material-web";

type Props = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};
export const KeyColorInput = ({ label, value, onChange }: Props) => {
  const change = (event: Event) => {
    const target = event.currentTarget;
    let value = "";
    if (target !== null) {
      value = (target as HTMLInputElement).value;
    }
    onChange(value);
  };
  return <MdOutlinedTextField label={label} value={value} onChange={change} />;
};
