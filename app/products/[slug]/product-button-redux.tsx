"use client";
import Button from "@/app/components/button";
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

interface Props {
  selectProduct: any;
}

const ProductButtonRedux = ({ selectProduct }: Props) => {
  const { sizeOption } = useAppSelector((state: any) => state.cart);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if(!sizeOption) return

    const cartItem = {
      ...selectProduct,
      size: sizeOption,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <Button className="my-4" disabled={!sizeOption} onClick={handleAddToCart}>
      add to cart
    </Button>
  );
};

export default ProductButtonRedux;
