import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { isFunction } from "../../../Utils";
import styles from "./NumberField.module.css";

export const NumberField = (props) => {
  const { name, rules, placeholder, ...remainProps } = props;
  const formContext = useFormContext();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control: formContext.control,
    rules: isFunction(rules) ? rules(formContext) : rules,
    defaultValue: "",
  });

  return (
    <div className={styles.container}>
      <div>
        <label>{placeholder}</label>
        <input
          className={styles.input}
          value={String(value)}
          onChange={(inputValue) =>
            onChange(
              isFinite(
                Number(inputValue) && inputValue.length
                  ? Number(inputValue) >= 0
                    ? Number(inputValue)
                    : ""
                  : "",
              ),
            )
          }
          placeholder={placeholder}
          {...remainProps}
        />
      </div>
      {error?.message && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};
