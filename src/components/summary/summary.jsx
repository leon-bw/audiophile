import { useEffect, useState } from "react";
import "./summary.scss";
import CartItem from "../cartItem/cartItem";

export default function Summary({ validateForm }) {
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

  return (
    <section className="summary">
      <h4 className="summary__title">summary</h4>
      <div className="summary__list">
        {cartContents.length &&
          cartContents.map((item, index) => (
            <CartItem
              key={index}
              productId={item.productId}
              quantity={item.quantity}
              cartContents={cartContents}
              setCartContents={setCartContents}
              price={item.price}
            />
          ))}
      </div>
      <div className="summary__subtotal">
        <div className="summary__content">
          <p className="summary__text">total</p>
          <p className="summary__cost">
            {cartContents.length ? `$ ${calcTotal().toLocaleString()}` : `$ 0`}
          </p>
        </div>
        <div className="summary__content">
          <p className="summary__text">shipping</p>
          <p className="summary__cost">
            {cartContents.length ? `$ 50` : `$ 0`}
          </p>
        </div>
        <div className="summary__content">
          <p className="summary__text">vat (included)</p>
          <p className="summary__cost">
            {cartContents.length
              ? `$ ${Math.floor(calcTotal() * 0.2).toLocaleString()}`
              : `$ 0`}
          </p>
        </div>
      </div>
      <div className="summary__grand-total">
        <p className="summary__text">grand total</p>
        <p className="summary__cost summary__cost--grand-total">
          {cartContents.length
            ? `$ ${(calcTotal() + 50).toLocaleString()}`
            : `$ 0`}
        </p>
      </div>
      <button type="submit" form="checkout" className="summary__btn">
        continue & pay
      </button>
    </section>
  );
}
