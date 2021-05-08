import React from "react";
import "./Product.css";

function Product({ id, title, price, imageurl, rating }) {
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
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
