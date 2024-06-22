"use client";

import { Container, Row, Col } from "react-bootstrap";

import Link from "next/link";

import { useState, useEffect, useContext } from "react";

import { CartContext } from "@/context/Cart";

function Header() {
  const {
    state: {
      cart: { cartItems },
    },
  } = useContext(CartContext);

  const [counCartItems, setCountCartItems] = useState<number>(0);

  useEffect(() => {
    setCountCartItems(cartItems.reduce((acc, cur) => acc + cur.quantity!, 0));
  }, [cartItems]);

  return (
    <Container fluid className="bg-dark text-light">
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-between align-items-center py-2"
        >
          <Link href="/" className="text-reset text-decoration-none px-2">
            <h1 className="h4 m-0">Shopping</h1>
          </Link>
          <ul className="d-flex list-unstyled m-0">
            <li className="me-1">
              <Link
                href="/cart"
                className="text-reset text-decoration-none px-2"
              >
                Cart <span>{counCartItems}</span>
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-reset text-decoration-none px-2"
              >
                Login
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
