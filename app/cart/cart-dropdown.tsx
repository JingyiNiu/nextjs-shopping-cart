import React from "react";
import styles from "./cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "./cart-item";

const CartDropdown = () => {
  const { cart } = useSelector((state: any) => state.cart);

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
