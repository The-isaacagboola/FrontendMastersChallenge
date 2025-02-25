/* eslint-disable react/prop-types */
import ProductItem from "./productItem";
import "./products.css";

export default function ProductsDisplay({ products }) {
  return (
    <div className="product-container">
      {products && products.length
        ? products.map((product, id) => (
            <ProductItem product={product} key={id} />
          ))
        : null}
    </div>
  );
}
