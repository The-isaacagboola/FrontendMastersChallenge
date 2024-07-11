/* eslint-disable react/prop-types */

import { useContext } from "react";
import "./cart.css";
import { GlobalContext } from "../../context/context";
import CartItem from "./cartItem";
import carbonImg from "../../assets/images/icon-carbon-neutral.svg";

export default function Cart() {
  const { cartList } = useContext(GlobalContext);

  const copyCartList = [...cartList];
  return (
    <div className="cart-section">
      <div className="cart">
        <h2>Your Cart ({copyCartList.length})</h2>

        <div>
          {copyCartList.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>

        <p className="total">
          <span>Order Total</span>
          <span>$46.50</span>
        </p>

        <div className="carbon">
          <img src={carbonImg} alt="carbon-neutral icon" />
          <p>
            {" "}
            This is a <span>carbon-neutral</span> delivery
          </p>
        </div>

        <button>Confirm Order</button>
      </div>
    </div>
  );
}
