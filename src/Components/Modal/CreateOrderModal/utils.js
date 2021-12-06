import { getAllDrink } from "../../../Services";

export const getDrinkTypes = (data) => {
  const drinks = data.map((drink) => {
    return {
      value: drink.maNuocUong,
      label: drink.tenNuocUong,
      price: drink.donGia,
    };
  });
  drinks.unshift({ value: "", label: "Chọn nước uống", price: 0 });
  return drinks;
};

export const getDrinks = async () => {
  try {
    const drinks = await getAllDrink();
    return getDrinkTypes(drinks);
  } catch (error) {
    throw new Error(error);
  }
};
