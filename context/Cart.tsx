"use client";

import { createContext, useReducer } from "react";

import { Product } from "@/interface/Product";

import Cookies from "js-cookie";

type State = {
  cart: {
    cartItems: Product[];
  };
};

type Action = { type: string; payload: Product };

enum ActionTypeValue {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}

type CartContext = {
  state: State;
  dispatch: (action: Action) => void;
};

export const CartContext = createContext({} as CartContext);

const initialState = {
  cart: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart"))
    : {
        cartItems: [],
      },
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypeValue.ADD_ITEM:
      {
        const newItem = action.payload;

        const existingItem = state.cart.cartItems.find(
          (item) => item.slug === newItem.slug
        );

        const cartItems = existingItem
          ? state.cart.cartItems.map((item) =>
              item.title === existingItem.title ? newItem : item
            )
          : [...state.cart.cartItems, newItem];

        Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));

        return { ...state, cart: { ...state.cart, cartItems } };
      }
      break;
    case ActionTypeValue.REMOVE_ITEM:
      {
        const cartItems = state.cart.cartItems.filter(
          (item) => item.slug !== action.payload.slug
        );

        Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));

        return { ...state, cart: { ...state.cart, cartItems } };
      }
      break;
    default:
      return state;
  }
}

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
