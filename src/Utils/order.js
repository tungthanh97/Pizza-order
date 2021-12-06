export const filterOrderBySize = (orderList, filter) => {
  if (filter === "All" || orderList.length === 0) return orderList;
  return orderList.filter((order) => order.kichCo === filter);
};

export const filterOrderByStatus = (orderList, filter) => {
  if (filter === "All" || orderList.length === 0) return orderList;
  return orderList.filter((order) => order.trangThai === filter);
};
