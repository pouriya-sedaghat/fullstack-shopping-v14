import ProductItem from "@/components/ProductItem";

import products from "@/data/products.json";

import { Row } from "react-bootstrap";

import { Product } from "@/interface/Product";

// Dynamic Title And ...

// import type { Metadata } from "next";

// export const metadata = {
//   title: "Home",
//   description: "Products Shoppping.",
// };

function Home() {
  const myProducts: Product[] = products;
  return (
    <Row className="py-4">
      {myProducts.map((item) => (
        <ProductItem key={item.slug} {...item} />
      ))}
    </Row>
  );
}

export default Home;
