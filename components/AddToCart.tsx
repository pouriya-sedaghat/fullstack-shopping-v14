"use client";

import { useContext } from "react";

import { CartContext } from "@/context/Cart";

import { useRouter } from "next/navigation";

import { Product } from "@/interface/Product";

import { toast } from "react-toastify";

function AddToCart({ product }: { product: Product }) {
  const {
    state: {
      cart: { cartItems },
    },
    dispatch,
  } = useContext(CartContext);

  const router = useRouter();

  function addToCarthandler() {
    const existingItem = cartItems.find((item) => item.slug === product.slug);

    const quantity = existingItem ? existingItem.quantity! + 1 : 1;

    if (quantity > product.count) return toast.error("Product Is out.");

    dispatch({ type: "ADD_ITEM", payload: { ...product, quantity } });

    toast.success("Added Product.");

    product.main && router.push("/cart");
  }

  return (
    <button
      onClick={addToCarthandler}
      className="btn btn-dark opacity-75 d-block mx-auto"
    >
      Add To Cart
    </button>
  );
}

export default AddToCart;
