export const checkItem = (object, _id) => {
    return object?.products?.find((item) => item._id === _id);
  }; 
  
export const checkItemInCart = (object,_id) =>{
  return object?.products?.length > 0 &&
		object.products.filter((el) => el.product._id === _id)
} 