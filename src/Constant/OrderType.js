export function Option(value, label) {
  this.value = value;
  this.label = label;
}

export const PizzaType = [
  new Option("", "Chọn Type Pizza"),
  new Option("Seafood", "Hải Sản"),
  new Option("Hawaii", "Hawaii"),
  new Option("Bacon", "Thịt hun khói"),
];

export const StatusType = [
  new Option("All", "Tất cả"),
  new Option("open", "Open"),
  new Option("cancel", "Đã hủy"),
  new Option("confirm", "Đã xác nhận"),
];

export const ComboType = [
  new Option("All", "Tất cả"),
  new Option("S", "S (Nhỏ)"),
  new Option("M", "M (Vừa)"),
  new Option("L", "L (Lớn)"),
];
