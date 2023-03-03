import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="card card2" style={{ width: "18rem" }}>
      <div className="row">
        <img src={productImage} className="card-img-top productimg " alt="..." />
      </div>

      <div className="card-body align-self-end row">
        <h5 className="card-title">{productName}</h5>
        <h4 className="card-title">Price: ₹{price}/-</h4>
        <button href="#" className="btn btn-light align-self-end " onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
