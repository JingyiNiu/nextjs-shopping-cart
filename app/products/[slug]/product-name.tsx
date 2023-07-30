import React from "react";

interface Props {
  name: string;
}

const ProductName = ({ name }: Props) => {
  return <h3 className="text-lg font-medium txt-primary">{name}</h3>;
};

export default ProductName;
