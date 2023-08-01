import React from "react";
import Image from "next/image";
import ErrorPage from "../error";

import { baseUrl } from "@/app/actions/products";

import ProductName from "./[slug]/product-name";
import ProductPrice from "./[slug]/product-price";
import ProductDescription from "./[slug]/product-description";
import ProductOptionsRedux from "./[slug]/product-options-redux";
import ProductButtonRedux from "./[slug]/product-button-redux";

const Products = async () => {
  const productDetails = await getData();

  const { sizeOptions, description, ...other } = productDetails;
  const selectProduct = other

  if (!productDetails) {
    return <ErrorPage/>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-24">
        <div className="flex justify-center">
          <Image
            src={productDetails.imageURL}
            width={300}
            height={300}
            className="object-contain max-w-xs w-full sm:max-w-full"
            alt="product image"
            priority
          />
        </div>
        <div>
          <ProductName name={productDetails.title} />
          <ProductPrice price={productDetails.price} />
          <ProductDescription description={productDetails.description} />
          <ProductOptionsRedux options={productDetails.sizeOptions} />
          <ProductButtonRedux selectProduct={selectProduct}/>
        </div>
      </div>
    </>
  );
};

export default Products;

async function getData() {
  const url = "/product";
  const res = await fetch(`${baseUrl}${url}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}
