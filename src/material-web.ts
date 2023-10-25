import React from "react";
import { EventName, createComponent } from "@lit-labs/react";
import { MdIcon as _MdIcon } from "@material/web/icon/icon";
import { MdIconButton as _MdIconButton } from "@material/web/iconbutton/icon-button";
import { MdFilledButton as _MdFilledButton } from "@material/web/button/filled-button";
import { MdElevatedButton as _MdElevatedButton } from "@material/web/button/elevated-button";
import { MdFilledTonalButton as _MdFilledTonalButton } from "@material/web/button/filled-tonal-button";
import { MdOutlinedButton as _MdOutlinedButton } from "@material/web/button/outlined-button";
import { MdCheckbox as _MdCheckbox } from "@material/web/checkbox/checkbox";
import { MdFilterChip as _MdFilterChiip } from "@material/web/chips/filter-chip";
import { MdFab as _MdFab } from "@material/web/fab/fab";
import { MdCircularProgress as _MdCircularProgress } from "@material/web/progress/circular-progress";
import { MdLinearProgress as _MdLinearProgress } from "@material/web/progress/linear-progress";
import { MdRadio as _MdRadio } from "@material/web/radio/radio";
import { MdFilledSelect as _MdFilledSelect } from "@material/web/select/filled-select";
import { MdOutlinedSelect as _MdOutlinedSelect } from "@material/web/select/outlined-select";
import { MdSelectOption as _MdSelectOption } from "@material/web/select/select-option";
import { MdSlider as _MdSlider } from "@material/web/slider/slider";
import { MdSwitch as _MdSwitch } from "@material/web/switch/switch";
import { MdFilledTextField as _MdFilledTextField } from "@material/web/textfield/filled-text-field";
import { MdOutlinedTextField as _MdOutlinedTextField } from "@material/web/textfield/outlined-text-field";
import { MdDialog as _MdDialog } from "@material/web/dialog/dialog";

export const MdIcon = createComponent({
  react: React,
  tagName: "md-icon",
  elementClass: _MdIcon,
});

export const MdIconButton = createComponent({
  react: React,
  tagName: "md-icon-button",
  elementClass: _MdIconButton,
});

export const MdFilledButton = createComponent({
  react: React,
  tagName: "md-filled-button",
  elementClass: _MdFilledButton,
});

export const MdElevatedButton = createComponent({
  react: React,
  tagName: "md-elevated-button",
  elementClass: _MdElevatedButton,
});

export const MdFilledTonalButton = createComponent({
  react: React,
  tagName: "md-filled-tonal-button",
  elementClass: _MdFilledTonalButton,
});

export const MdOutlinedButton = createComponent({
  react: React,
  tagName: "md-outlined-button",
  elementClass: _MdOutlinedButton,
});

export const MdCheckbox = createComponent({
  react: React,
  tagName: "md-checkbox",
  elementClass: _MdCheckbox,
});

export const MdFilterChip = createComponent({
  react: React,
  tagName: "md-filter-chip",
  elementClass: _MdFilterChiip,
});

export const MdFab = createComponent({
  react: React,
  tagName: "md-fab",
  elementClass: _MdFab,
});

export const MdCircularProgress = createComponent({
  react: React,
  tagName: "md-circular-progress",
  elementClass: _MdCircularProgress,
});

export const MdLinearProgress = createComponent({
  react: React,
  tagName: "md-linear-progress",
  elementClass: _MdLinearProgress,
});

export const MdRadio = createComponent({
  react: React,
  tagName: "md-radio",
  elementClass: _MdRadio,
});

export const MdFilledSelect = createComponent({
  react: React,
  tagName: "md-filled-select",
  elementClass: _MdFilledSelect,
});

export const MdOutlinedSelect = createComponent({
  react: React,
  tagName: "md-outlined-select",
  elementClass: _MdOutlinedSelect,
});
export const MdSelectOption = createComponent({
  react: React,
  tagName: "md-select-option",
  elementClass: _MdSelectOption,
});

export const MdSlider = createComponent({
  react: React,
  tagName: "md-slider",
  elementClass: _MdSlider,
});

export const MdSwitch = createComponent({
  react: React,
  tagName: "md-switch",
  elementClass: _MdSwitch,
});

export const MdFilledTextField = createComponent({
  react: React,
  tagName: "md-filled-text-field",
  elementClass: _MdFilledTextField,
});

export const MdOutlinedTextField = createComponent({
  react: React,
  tagName: "md-outlined-text-field",
  elementClass: _MdOutlinedTextField,
  events: {
    onChange: "change" as EventName<Event>,
  },
});

export const MdDialog = createComponent({
  react: React,
  tagName: "md-dialog",
  elementClass: _MdDialog,
  events: {
    onClose: "close",
  },
});
