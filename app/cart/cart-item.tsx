import React from "react";
import Image from "next/image";
import { CartItem } from "../interfaces/CartItem";
import { formatPrice } from "../util/util";

interface Props {
  item: CartItem;
}
const CartItem = ({ item }: Props) => {
  return (
    <div className="flex my-4">
      <Image
        src={item.imageURL}
        width={50}
        height={100}
        className="object-contain"
        alt="product image"
        priority
      />
      <div className="sm:w-60 text-xs">
        <div className="mb-2">{item.title}</div>
        <div className="mb-2">
          {item.quantity} *{" "}
          <span className="font-medium">{formatPrice(item.price)}</span>
        </div>
        <div className="mb-2">Size: {item.size}</div>
      </div>
    </div>
  );
};

export default CartItem;
