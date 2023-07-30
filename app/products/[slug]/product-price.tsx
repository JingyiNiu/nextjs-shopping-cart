import { formatPrice } from "@/app/util/util";
import React from "react";

interface Props {
  price: number;
}

const ProductPrice = ({ price }: Props) => {
  
  return (
    <div className="my-4">
      <hr className="hidden sm:block border-gray-100" />
      <h5 className="font-medium my-1">{formatPrice(price)}</h5>
      <hr className="hidden sm:block border-gray-100" />
    </div>
  );
};

export default ProductPrice;
