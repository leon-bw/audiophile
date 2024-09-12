import { useEffect, useState } from "react";
import React from "react";
import "./ProductDetails.scss";
import Gallery from "../Gallery/Gallery";
import Recommended from "../Recommended/Recommended";
import QuantityPicker from "../QuantityPicker/QuantityPicker";

const ProductDetails = ({
  id,
  name,
  image,
  newProduct,
  price,
  description,
  features,
  includes,
  gallery,
  others,
}) => {
  const [count, setCount] = useState(0);

  const [cartContents, setCartContents] = useState(() => {
    const savedCart = sessionStorage.getItem("cartContents");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("cartContents", JSON.stringify(cartContents));
  }, [cartContents]);

  const addToCart = (newItem) => {
    setCartContents((cartContents) => {
      const existingItemIndex = cartContents.findIndex((item) => {
        return item.productId === newItem.productId;
      });
      if (existingItemIndex !== -1) {
        const updatedCartContents = [...cartContents];
        updatedCartContents[existingItemIndex].quantity += newItem.quantity; //strictMode causes the quantity to increase by newItem.quantity twice
        return updatedCartContents;
      } else {
        return [...cartContents, newItem];
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (count > 0) {
      addToCart({ productId: id, quantity: count, price: price });
    }
    window.location.reload();
    window.scrollTo(0, 0);
  };

  const { mobile, tablet, desktop } = image;

  const formattedFeatures = features.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line} <br />
    </React.Fragment>
  ));

  return (
    <section className="product-details">
      <div className="product-details__container">
        <div className="product-details__item">
          <div className="product-details__listing">
            <div className="product-details__img">
              <img
                src={`.${mobile}`}
                alt={`${name}`}
                className="product-details__img--mobile"
              />
              <img
                src={`.${tablet}`}
                alt={`${name}`}
                className="product-details__img--tablet"
              />
              <img
                src={`.${desktop}`}
                alt={`${name}`}
                className="product-details__img--desktop"
              />
            </div>
            <div className="product-details__content">
              {newProduct && (
                <p className="product-details__new">new product</p>
              )}
              <h2 className="product-details__name">{name}</h2>
              <p className="product-details__description">{description}</p>
              <p className="product-details__price">
                $ {price.toLocaleString()}
              </p>
              <form className="product-details__cart">
                <QuantityPicker count={count} setCount={setCount} />
                <button
                  className="product-details__cart--add"
                  onClick={handleClick}
                >
                  add to cart
                </button>
              </form>
            </div>
          </div>
          <div className="product-details__main">
            <div className="product-details__text">
              <h3 className="product-details__heading">Features</h3>
              <p className="product-details__features">{formattedFeatures}</p>
            </div>
            <div className="product-details__box">
              <h3 className="product-details__heading">In the box</h3>
              <ul className="product-details__box-list">
                {includes &&
                  includes.map((product, index) => {
                    return (
                      <li className="product-details__box-item" key={index}>
                        <span className="product-details__box-item--content">
                          {product.quantity}x{" "}
                        </span>
                        {product.item}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <Gallery gallery={gallery} name={name} />
          <Recommended others={others} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
