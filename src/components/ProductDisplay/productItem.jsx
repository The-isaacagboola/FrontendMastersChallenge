/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import addtocart from "../../assets/images/icon-add-to-cart.svg";
import addBtn from "../../assets/images/icon-increment-quantity.svg";
import minusBtn from "../../assets/images/icon-decrement-quantity.svg";
import { GlobalContext } from "../../context/context";

export default function ProductItem({ product }) {
  const image = product.image.desktop;

  const { addToCart, checkPresent, cartList } = useContext(GlobalContext);

  const value = cartList[product];

  //check if cartList has the product and a quantity; if not add a quantity property

  //make 2 methods in the context page ; Increment quantity and decrement quantity
  //it takes in the product as param and increase or decrease its quantity

  return (
    <div className="product">
      <div className="image">
        <img src={`./src/${image}`} alt="product image" />
        <button
          onClick={() => {
            addToCart(product);
          }}
        >
          {checkPresent(product) ? (
            <div className="present">
              <img src={addBtn} alt="" />
              <input type="number" name="quantity" value={value} />
              <img src={minusBtn} alt="" />
            </div>
          ) : (
            <>
              <img src={addtocart} alt="add to cart" />
              <p>Add to Cart</p>
            </>
          )}
        </button>
      </div>

      <div className="details">
        <p>{product.category}</p>
        <p>{product.name}</p>
        <p> ${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
