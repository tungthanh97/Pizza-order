import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { isFunction } from "../../../Utils";
import styles from "./TextField.module.css";

export const TextField = (props) => {
  const { name, rules, placeholder, required, ...remainProps } = props;
  const formContext = useFormContext();
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control: formContext.control,
    rules: {
      required: required ? `${placeholder} is required.` : false,
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
          value={String(value)}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          {...remainProps}
        />
        {error?.message && <div className={styles.error}>{error.message}</div>}
      </div>
    </div>
  );
};
