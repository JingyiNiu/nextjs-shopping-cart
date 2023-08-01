import React, { useState } from "react";
import CartIcon from "./cart-icon";
import styles from "./cart.module.css";
import CartDropdown from "./cart-dropdown";
import { CartItem } from "../interfaces/CartItem";
import { useAppSelector } from "@/redux/hooks";

const NavCart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const { cart } = useAppSelector((state: any) => state.cart);
  const count = cart.reduce(
    (total: number, item: CartItem) => total + item.quantity,
    0
  );

  return (
    <div className="relative">
      <div
        className={`cursor-pointer py-1.5 px-2 border border-transparent relative z-10 text-xs ${ activeCart ? styles.active : "" }`}
        onClick={() => setActiveCart(!activeCart)}
      >
        <span
          className={`hidden sm:block font-medium ${ activeCart ? styles.activeCartIcon : styles.cartIcon }`}
        >
          My Cart ( {cart.length ? count : "0"} )
        </span>
        <div className={`flex sm:hidden`}>
          <CartIcon className={`${ activeCart ? styles.activeCartIcon : styles.cartIcon }`}/>
          <span className={`${ activeCart ? styles.activeCartIcon : styles.cartIcon }`}>
            ( {cart.length ? count : "0"} )</span>
        </div>
      </div>
      {activeCart && <CartDropdown />}
    </div>
  );
};

export default NavCart;
