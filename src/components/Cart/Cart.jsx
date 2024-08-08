import React from "react";
import { useState, useEffect } from "react";
import "./Cart.scss";
import CartItem from "../cartItem/cartItem";
// import QuantityPicker from "../QuantityPicker/QuantityPicker";

const Cart = () => {
//   const [count, setCount] = useState(0);
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

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (count > 0) {
  //     addToCart({ productId: id, quantity: count, price: price });
  //   }
  // };

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
                price={item.price.toLocaleString()}
                quantity={item.quantity}
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
          <div className="cart__total">
            <h5 className="cart__total-text">{`Total: `}</h5>
            <h5 className="cart__total-cost">{`$${calcTotal().toLocaleString()}`}</h5>
          </div>
        ) : (
          <h5 className="cart__total cart__total--empty">{""}</h5>
        )}
      </div>
    </section>
  );
};

export default Cart;
