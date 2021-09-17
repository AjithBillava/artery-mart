import { checkItem, checkItemInCart } from "../utils/checkItem";
import { useData } from "../Context/DataContext";
import { Link } from "react-router-dom";

export const Card =({item:{_id,name,image,price,productName,inStock,rating,fastDelivery}})=>{
  const { state:{cartItems, wishlist,user},addToCart,addToWishlist,removeFromWishlist } = useData();

const userId=user._id
    return(
        <div    className="card product center  md-width-card  relative-box ">
                <button 
                    className=" top-right wishlist-btn center curve"
                    style={{
                        color: `${checkItem(wishlist, _id) ? "red" : "black"}`
                    }}
                    onClick={() => {
                        checkItem(wishlist, _id)
                        ? removeFromWishlist(userId,_id)
                        :  addToWishlist(userId,_id);
                    }}
                >
                  <i className="fa fa-heart"></i>
                </button>
                {fastDelivery?
                <div className="fast-delivery-tag top-left">
                  fast delivery
                </div>
                :
                <div>
                </div>}
                <div className="img center" >
                  <img  src={image} width="100%" height="100%" alt={productName} />
                </div>
                <div>
                  <h3 className="product-name"> {name} </h3>
                  <div className="product-details center">
                      <div className="price ">
                        {/* <p className="md-txt mg0_5-r ">₹{price-((price*10)/100)}</p>
                        <p className="strike">{price} </p> */}
                        <p className="md-txt mg0_5-r price-tag curve">₹{price} </p>
                      </div>
                      
                      <div className="rating center curve">
                      {rating}
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="rating-icon" viewBox="0 0 32 32"> <title>star-full</title>
                                <path
                                    d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z">
                                </path>
                        </svg>
                      </div>
                      {/* <div>{offer}</div> */}
                  </div>
                  <div className="horizontal-card wrap center">
                  <Link
                    to={checkItemInCart(cartItems, _id)?.length>0 ? "/cart" : "/"}
                    className={checkItemInCart(cartItems, _id)?.length>0?"btn go-to-cart-btn md-btn primary-btn":"btn add-to-cart-btn md-btn primary-btn"}
                    onClick={() => {
                      if (checkItemInCart(cartItems, _id)?.length===0||checkItemInCart(cartItems, _id)===false) {
                         
                          addToCart(userId,_id)                       
                      }
                    }}
                  >
                    {checkItemInCart(cartItems, _id)?.length>0 ? "Go to Cart" : "Add to cart"}
                  </Link>
                </div>
                </div>

               

                {!inStock?
                <div className="out-of-stock center curve absolute-box"> 
                  <div className="md-txt out-of-stock_text curve"> out of stock </div>
                </div>:<div></div>}
              </div>
    )
}