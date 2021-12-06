import styles from "./ComboBox.module.css";

export const ComboBox = (props) => {
  const { itemList, label, name } = props;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select name={name}>
        {Object.entries(itemList).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};
