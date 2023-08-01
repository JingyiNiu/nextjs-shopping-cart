"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import ProductName from "./[slug]/product-name";
import ProductPrice from "./[slug]/product-price";
import ProductDescription from "./[slug]/product-description";

import { ProductDetails } from "@/app/interfaces/ProductDetails";
import { getProduct } from "@/app/actions/products";

const Products = () => {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null
  );

  const url = "/product";

  useEffect(() => {
    getProduct(url)
      .then((res) => {
        setProductDetails(res.data);
      })
  }, []);

  if (!productDetails) {
    return <>Loading</>;
  }

  return (
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
      </div>
    </div>
  );
};

export default Products;
