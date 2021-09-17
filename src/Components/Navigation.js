import {Link}from "react-router-dom"
import { useData } from "../Context/DataContext"

export const getTotalItem = (item) => {
    return item?.reduce((total, { qty }) => total + qty, 0);
  };

export const getSearchedData = (productList,searchedItem)=>{
  let val = searchedItem.toLocaleLowerCase();
  
  const searchedData = productList.filter((item) =>    item.name.toLocaleLowerCase().includes(val))

  if(val===""){
    return productList
  }if(searchedData){
    return searchedData
  }else{
    console.log("no such products")
  }
};

export const Navigation = () =>{
    const { state:{wishlist, cartQuantity,isAuthenticated,user}} = useData()

    return(
        <div>
            <nav className="header align-center" >
              <div className="nav-sec">
                  <div className="header-title">
                      <Link className="nav-links logo" to="/">Atery-Mart</Link>
                  </div>
                 
                  <div>
                      <ul className="non-bullet inline-list align-center">
                        <Link  to="/login">
                          {isAuthenticated?
                          <div className="avatar ">
                            {user?.firstname.charAt(0).toUpperCase() + user?.lastname.charAt(0).toUpperCase()}
                          </div> 
                          : 
                          <div className="btn md-btn primary-btn">
                            login
                          </div>}
                        </Link>
                      <Link
                  to="/cart"
                  className="badge-container nav-btn btn  relative-box"
                >
                  <i  style={{height:"2rem",width:"2rem"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" dataname="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><g dataname="Group"><path dataname="Path" d="M41.9,65.5a9.4,9.4,0,1,0,9.2,9.3A9.2,9.2,0,0,0,41.9,65.5Z"></path><path dataname="Path" d="M70.6,65.5a9.4,9.4,0,1,0,9.1,9.3A9.2,9.2,0,0,0,70.6,65.5Z"></path><path dataname="Path" d="M87.7,26.3H28.4L25.8,18A3,3,0,0,0,23,15.8H9.3v6H20.7L32.6,60a2.9,2.9,0,0,0,2.8,2.1H78.7A3.1,3.1,0,0,0,81.6,60l9-29.8a3,3,0,0,0-2.9-3.9Z"></path></g></svg>
                  </i>

                {cartQuantity>0? <span
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      backgroundColor: "red",
                      padding: "0.2rem",
                      width: "1rem",
                      height: "1rem",
                      color: "white"
                    }}
                    className="sm-btn round center"
                  >
                    {cartQuantity}
                  </span>:<span></span>}
                </Link>
                <Link
                to="/wishlist"
                  className="badge-container nav-btn btn relative-box"
                >
                  <i  style={{height:"2rem",width:"2rem"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="black" version="1.1" x="0px" y="0px" viewBox="0 0 512 640" ><g><path d="M256,448l-30.164-27.211C118.718,322.442,48,258.61,48,179.095C48,114.221,97.918,64,162.4,64   c36.399,0,70.717,16.742,93.6,43.947C278.882,80.742,313.199,64,349.6,64C414.082,64,464,114.221,464,179.095   c0,79.516-70.719,143.348-177.836,241.694L256,448z"></path></g></svg>
                  </i>
                  {wishlist?.products?.length>0?<span
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      backgroundColor: "red",
                      padding: "0.2rem",
                      width: "1rem",
                      height: "1rem",
                      color: "white"
                    }}
                    className="sm-btn round center"
                  >
                    {wishlist?.products?.length}
                  </span>:<span></span>}
                </Link>
                
                      </ul>
                  </div>
              </div>
              
            </nav>
        
        </div>
    )
}