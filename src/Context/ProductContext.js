import { createContext, useContext, useReducer } from "react";
import { reducerFunc } from "../Reducer/ProductReducer";
// import { productDB as data } from "../Database/ProductDB";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    // data,
    showFastDeliveryOnly: false,
    showInventoryAll: false,
    sortBy: null
  });
  return (
    <ProductContext.Provider
      value={{ productState: state, productDispatch: dispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
