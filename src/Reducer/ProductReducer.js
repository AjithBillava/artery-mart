export const TOGGLE_DELIVERY = "TOGGLE_DELIVERY";
export const TOGGLE_INVENTORY = "TOGGLE_INVENTORY";
export const SORT = "SORT";
export const CLEAR = "CLEAR";

export const reducerFunc = (state, { type, payLoad}) => {
  switch (type) {
    case TOGGLE_DELIVERY:
      return (state = {
        ...state,
        showFastDeliveryOnly: !state.showFastDeliveryOnly
      });
    case TOGGLE_INVENTORY:
      return (state = {
        ...state,
        showInventoryAll: !state.showInventoryAll
      });

    case SORT:
      return (state = {
        ...state,
        sortBy: payLoad
      });
    case CLEAR:
      return (state = {
        ...state,
        sortBy: false,
        showInventoryAll: false,
        showFastDeliveryOnly: false
      });
    default:
      return state;
  }
};
