import React from "react";
import styles from "./cart.module.css";
import CartItem from "./cart-item";
import { useAppSelector } from "@/redux/hooks";

const CartDropdown = () => {
  const { cart } = useAppSelector((state: any) => state.cart);

  return (
    <div
      className={`absolute border py-2 px-4 bg-white text-sm ${styles.cartDropdown} ${styles.dropDownWidth}`}
    >
      {cart.length ? (
        <>
          {cart.map((item: any, index: number) => (
            <div key={index}>
              <CartItem item={item} />
            </div>
          ))}
        </>
      ) : (
        <span className="txt-primary">Your cart is empty</span>
      )}
    </div>
  );
};

export default CartDropdown;
