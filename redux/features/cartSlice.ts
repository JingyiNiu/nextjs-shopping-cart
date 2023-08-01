import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../app/interfaces/CartItem";

interface CartState {
  cart: CartItem[];
  sizeOption: string;
}

const initialState: CartState = {
  cart: [],
  sizeOption: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item: CartItem) => item.size === action.payload.size
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    setSizeOption: (state, action) => {
      state.sizeOption = action.payload
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, setSizeOption } = cartSlice.actions;
