/* eslint-disable react/prop-types */
import { useContext } from "react";
import cancel from "../../assets/images/icon-remove-item.svg";
import { GlobalContext } from "../../context/context";
export default function CartItem({ item }) {
  const { removeFromCart } = useContext(GlobalContext);
  return (
    <div className="item-container">
      <div className="item-detail">
        <div>
          <p className="name">{item.name}</p>
          <p className="price">
            <span>{item["quantity"]}x</span>
            <span>@ ${item.price.toFixed(2)} </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </p>
        </div>
        <img
          src={cancel}
          alt="cancel button"
          onClick={() => removeFromCart(item)}
        />
      </div>
    </div>
  );
}
