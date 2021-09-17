export const INCREEMENT_CART = "INCREEMENT_CART";
export const DECREEMENT_CART = "DECREEMENT_CART";
export const REMOVE_CART = "REMOVE_CART";
export const ADD_TO_CART = "ADD_TO_CART";

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const data = {
  prodData:[],
  cartItems: [],
  wishlist: [],
  cartQuantity: 0,
  user:{},
  isAuthenticated: false,
  isLoading:false,
  searchedText:""
};

export const dataReducer = (state, { type, payLoad }) => {
  
 
  switch (type) {
    case "SET_PRODUCT":
        return{
          ...state,prodData:payLoad
        }
    case "SET_LOADING":
        return{
          ...state,isLoading:payLoad
        }
    case "LOAD_USER":
      
      return{
        ...state,
        user:payLoad.user,
        isAuthenticated:true,
        cartQuantity:payLoad.user.cart?.products.length,
        cartItems:payLoad.user?.cart,
        wishlist:payLoad.user?.wishList
      }
    case "LOGIN_USER":
      localStorage.setItem("token",payLoad.token)
      localStorage.setItem("isAuthenticated",true)
      return{
        ...state,
        isAuthenticated:true,
        user:payLoad.user,
        cartQuantity:payLoad.user.cart?.products?.length,
        cartItems:payLoad.user?.cart,
        wishlist:payLoad.user?.wishList
      }
    case "REGISTER_USER":
      localStorage.setItem("token",payLoad.token)
      localStorage.setItem("isAuthenticated",true)
      return{
        ...state,
        isAuthenticated:true,
        user:payLoad.savedUser
        
      }
    case "LOGOUT_USER":
      localStorage.removeItem("token")
      localStorage.removeItem("isAuthenticated")
      return{
        ...state,
        user:{},
        isAuthenticated:false,
        cartQuantity:0,
        cartItems:[],
        wishlist:[]
      }

    case "INCREMENT_ITEM_OR_DECREMENT_ITEM":
      return {
        ...state,
        cartItems:payLoad.item
      }

    case REMOVE_CART:
      return {
        ...state,
        cartItems: payLoad.item,
        cartQuantity: payLoad.item.products?payLoad.item.products.length:0
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: payLoad.item,
        cartQuantity: payLoad.item.products?payLoad.item.products.length:0
      };
      
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: payLoad.item
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: payLoad.item
      };
    case "SEARCH":
      return{
        ...state, searchedText:payLoad
        }

    default:
      console.log("Error");
      return state;
  }
};
