/* eslint-disable react/prop-types */
import { useContext } from "react";
import addtocart from "../../assets/images/icon-add-to-cart.svg";

import { GlobalContext } from "../../context/context";

export default function ProductItem({ product }) {
  const image = product.image.desktop;

  const { addToCart, checkPresent, incrementQuantity, decrementQuantity } =
    useContext(GlobalContext);

  return (
    <div className="product">
      <div className="image">
        <img src={`../../../src/${image}`} alt="product image" />
        <button
          className={checkPresent(product) ? "present" : null}
          onClick={() => {
            addToCart(product);
          }}
        >
          {checkPresent(product) ? (
            <>
              <div
                className="qty-btns"
                onClick={() => incrementQuantity(product)}
              >
                <span>+</span>
              </div>
              <span>{product["quantity"]}</span>
              <div
                className="qty-btns"
                onClick={() => decrementQuantity(product)}
              >
                <span>-</span>
              </div>
            </>
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
