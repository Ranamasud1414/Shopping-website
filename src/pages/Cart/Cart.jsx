import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./Cart-item";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);
  let totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div style={{ color: "white" }}>
        <h1>Your Cart Item</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={index} />;
          }
        })}
      </div>

      <div className="checkout">
        <p style={{ fontSize: "20px", color: "white" }}>
          <b> SubTotal: ₹ {totalAmount}</b>
        </p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>CheckOut</button>
      </div>
    </div>
  );
};

export default Cart;
