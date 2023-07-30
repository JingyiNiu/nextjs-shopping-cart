import React, { useState } from "react";
import ProductOption from "./product-option";

interface Props {
  options: Size[];
  setSize: (size: string) => void;
}

interface Size {
  id: number;
  label: string;
}

const ProductOptions = ({ options, setSize }: Props) => {
  const handleChange = (option: string) => {
    setSize(option);
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

export default ProductOptions;
