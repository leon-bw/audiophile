import React from "react";
import { useState, useEffect } from "react";
import "./Cart.scss";
import CartItem from "../cartItem/cartItem";

const Cart = () => {
  const [cartContents, setCartContents] = useState(() => {
    const savedCart = sessionStorage.getItem("cartContents");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("cartContents", JSON.stringify(cartContents));
  }, [cartContents]);

  const calcTotal = () => {
    let sum = 0;

    cartContents.forEach((e) => {
      sum += e.quantity * e.price;
    });
    return sum;
  };

  const numOfItems = () => {
    let totalItems = 0;
    cartContents.forEach((e) => {
      totalItems += e.quantity;
    });
    return totalItems;
  };

  const handleRemoveAll = () => {
    sessionStorage.removeItem("cartContents");
    setCartContents([]);
    window.location.reload();
  };

  return (
    <section className="cart">
      <div className="cart__header">
        <h5 className="cart__title">{`Cart (${numOfItems()})`}</h5>
        {cartContents.length > 0 ? (
          <button className="cart__remove" onClick={handleRemoveAll}>
            Remove all
          </button>
        ) : (
          <button className="cart__remove cart__remove--empty">{""}</button>
        )}
      </div>
      <ul className="cart__content">
        {cartContents.length > 0 ? (
          cartContents.map((item, index) => (
            <li className="cart__content-item" key={index}>
              <CartItem
                productId={item.productId}
                quantity={item.quantity}
                price={item.price}
              />
            </li>
          ))
        ) : (
          <li className="cart__content-item cart__content-item--empty">
            There are no items in your cart
          </li>
        )}
      </ul>
      <div className="cart__footer">
        {cartContents.length > 0 ? (
          <h5 className="cart__total">{`Total: $${calcTotal()}`}</h5>
        ) : (
          <h5 className="cart__total cart___total--empty">{""}</h5>
        )}
      </div>
    </section>
  );
};

export default Cart;
