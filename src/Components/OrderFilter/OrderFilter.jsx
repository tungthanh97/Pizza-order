import { ComboType, StatusType } from "../../Constant";
import { FormContainer, SubmitButton, DropDownField } from "../FormControl";
import styles from "./OrderFilter.module.css";

export const OrderFilter = (props) => {
  const { onSubmit } = props;
  const submitHandler = (values) => {
    onSubmit(values);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Danh sách đơn hàng</h1>
      <FormContainer onSubmit={submitHandler}>
        <div className={styles.form}>
          <DropDownField
            label="Cỡ combo (Pizza Size)"
            name="kichCo"
            options={ComboType}
          />
          <DropDownField
            label="Trạng thái Order"
            name="trangThai"
            options={StatusType}
          />
          <SubmitButton onSubmit={submitHandler}>Lọc</SubmitButton>
        </div>
      </FormContainer>
    </div>
  );
};
