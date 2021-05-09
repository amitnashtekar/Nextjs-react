import React from "react";
import "./Product.css";
import { useStateContext } from "./StateProvider";

function Product({ id, title, price, imageurl, rating }) {
  const [state, dispatch] = useStateContext();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        item: {
          id,
          title,
          imageurl,
          price,
          rating,
        },
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>🌟 </p>;
            })}
        </div>
      </div>
      <img src={imageurl} alt="" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
