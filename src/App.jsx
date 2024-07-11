import { useState } from "react";
import "./App.css";
import ProductsDisplay from "./components/ProductDisplay";
import "./data.json";
import { useEffect } from "react";
import Cart from "./components/cart/cart";
import GlobalContext from "./context/context";

function App() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    const response = await fetch("./src/data.json");
    const json = await response.json();
    setProducts(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

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

/*
 Waffle with Berries Waffle 6.50 Add to Cart Vanilla Bean Crème Brûlée Crème Brûlée 7.00 Add to Cart Macaron Mix of Five Macaron 8.00 Add to Cart Classic Tiramisu Tiramisu 5.50 Add to Cart Pistachio Baklava Baklava 4.00 Add to Cart Lemon Meringue Pie Pie 5.00 Add to Cart Red Velvet Cake Cake 4.50 Add to Cart Salted Caramel Brownie Brownie 4.50 Add to Cart Vanilla Panna Cotta Panna Cotta 6.50 Add to Cart Your Cart () Your added items will appear here
Challenge by Frontend Mentor. Coded by Your Name Here.


*/
