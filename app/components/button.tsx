import React from "react";
import style from "./button.module.css";

type Props = {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  disabled?:boolean;
  children?: React.ReactNode;
};

const Button = ({ children, onClick, className, disabled, ...props }: Props) => {
  return (
    <button
      className={`px-4 py-1 border-2 text-sm font-medium uppercase ${style.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
