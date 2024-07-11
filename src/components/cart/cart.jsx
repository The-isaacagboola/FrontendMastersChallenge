import { useContext, useEffect, useState } from "react";
import "./cart.css";
import { CartContext } from "../../context/context";
import CartItem from "./cartItem";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const [cartArray, setCartArray] = cartContext;

  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    cartArray.length === 0 ? setCartSize(0) : setCartSize(cartArray.length);
  }, [cartArray]);

  return (
    <div className="cart-section">
      <div className="cart">
        <h2>Your Cart ({cartSize})</h2>

        <div>
          {cartArray ? cartArray.map((item, i) => <CartItem key={i} />) : null}
        </div>
      </div>
    </div>
  );
}
