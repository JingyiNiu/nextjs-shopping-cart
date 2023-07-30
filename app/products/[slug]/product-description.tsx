import React from "react";

interface Props {
  description: string;
}

const ProductDescription = ({ description }: Props) => {
  return <p className="txt-secondary text-xs my-4">{description}</p>;
};

export default ProductDescription;
