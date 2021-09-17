import { useProduct } from "../Context/ProductContext";
import { useData } from "../Context/DataContext";
import { Filter } from "./Filter";
import { useEffect,useState} from "react";
import { getSortedData } from "../utils/getSortedData";
import { getFilteredData } from "../utils/getFilteredData";
import { Card } from "./Card";



export function Product({showToast,setShowToast}) {
  const { productState:{showFastDeliveryOnly
    ,showInventoryAll,sortBy} } = useProduct();
  const { state:{ prodData ,searchedText},dataDispatch } = useData();

  const [searchedData,setSearchedData] = useState()
  const sortedData = getSortedData(prodData, sortBy);
  const filteredList = getFilteredData(sortedData,showFastDeliveryOnly,showInventoryAll);

  const sortedSearchedData = getSortedData(searchedData,sortBy)
  const filteredSearchedList = getFilteredData(sortedSearchedData,showFastDeliveryOnly,showInventoryAll)

  useEffect(()=>{
    if (searchedText === "") {
			return setSearchedData([]);
		}
		let searchedItems =
			filteredList &&
			filteredList.filter((item) =>
				item.name.toLowerCase().includes(searchedText.toLowerCase())
					//  
			);
		setSearchedData(searchedItems);

		return () => setSearchedData([]);
	}, [searchedText]);

  
  if(searchedText && searchedData.length===0){
    return (
    <div className="main-section center" >
    <Filter/>
    <div className="vertical-card wrap container relative-box center">
      
      <div className="center search-bar">
            < i className="search-icon" >               
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" fill="black" viewBox="0 0 100 125" ><path d="M87,81.3L69.1,63.4c9-11.7,8.1-28.6-2.7-39.3c-5.9-5.9-13.5-8.8-21.2-8.8s-15.3,2.9-21.2,8.8c-11.7,11.7-11.7,30.7,0,42.4  c5.9,5.9,13.5,8.8,21.2,8.8c6.4,0,12.8-2,18.1-6.1L81.3,87c0.8,0.8,1.8,1.2,2.9,1.2c1,0,2.1-0.4,2.9-1.2  C88.6,85.5,88.6,82.9,87,81.3z M45.3,67.2c-5.9,0-11.3-2.3-15.5-6.4c-8.5-8.5-8.5-22.4,0-31c4.1-4.1,9.6-6.4,15.5-6.4  s11.3,2.3,15.5,6.4s6.4,9.6,6.4,15.5c0,5.9-2.3,11.3-6.4,15.5S51.1,67.2,45.3,67.2z"></path></svg>
            </i>
          <input className="search"
          placeholder="search products here..."
          onChange={(e) =>
            dataDispatch({ type: "SEARCH", 
            payLoad:e.target.value})
          }
          >
          </input>
        

      </div>
        <div className="horizontal-card product-container center wrap">              
        {   
            <h1>
               no such data found!!!
            </h1>
        }
      </div>
      </div>
      </div>
    );
  }
  else if(!searchedData ){
    return (
      <div className="main-section " >
      <Filter/>
      <div className="vertical-card wrap container center relative-box">
          <div className="center search-bar">
                            < i className="search-icon" >               
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" fill="black" viewBox="0 0 100 125" ><path d="M87,81.3L69.1,63.4c9-11.7,8.1-28.6-2.7-39.3c-5.9-5.9-13.5-8.8-21.2-8.8s-15.3,2.9-21.2,8.8c-11.7,11.7-11.7,30.7,0,42.4  c5.9,5.9,13.5,8.8,21.2,8.8c6.4,0,12.8-2,18.1-6.1L81.3,87c0.8,0.8,1.8,1.2,2.9,1.2c1,0,2.1-0.4,2.9-1.2  C88.6,85.5,88.6,82.9,87,81.3z M45.3,67.2c-5.9,0-11.3-2.3-15.5-6.4c-8.5-8.5-8.5-22.4,0-31c4.1-4.1,9.6-6.4,15.5-6.4  s11.3,2.3,15.5,6.4s6.4,9.6,6.4,15.5c0,5.9-2.3,11.3-6.4,15.5S51.1,67.2,45.3,67.2z"></path></svg>
                            </i>
                            <input className="search"
                            placeholder="search products here..."
                            onChange={(e) =>
                              dataDispatch({ type: "SEARCH",
                              payLoad:e.target.value})
                            }
                            >
                            </input>
                          
  
                        </div>
          <div className="horizontal-card product-container center wrap">              
          {
              filteredList.map(item => (
                <Card key={item._id} item={item} showToast={showToast} setShowToast={setShowToast } />
                ))
          }
        </div>
        </div>
        </div>
      );
  }
  else{
    return (
      <div className="main-section " >
      <Filter/>
      <div className="vertical-card wrap container center relative-box">
        <div className="center search-bar">
                            < i className="search-icon" >               
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" fill="black" viewBox="0 0 100 125" ><path d="M87,81.3L69.1,63.4c9-11.7,8.1-28.6-2.7-39.3c-5.9-5.9-13.5-8.8-21.2-8.8s-15.3,2.9-21.2,8.8c-11.7,11.7-11.7,30.7,0,42.4  c5.9,5.9,13.5,8.8,21.2,8.8c6.4,0,12.8-2,18.1-6.1L81.3,87c0.8,0.8,1.8,1.2,2.9,1.2c1,0,2.1-0.4,2.9-1.2  C88.6,85.5,88.6,82.9,87,81.3z M45.3,67.2c-5.9,0-11.3-2.3-15.5-6.4c-8.5-8.5-8.5-22.4,0-31c4.1-4.1,9.6-6.4,15.5-6.4  s11.3,2.3,15.5,6.4s6.4,9.6,6.4,15.5c0,5.9-2.3,11.3-6.4,15.5S51.1,67.2,45.3,67.2z"></path></svg>
                            </i>
                            <input className="search"
                            placeholder="search products here..."
                            onChange={(e) =>
                              dataDispatch({ type: "SEARCH",
                              payLoad:e.target.value})
                            }
                            >
                            </input>
                          
  
                        </div>
          <div className="horizontal-card product-container center wrap">              
          {
               !searchedData || searchedData.length===0?(
                 filteredList.map(item => (
                 <Card key={item._id} item={item} showToast={showToast} setShowToast={setShowToast } />
                ))
               ):
               (
                 filteredSearchedList.map(item => (
                  <Card key={item._id} item={item} showToast={showToast} setShowToast={setShowToast } />
                ))
               )
          }
        </div>
        </div>
        </div>
      );
  }
}
