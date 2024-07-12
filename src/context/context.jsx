/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [cartList, setCartList] = useState([]);

  function checkPresent(product) {
    const index = cartList.findIndex((item) => item.name === product.name);
    if (index !== -1) return true;
    return false;
  }

  function addToCart(product) {
    const copyCartList = [...cartList];

    const index = copyCartList.findIndex((item) => item.name === product.name);

    if (index === -1) {
      product["quantity"] = 1;
      copyCartList.push(product);
      console.log(cartList);
    }

    setCartList(copyCartList);
  }

  function incrementQuantity(product) {
    const index = cartList.findIndex((item) => item.name === product.name);
    const item = cartList[index];

    item["quantity"]++;
  }
  function decrementQuantity(product) {
    const index = cartList.findIndex((item) => item.name === product.name);
    const item = cartList[index];

    if (item["quantity"] !== 1) {
      item["quantity"] = item["quantity"] - 1;
    } else {
      return;
    }
  }

  function removeFromCart(product) {
    // const index = cartList.findIndex(item => item.name ===product.name)
    setCartList(cartList.filter((item) => item.name !== product.name));
  }

  return (
    <GlobalContext.Provider
      value={{
        cartList,
        setCartList,
        addToCart,
        checkPresent,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
