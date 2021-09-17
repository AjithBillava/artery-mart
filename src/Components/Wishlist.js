import { useData } from "../Context/DataContext";
import { getTotalItem } from "../Components/Navigation";
import { Link } from "react-router-dom";
import { checkItemInCart } from "../utils/checkItem";

export  function Wishlist() {
  const { state:{cartItems, wishlist,user},addToCart,removeFromWishlist } = useData();
  const userId=user._id

  if (getTotalItem(wishlist?.products) === 0 || wishlist===undefined) {
    return (
      <div className="center grey-text main-section" >
        <h1>The wishlist is empty</h1>
      </div>
    );
  } else {
    return (
      <div  className="vertical-card cart-section curve">
        <u>
        <p className="center lg-txt curve">My Wishlist</p>
        </u>
          <div className=" cart-main-section center curve wrap">
            {wishlist?.products?.map(
              ({
                _id,
                name,
                image,
                price,
                productName,
                inStock,
                rating,
                fastDelivery
              }) => (
                <div
                  key={_id}
                  className="card horizontal-card lg-width-card  wishlist-product-card "
                >
                  <button
                    className="top-right dismiss-btn  "
                    onClick={() =>
                      removeFromWishlist(userId,_id)
                    }
                  >
                    x
                  </button>
                  {fastDelivery?
                  <div className="fast-delivery-tag top-left">
                    fast delivery
                  </div>
                  :
                  <div>
                  </div>}
                  <div className="img">
                    <img src={image} alt={productName} />
                  </div>
                  <div className="cart-product-section ">
                    <div className="cart-product-details">
                        <div>
                          <h2  className="cart-product-name"> {name} </h2>
                        </div>                      
                        <div>
                          <div className="price">
                            <h3>Price:</h3> <p  className="price-tag curve">₹{price}</p>
                          </div>
                          <div className="row-direction">
                              <h3>Stock availability:</h3>
                              {inStock && <div> In Stock </div>}
                              {!inStock && <div> Out of Stock </div>}
                          </div>
                          <div className="row-direction">
                          <h3>Ratings:</h3>
                            <div className="rating center curve">
                                { rating}
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
                                {fastDelivery ? (
                                <div> Fast Delivery </div>
                                ) : (
                                <div> 3 days minimum </div>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="horizontal-card center">
                      <Link
                        to={checkItemInCart(cartItems, _id).length>0 ? "/cart" : "/wishlist"}
                        className={checkItemInCart(cartItems, _id)?.length>0?"btn go-to-cart-btn primary-btn md-btn":"btn add-to-cart-btn primary-btn md-btn"}
                        onClick={() => {
                          if (checkItemInCart(cartItems, _id)?.length===0||checkItemInCart(cartItems, _id)===false) {
                            
                            addToCart(userId,_id);
                          }
                        }}
                      >
                        {checkItemInCart(cartItems, _id).length>0 ? "Go to Cart" : "Add to cart"}
                      </Link>
                      </div>
                  </div>
                </div>
              )
            )}
          </div>
        
      </div>
    );
  }
};
