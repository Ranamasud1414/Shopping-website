import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="card mb-5 justify-content-center d-flex w-80">
      <div className="mt-5">
        <img src={productImage} className="card-img-top cartitemimg" alt={productName} />
      </div>
      <div className="card-body">
        <h5 className="card-title w-70 h5">{productName}</h5>
        <h4 className="card-title">Price :₹{price}</h4>

        <button onClick={() => removeFromCart(id)} className="btn btn-danger">
          <i class="fa-sharp fa-solid fa-minus"></i>
        </button>
        <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
        <button onClick={() => addToCart(id)} className="btn btn-success">
          <i class="fa-sharp fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
