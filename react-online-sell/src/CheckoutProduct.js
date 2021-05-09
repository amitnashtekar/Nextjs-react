import React from "react";
import "./CheckoutProduct.css";
import { useStateContext } from "./StateProvider";

function CheckoutProduct({ id, imageurl, title, price, rating }) {
  const [{ basket }, dispatch] = useStateContext();
  const removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id } });
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={imageurl} alt="" />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>100</strong>
        </p>
        <div className="checoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>🌟 </p>;
            })}
        </div>
        <button onClick={(e) => removeFromBasket(id)}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
