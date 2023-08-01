"use client";

import React, { useEffect, useState } from "react";
import { addToCart } from "@/redux/features/cartSlice";
import { getProduct } from "@/app/actions/products";
import Image from "next/image";
import ErrorPage from "@/app/error";
import ProductName from "./product-name";
import ProductPrice from "./product-price";
import ProductDescription from "./product-description";
import ProductOptions from "./product-options";
import Button from "@/app/components/button";
import { ProductDetails } from "@/app/interfaces/ProductDetails";
import { CartItem } from "@/app/interfaces/CartItem";
import { useAppDispatch } from "@/redux/hooks";

const ProductDetails = () => {
  const dispatch = useAppDispatch();

  const [disableButton, setDisableButton] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null
  );
  const [selectSize, setSelectSize] = useState("");
  const [selectProduct, setSelectProduct] = useState<CartItem | null>(null);

  const onSelectSize = (size: string) => {
    if (size) {
      setDisableButton(false);
      setSelectSize(size);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...selectProduct,
      size: selectSize,
    };
    dispatch(addToCart(cartItem));
  };

  const url = "/product";

  useEffect(() => {
    getProduct(url)
      .then((res) => {
        setProductDetails(res.data);
        const { sizeOptions, description, ...other } = res.data;
        setSelectProduct(other);
      })
      .catch((err) => {
        setFetchError(true);
      });
  }, []);

  if (fetchError) {
    return <ErrorPage />;
  }

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
        <ProductOptions
          options={productDetails.sizeOptions}
          setSize={onSelectSize}
        />
        <Button
          className="my-4"
          disabled={disableButton}
          onClick={handleAddToCart}
        >
          add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
