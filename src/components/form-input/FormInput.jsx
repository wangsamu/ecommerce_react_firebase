import React from "react";
import { Group, Input, InputLabel } from "./form-input.styles";

function FormInput({ label, inputOptions }) {
  const shrink = inputOptions.value.length > 0 ? true : false;
  return (
    <Group>
      <Input required {...inputOptions} />
      {label && <InputLabel shrink={shrink}>{label}</InputLabel>}
    </Group>
  );
}

export default FormInput;
