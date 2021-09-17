
  export function getFilteredData(
    productList,
    showFastDeliveryOnly,
    showInventoryAll
  ) {
    return productList
    ? (
      productList
        .filter(({ fastDelivery }) =>
          showFastDeliveryOnly ? fastDelivery : true
        )
        .filter(({ inStock }) => (showInventoryAll ? true : inStock))
    ) : (
      null
    );
  }