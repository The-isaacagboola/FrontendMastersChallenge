/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import "./cart.css";
import { GlobalContext } from "../../context/context";
import CartItem from "./cartItem";
import carbonImg from "../../assets/images/icon-carbon-neutral.svg";
import emptyCartImg from "../../assets/images/illustration-empty-cart.svg";
import Modal from "../Modal/modal";

function EmptyCart() {
  return (
    <div className="empty">
      <img src={emptyCartImg} alt="empty cart image" />
      <p>Your added items will appear here.</p>
    </div>
  );
}

function UnemptyCart({ copyCartList }) {
  const [openModal, setOpenModal] = useState(false);

  function totalPrice() {
    const total = copyCartList.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    );
    return total.toFixed(2);
  }

  return (
    <div>
      <div>
        {copyCartList.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>

      <p className="total">
        <span>Order Total</span>
        <span>${totalPrice()}</span>
      </p>

      <div className="carbon">
        <img src={carbonImg} alt="carbon-neutral icon" />
        <p>
          {" "}
          This is a <span>carbon-neutral</span> delivery
        </p>
      </div>

      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        totalPrice={totalPrice}
      />

      <button onClick={() => setOpenModal(true)}>Confirm Order</button>
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
