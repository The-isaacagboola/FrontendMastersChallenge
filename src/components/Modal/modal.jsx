/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./modal.css";
import { GlobalContext } from "../../context/context";
import check from "../../assets/images/icon-order-confirmed.svg";

function ItemRender({ item }) {
  return (
    <div className="summary">
      <div className="first-half">
        <img src={item.image.thumbnail} alt="food image" />
        <div className="text">
          <h4>{item.name}</h4>
          <p>
            <span>{item.quantity}x</span>
            <span>@ ${item.price.toFixed(2)}</span>
          </p>
        </div>
      </div>

      <p className="subtotal">${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
}

export default function Modal({ openModal, setOpenModal, totalPrice }) {
  const { cartList, setCartList } = useContext(GlobalContext);

  function restart() {
    setCartList([]);
    setOpenModal(false);
  }

  if (!openModal) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={check} alt="succesful" />
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>

        <div className="purchase">
          {cartList.map((item) => (
            <ItemRender key={item.name} item={item} />
          ))}
          <div className="order-total">
            <p>Order Total</p>
            <h3>${totalPrice()}</h3>
          </div>
        </div>

        <button className="restart" onClick={restart}>
          Start New Order
        </button>
      </div>
    </div>
  );
}
