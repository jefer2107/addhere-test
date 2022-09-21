import React from "react";
import Input from "@material-tailwind/react/Input";

const TextInput = (props: any) => {
  return (
    <div className="mb-2 w-full">
      <Input
        className="w-full"
        {...props}
        color="lightBlue"
        size="regular"
        outline={true}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        error={props.error}
        success={props.success}
      />
    </div>
  );
};

export default TextInput;
