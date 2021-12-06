import React from "react";
import styles from "./CustomSelect.module.css";

export const CustomSelect = (props) => {
  const { options, value, onChange, label } = props;
  const [innerValue, setInnerValue] = React.useState(0);

  React.useEffect(() => {
    const newIndexPaths = Math.max(
      options.findIndex((op) => op.value === value),
      0,
    );
    setInnerValue(newIndexPaths);
  }, [value, options]);

  const handleChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    console.log("selectedIndex", selectedIndex);
    setInnerValue(selectedIndex);
    onChange && onChange(options[selectedIndex].value);
  };

  return (
    <>
      <label>{label}</label>
      <select
        value={options[innerValue]?.value}
        selectedIndex={innerValue}
        onChange={handleChange}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};
