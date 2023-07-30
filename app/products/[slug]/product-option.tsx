import React from "react";
import styles from "./product.module.css";

interface Props {
  label: string;
  name: string;
  setOption: (label: string) => void;
}
const ProductOption = ({ label, setOption, name }: Props) => {
  return (
    <>
      <label className="block mr-1 cursor-pointer text-xs txt-primary">
        <input
          className="hidden peer"
          type="radio"
          onChange={() => setOption(label)}
          name={name}
        />
        <div className="w-8 h-8 border flex justify-center items-center peer-checked:border-2 peer-checked:border-gray-800">
          {label}
        </div>
      </label>
    </>
  );
};

export default ProductOption;
