import { useData } from "../Context/DataContext"
import { checkItem } from "../utils/checkItem"


export const ProductDescription = ({products}) =>{

const {state:{user,wishlist,cartItems},incrementItem,decrementItem,removeFromWishlist,addToWishlist,removeFromCart} = useData()

const _id=products.product._id;
const userId=user._id
const cartId=cartItems._id
return(
    <div>
        <div
        key={products.product?._id}
        className="card  lg-width-card  relative-box cart-product-card"
        >
            {/* <button
                className="top-right dismiss-btn  "
                onClick={() => removeFromCart(user?._id,products?._id)}
            >
                x
            </button> */}
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
                    > <i className="fa fa-heart"></i>
                    </button>
                    {products.product?.fastDelivery?
                <div className="fast-delivery-tag top-left">
                  fast delivery
                </div>
                :
                <div>
                </div>}                
            <div className="img">
                <img src={products.product?.image}  alt={products.product?.productName} />
            </div>
            <div className="cart-product-section" >
                <div className="cart-product-details">
                    <div>
                        <h2 className="cart-product-name"> {products.product?.name} </h2>
                    </div>
                    <div>
                        <div className="price">
                            <h3>Price:</h3> <p  className="price-tag curve">₹{products.product?.price}</p>
                        </div>
                        <div className="row-direction">
                            <h3>Stock availability:</h3>
                            {products.product?.inStock && <div> In Stock </div>}
                            {!products.product?.inStock && <div> Out of Stock </div>}
                        </div>
                        <div className="row-direction">
                            <h3>Ratings:</h3>
                            <div className="rating center curve">
                                { products.product?.rating}
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="rating-icon" viewBox="0 0 32 32"> <title>star-full</title>
                                        <path
                                            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z">
                                        </path>
                                </svg>
                            </div>
                        </div>
                        <div className="row-direction">
                            <h3>Delivery:</h3>
                            <div>
                                {products.product?.fastDelivery ? (
                                <div> Fast Delivery </div>
                                ) : (
                                <div> 3 days minimum </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="horizontal-card center">
                <button
                disabled={products.quantity===1}
                className={products.quantity===1?"btn circle-btn ":"btn circle-btn disable-btn"}
                onClick={() => 
                    decrementItem(products?._id,cartId,user?._id)
                }
                >
                -
                </button>

                {products.quantity === 0 ? 0 : <div className="justify-center">{products.quantity}</div>}
                <button
                className="btn circle-btn"
                onClick={() =>
                    incrementItem(products?._id,cartId,user?._id)
                }
                >
                +
                </button>
                <button className="btn  md-btn mr1 remove-btn"
                onClick={() => removeFromCart(user?._id,products?._id)}>Remove</button>
                </div>
            </div>
        
        </div>
    
    </div>
)
}
