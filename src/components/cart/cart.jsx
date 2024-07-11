import { useContext, useEffect, useState } from "react";
import "./cart.css";
import { CartContext } from "../../context/context";
import CartItem from "./cartItem";

export default function Cart() {
  const [cartArray] = useContext(CartContext);
  const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     cartArray.length === 0 ? setCartSize(0) : setCartSize(cartArray.length);
  //   }, [cartArray]);

  useEffect(() => {
    setItems([...cartArray]);
    console.log(items);
  }, [cartArray]);

  return (
    <div className="cart-section">
      <div className="cart">
        <h2>Your Cart ({items.length})</h2>

        <div>{items ? items.map((item, i) => <CartItem key={i} />) : null}</div>
      </div>
    </div>
  );
}
