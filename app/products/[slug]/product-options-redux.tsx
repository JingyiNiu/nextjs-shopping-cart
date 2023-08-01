'use client'
import React, { useState } from "react";
import ProductOption from "./product-option";
import { useAppDispatch } from "@/redux/hooks";
import { setSizeOption } from "@/redux/features/cartSlice";

interface Props {
  options: Size[];
}

interface Size {
  id: number;
  label: string;
}

const ProductOptionsRedux = ({ options }: Props) => {
  
  const dispatch = useAppDispatch();
  
  const handleChange = (option: string) => {
    dispatch(setSizeOption(option))
  };

  return (
    <div className="mt-6 mb-2">
      <div className="uppercase text-xs font-medium mb-2">
        size
        <span className="txt-danger font-medium">*</span>
      </div>
      <div className="flex">
        {options.map((option: Size) => {
          return (
            <ProductOption
              key={option.id}
              label={option.label}
              name="option"
              setOption={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductOptionsRedux;

