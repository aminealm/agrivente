export const CartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "Add_To_Cart":
      return { ...state, cartList: payload.items };
    case "Remove_From_Cart":
      return { ...state, cartList: payload.items };
    case "Update_Total":
      return { ...state, total: payload.total };
    case "Clear_Cart":
      return { ...state, cartList: payload.products, total: payload.total };

    default:
      throw new Error("No case Found in Cart");
  }
};
