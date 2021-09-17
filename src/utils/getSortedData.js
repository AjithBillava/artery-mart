
 export function getSortedData(productList, sortBy) {
    if(productList)
    {
      if (sortBy === "Price-low-high") {
        return productList.sort((a, b) => a["price"] - b["price"]);
      }
      if (sortBy === "Price-high-low") {
        return productList.sort((a, b) => b["price"] - a["price"]);
      }

      return productList;
    }
    return null
  }