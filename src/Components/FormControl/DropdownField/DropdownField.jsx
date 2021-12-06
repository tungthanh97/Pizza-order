import { useController, useFormContext } from "react-hook-form";
import { CustomSelect } from "../..";
import { isFunction } from "../../../Utils";
import styles from "./Dropdown.module.css";

export const DropDownField = (props) => {
  const { name, label, options, rules = {}, ...remainProps } = props;

  const formContext = useFormContext();
  const defaultValue = options[0]?.value || "";
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control: formContext.control,
    rules: {
      required: "select one option",
      ...(isFunction(rules) ? rules(formContext) : rules),
    },
    defaultValue,
  });

  return (
    <div className={styles.container}>
      <div>
        <CustomSelect
          className={styles.input}
          label={label}
          options={options}
          value={value}
          onChange={onChange}
          {...remainProps}
        />
      </div>
      {error?.message && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};
