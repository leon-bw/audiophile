import { useEffect, useState } from "react";
import "./summary.scss";

export default function Summary() {
  const [cartContents, setCartContents] = useState([
    { id: "3", quantity: 1 },
    { id: "2", quantity: 2 },
    { id: "1", quantity: 1 },
  ]);

  // useEffect to setCartContents from session storage

  return (
    <section className="summary">
      <h4 className="summary__title">summary</h4>
      <div className="summary__list"></div>
      <div className="summary__subtotal">
        <div className="summary__content">
          <p className="summary__text">total</p>
          <p className="summary__cost">
            {cartContents.length ? `$ money` : `$ 0`}
          </p>
        </div>
        <div className="summary__content">
          <p className="summary__text">shipping</p>
          <p className="summary__cost">
            {cartContents.length ? `$ money` : `$ 0`}
          </p>
        </div>
        <div className="summary__content">
          <p className="summary__text">vat (included)</p>
          <p className="summary__cost">
            {cartContents.length ? `$ money` : `$ 0`}
          </p>
        </div>
      </div>
      <div className="summary__grand-total">
        <p className="summary__text">grand total</p>
        <p className="summary__cost summary__cost--grand-total">
          {cartContents.length ? `$ money` : `$ 0`}
        </p>
      </div>
      <button type="submit" form="checkout" className="summary__btn">
        continue & pay
      </button>
    </section>
  );
}