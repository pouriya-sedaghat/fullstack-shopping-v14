import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import App from "@/layout/App";

import { CartContextProvider } from "@/context/Cart";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Develop Shopping Cart With Next.js v-13.",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`bg-light text-dark`}>
        <CartContextProvider>
          <App>{children}</App>
        </CartContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;
