import { useState } from "react";
import "./App.css";
import ProductsDisplay from "./components/ProductDisplay";
import { productData } from "./data.js";
import { useEffect } from "react";
import Cart from "./components/cart/cart";
import GlobalContext from "./context/context";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([...productData]);
  }, []);

  console.log(products);
  return (
    <GlobalContext>
      <div className="bg">
        <div className="project">
          <div className="product-section">
            <h1>Desserts</h1>
            <ProductsDisplay products={products} />
          </div>

          <Cart />
        </div>
      </div>
    </GlobalContext>
  );
}

export default App;
