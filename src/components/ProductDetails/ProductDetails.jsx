import { useState, useEffect } from "react";
import React from "react";
import "./ProductDetails.scss";
import Gallery from "../Gallery/Gallery";

const ProductDetails = ({
  id,
  name,
  image,
  newProduct,
  price,
  description,
  features,
  includes,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Image prop:", image);
  }, [image]);

  const increment = (e) => {
    e.preventDefault();
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  };

  const decrement = (e) => {
    e.preventDefault();
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  };

  const { mobile, tablet, desktop } = image;

  const formattedFeatures = features.split("\n").map((line, index) => (
    <>
      {line} <br key={index} />
    </>
  ));

  return (
    <section className="product-details">
      <div className="product-details__container">
        <div className="products-details__item">
          <div className="product-details__img">
            <img
              src={mobile}
              alt={`${name}`}
              className="product-details__img--mobile"
            />
            <img
              src={tablet}
              alt={`${name}`}
              className="product-details__img--tablet"
            />
            <img
              src={desktop}
              alt={`${name}`}
              className="product-details__img--desktop"
            />
          </div>
          {newProduct && <p className="product-details__new">new product</p>}
          <h2 className="product-details__name">{name}</h2>
          <p className="product-details__description">{description}</p>
          <p className="product-details__price">$ {price}</p>
          <form className="product-details__cart">
            <button
              className="product-details__cart--decrease"
              onClick={decrement}
            >
              -
            </button>
            <input
              className="product-details__cart--quantity"
              type="number"
              value={count}
              readOnly
            />
            <button
              className="product-details__cart--increase"
              onClick={increment}
            >
              +
            </button>
            <button className="product-details__cart--add">add to cart</button>
          </form>
          <h3 className="product-details__heading">Features</h3>
          <p className="product-details__features">{formattedFeatures}</p>
          <h3 className="product-details__heading">In the box</h3>
          <ul className="product-details__box-list">
            {includes &&
              includes.map((product) => {
                return (
                  <li className="product-details__box-item" key={product.id}>
                    <span className="product-details__box-item--content">
                      {product.quantity}x{" "}
                    </span>
                    {product.item}
                  </li>
                );
              })}
          </ul>
          {/* <Gallery /> */}
          {/* Others Component */}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
