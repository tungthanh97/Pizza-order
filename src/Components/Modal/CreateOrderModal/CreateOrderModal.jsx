import React from "react";
import {
  EmailField,
  FormContainer,
  NumberField,
  TextField,
  DropDownField,
  FormDependency,
  SubmitButton,
} from "../../FormControl";
import { PizzaType, ComboType, ComboInfo } from "../../../Constant";
import styles from "./CreateOrderModal.module.css";
import { getDrinks } from "./utils";
import { createOrder } from "../../../Services";

export const CreateOrderModal = (props) => {
  const [drinks, setDrinks] = React.useState([]);
  React.useEffect(() => getDrinks().then((res) => setDrinks(res)), []);
  const handleSubmit = (values) => {
    createOrder(values);
  };

  return (
    <div className="backdrop" onClick={props.closeModal}>
      <FormContainer defaultValues={{ loaiPizza: "S" }}>
        <div
          className={styles.container}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.formContainer}>
            <div className={`${styles.splits} ${styles.left}`}>
              <TextField required name="hoTen" placeholder="Họ và tên" />
              <EmailField name="email" placeholder="Email" />
              <NumberField name="soDienThoai" placeholder="Số điện thoại" />
              <TextField name="diaChi" placeholder="Địa chỉ" />
              <TextField name="loiNhan" placeholder="Lời nhắn" />
              <TextField
                disabled
                value="open"
                name="trangThai"
                placeholder="Trạng thái"
              />
              <NumberField name="idVourcher" placeholder="idVoucher" />
              <DropDownField
                value="S"
                label="Loại Pizza (Pizza type)"
                name="loaiPizza"
                options={PizzaType}
              />
            </div>
            <div className={`${styles.splits} ${styles.right}`}>
              <FormDependency name={["kichCo"]}>
                {([kichCo = "S"]) => {
                  const orderedCombo = ComboInfo[kichCo] ?? [];
                  return (
                    <>
                      <DropDownField
                        label="Cỡ combo (Pizza Size)"
                        name="kichCo"
                        options={ComboType.slice(1)}
                      />
                      <NumberField
                        disabled
                        value={orderedCombo.duongKinh}
                        name="duongKinh"
                        placeholder="Đường kính (cm)"
                      />
                      <NumberField
                        disabled
                        value={orderedCombo.suon}
                        name="suon"
                        placeholder="Sườn (miếng)"
                      />
                      <NumberField
                        disabled
                        name="salad"
                        placeholder="Salad (g)"
                      />
                      <DropDownField
                        label="Loại nước Uống"
                        name="idLoaiNuocUong"
                        options={drinks}
                      />
                      <NumberField
                        disabled
                        value={orderedCombo.soLuongNuoc}
                        name="soLuongNuoc"
                        placeholder="Số lượng Nước"
                      />
                      <NumberField
                        disabled
                        value={orderedCombo.thanhTien}
                        name="thanhTien"
                        placeholder="Thành tiền"
                      />
                    </>
                  );
                }}
              </FormDependency>
            </div>
          </div>
          <SubmitButton onSubmit={handleSubmit}>Submit</SubmitButton>
        </div>
      </FormContainer>
    </div>
  );
};
