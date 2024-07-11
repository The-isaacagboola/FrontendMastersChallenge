import { useState } from "react";
import "./App.css";
import ProductsDisplay from "./components/ProductDisplay";
import { productData } from "./data.js";
import { useEffect } from "react";
import Cart from "./components/cart/cart";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([...productData]);
  }, []);

  return (
    <div className="bg">
      <div className="project">
        <div className="product-section">
          <h1>Desserts</h1>
          <ProductsDisplay products={products} />
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
