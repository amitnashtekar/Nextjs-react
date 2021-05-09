export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotalPrice = (basket) => {
  return basket?.reduce((amount, item) => {
    return item.price + amount;
  }, 0);
};

const reducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, payload.item],
      };
    case "REMOVE_FROM_BASKET":
      const itemIndex = state.basket.findIndex(
        (basketItem) => basketItem.id === payload.id
      );
      if (itemIndex > -1) {
        const newBasket = [...state.basket];
        newBasket.splice(itemIndex, 1);
        return {
          ...state,
          basket: newBasket,
        };
      } else {
        console.warn(`there is no item in basket having id ${payload.id}`);
        return state;
      }
    case "SET_USER":
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
};

export default reducer;
