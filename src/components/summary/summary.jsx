import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./summary.scss";
import CartItem from "../cartItem/cartItem";
import Modal from "../Modal/Modal";
import Order from "../Order/Order";

export default function Summary({ validateForm }) {
  const [orderOpen, setOrderOpen] = useState(false);
  const navigate = useNavigate();

  const handleOrderClick = () => {
    setOrderOpen(false);
  };

  const handleOrderSubmit = () => {
    setOrderOpen(false);
    sessionStorage.removeItem("cartContents");
    navigate("/");
  };

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

  const handleCheckoutClick = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    } else {
      setOrderOpen(true);
    }
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
      <button type="button" form="checkout" className="summary__btn" onClick={handleCheckoutClick}>
        continue & pay
      </button>
      {orderOpen && (
        <Modal
          onSubmit={handleOrderSubmit}
          close={handleOrderClick}
          content={<Order cartContents={cartContents} />}
          children={`back to home`}
        />
      )}
    </section>
  );
}
