"use client";

import { createContext, useReducer } from "react";

import Cookies from "js-cookie";

type Product = {
  slug: string;
  title: string;
  price: number;
  description: string;
  category: string;
  count: number;
  image: string;
  quantity?: number;
};

type CartValueContext = {
  state: {
    cart: {
      cartItems: Product[];
    };
  };
  dispatch: ({ type, payload }: { type: string; payload: Product }) => void;
};

enum DispatchType {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}

export const CartContext = createContext({} as CartValueContext);

const initialState = {
  cart: Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart"))
    : {
        cartItems: [],
      },
};

function reducer(
  state: { cart: { cartItems: Product[] } },
  action: { type: string; payload: Product }
) {
  switch (action.type) {
    case DispatchType.ADD_ITEM:
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
    case DispatchType.REMOVE_ITEM:
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
