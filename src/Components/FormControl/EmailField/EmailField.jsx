import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { isFunction } from "../../../Utils";
import styles from "./EmailField.module.css";

export const EmailField = (props) => {
  const { name, rules, placeholder } = props;
  const formContext = useFormContext();
  const {
    field: { onBlur, onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control: formContext.control,
    rules: {
      required: `${placeholder} is required.`,
      pattern: { value: /.+\@.+\..+/, message: "Invalid email format." },
      ...(isFunction(rules) ? rules(formContext) : rules),
    },
    defaultValue: "",
  });

  return (
    <div className={styles.container}>
      <label>{placeholder}</label>
      <div>
        <input
          className={styles.input}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {error?.message && <div className={styles.error}>{error.message}</div>}
      </div>
    </div>
  );
};
