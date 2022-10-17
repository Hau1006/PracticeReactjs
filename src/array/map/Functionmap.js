import React from "react";
import { boughtProducts, products } from "./modelMap";

const Functionmap = () => {
  // ! Method 1
  const newsProduct = products.map((product, index) => {
    return {
      ...product,
      sold: boughtProducts[index]?.count ? boughtProducts[index]?.count : 0,
      // *sold: boughtProducts[index]?.count ?? 0,
    };
  });
  // ! Method 2
  const newsProduct2 = products.map((product, index) => {
    const boughtProduct = boughtProducts.find(
      (bought) => bought.name === product.name
    );
    return {
      id: product.id,
      name: product.name,
      quantity: product.quantity,
      sold: (boughtProduct?.count || 0) + product.sold,
    };
  });

  // console.log(newsProduct);
  // console.log(newsProduct2);

  return <div>functionmap</div>;
};

export default Functionmap;
