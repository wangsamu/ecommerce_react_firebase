import React from "react";
import { Group, Input, InputLabel } from "./form-input.styles";

function FormInput({ label, inputOptions }) {
  // const shrink = ;
  return (
    <Group>
      <Input required {...inputOptions} />
      {label && (
        //if "inputOptions.value.length" is 0, it'll be evaluated as falsy
        <InputLabel shrink={inputOptions.value.length}>{label}</InputLabel>
      )}
    </Group>
  );
}

export default FormInput;
