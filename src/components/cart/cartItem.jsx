/* eslint-disable react/prop-types */
import cancel from "../../assets/images/icon-remove-item.svg";
export default function CartItem({ item }) {
  return (
    <div className="item-container">
      <div className="item-detail">
        <div>
          <p className="name">{item.name}</p>
          <p className="price">
            <span>{/*item.quantity*/} 1x</span>
            <span>@{/*item.price*/} $5.50</span>
            <span>{/*item.price* item.quantity*/}$5.50</span>
          </p>
        </div>
        <img src={cancel} alt="cancel button" />
      </div>
    </div>
  );
}
