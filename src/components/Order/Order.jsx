import React from "react";
import "./Order.scss";
import tick from "../../assets/images/checkout/icon-order-confirmation.svg";
import CartItem from "../cartItem/cartItem";

const Order = ({ cartContents }) => {
  const calcTotal = () => {
    let sum = 0;

    cartContents.forEach((e) => {
      sum += e.quantity * e.price;
    });
    return sum;
  };

  const CalcQuantity = () => {
    let cartQuantity = 0;
    cartContents.forEach((item) => {
      cartQuantity += item.quantity;
    });
    return cartQuantity;
  };

  return (
    <section className="order">
      <div className="order__container">
        <div className="order__header">
          <div className="order__check">
            <img src={tick} alt="tick" className="order__icon" />
          </div>
          <h5 className="order__title">
            Thank you <br />
            for your order
          </h5>
          <p className="order__text">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="order__footer">
          <div className="order__summary">
            <div className="order__items">
              <div className="order__items">
                {cartContents.length > 1
                  ? cartContents.slice(0, 1).map((item, index) => (
                      <div
                        className="order__content order__content--multiple"
                        key={index}
                      >
                        <CartItem
                          productId={item.productId}
                          price={item.price.toLocaleString()}
                          quantity={item.quantity}
                        />
                        <div className="order__quantity">
                          <div className="order__divider"></div>
                          {` and ${
                            CalcQuantity() - item.quantity
                          } other item(s)`}
                        </div>
                      </div>
                    ))
                  : cartContents.map((item, index) => (
                      <div className="order__content" key={index}>
                        <CartItem
                          productId={item.productId}
                          price={item.price.toLocaleString()}
                          quantity={item.quantity}
                        />
                      </div>
                    ))}
              </div>
            </div>
            <div className="order__total">
              <h6 className="order__total-heading">grand total</h6>
              <p className="order__total-figure">
                {cartContents.length
                  ? `$ ${(calcTotal() + 50).toLocaleString()}`
                  : `$ 0`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
