import "./Component.page.css";
import { MdCheckbox, MdCircularProgress, MdElevatedButton, MdFab, MdFilledButton, MdFilledSelect, MdFilledTextField, MdFilledTonalButton, MdFilterChip, MdIcon, MdLinearProgress, MdOutlinedButton, MdOutlinedSelect, MdOutlinedTextField, MdRadio, MdSelectOption, MdSlider, MdSwitch } from "./material-web";
export const Component =() => (
  <main className="component">
    <MdFilledButton>ボタン</MdFilledButton>
    <MdElevatedButton>ボタン</MdElevatedButton>
    <MdFilledTonalButton>ボタン</MdFilledTonalButton>
    <MdOutlinedButton>ボタン</MdOutlinedButton>
    <label className="checkboxWrapper">
      <MdCheckbox touch-target="wrapper"></MdCheckbox>
      チェックボックス
      </label>
      <MdFilterChip label="チップ">
        <MdIcon slot="icon">search</MdIcon>
      </MdFilterChip>
      <MdFab>
        <MdIcon slot="icon">edit</MdIcon>
      </MdFab>
      <MdFab variant="primary">
        <MdIcon slot="icon">edit</MdIcon>
      </MdFab>
      <MdFab variant="secondary">
        <MdIcon slot="icon">edit</MdIcon>
      </MdFab>
      <MdFab variant="tertiary">
        <MdIcon slot="icon">edit</MdIcon>
      </MdFab>
      <MdCircularProgress indeterminate ></MdCircularProgress>
      <MdLinearProgress indeterminate></MdLinearProgress>
      <div className="radioSample">
        <MdRadio id="radioSample1" name="radioSample" value="1"></MdRadio>
        <label htmlFor="radioSample1">ラジオボタン1</label>
      </div>
      <div className="radioSample">
        <MdRadio id="radioSample2" name="radioSample" value="2"></MdRadio>
        <label htmlFor="radioSample2">ラジオボタン2</label>
      </div>
      <div className="radioSample">
        <MdRadio id="radioSample3" name="radioSample" value="3"></MdRadio>
        <label htmlFor="radioSample3">ラジオボタン3</label>
      </div>
      <MdFilledSelect>
        <MdSelectOption value=""></MdSelectOption>
        <MdSelectOption value="1">
          <div slot="headline" >選択肢1</div>
        </MdSelectOption>
        <MdSelectOption value="2">
          <div slot="headline" >選択肢2</div>
        </MdSelectOption>
        <MdSelectOption value="3">
          <div slot="headline" >選択肢3</div>
        </MdSelectOption>
      </MdFilledSelect>
      <MdOutlinedSelect>
        <MdSelectOption value=""></MdSelectOption>
        <MdSelectOption value="1">
          <div slot="headline" >選択肢1</div>
        </MdSelectOption>
        <MdSelectOption value="2">
          <div slot="headline" >選択肢2</div>
        </MdSelectOption>
        <MdSelectOption value="3">
          <div slot="headline" >選択肢3</div>
        </MdSelectOption>
      </MdOutlinedSelect>
      <MdSlider min={0} max={100}></MdSlider>
      <MdSwitch></MdSwitch>
      <MdFilledTextField label="入力項目"></MdFilledTextField>
      <MdOutlinedTextField label="入力項目"></MdOutlinedTextField>
  </main>
);
