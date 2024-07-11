/* eslint-disable react/prop-types */

import { useContext } from "react";
import "./cart.css";
import { GlobalContext } from "../../context/context";
import CartItem from "./cartItem";
import carbonImg from "../../assets/images/icon-carbon-neutral.svg";
import emptyCartImg from "../../assets/images/illustration-empty-cart.svg";

function EmptyCart() {
  return (
    <div className="empty">
      <img src={emptyCartImg} alt="empty cart image" />
      <p>Your added items will appear here.</p>
    </div>
  );
}

function UnemptyCart({ copyCartList }) {
  return (
    <div>
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
  );
}

export default function Cart() {
  const { cartList } = useContext(GlobalContext);

  const copyCartList = [...cartList];
  return (
    <div className="cart-section">
      <div className="cart">
        <h2>Your Cart ({copyCartList.length})</h2>
        {copyCartList && copyCartList.length > 0 ? (
          <UnemptyCart copyCartList={copyCartList} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
}
