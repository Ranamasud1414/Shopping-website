import React, { createContext, useState } from "react";
import { PRODUCTS } from "../product";
import swal from "sweetalert";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, SetCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    swal({
      title: "Great!",
      text: "Item is in the Cart",
      icon: "success",
      buttons: false,
    });
    setTimeout(() => {
      swal.close();
    }, 1300);
    SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    SetCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));

        totalAmount += cartItems[item] * Number.parseInt(itemInfo.price.replace(/\,/g, ""));
      }
    }
    return totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const contextValue = { addToCart, removeFromCart, cartItems, updateCartItemCount, getTotalCartAmount };
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
