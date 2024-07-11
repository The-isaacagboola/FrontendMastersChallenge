/* eslint-disable react/prop-types */
import { useContext } from "react";
import addtocart from "../../assets/images/icon-add-to-cart.svg";
import { CartContext } from "../../context/context";

export default function ProductItem({ product }) {
  const image = product.image.desktop;

  const contextItems = useContext(CartContext);

  const [cartArray, setCartArray, handleProduct] = contextItems;

  console.log(cartArray, setCartArray);

  return (
    <div className="product">
      <div className="image">
        <img src={`./src/${image}`} alt="product image" />
        <button onClick={() => handleProduct(product)}>
          <img src={addtocart} alt="add to cart" />
          <p>Add to Cart</p>
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
