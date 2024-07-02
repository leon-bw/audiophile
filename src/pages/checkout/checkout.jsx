import { Link, useNavigate } from "react-router-dom";
import "./checkout.scss";

export default function CheckoutPage() {
  const nav = useNavigate();

  return (
    <main className="checkout">
      <button
        className="checkout__btn"
        onClick={() => {
          nav(-1);
        }}
      >
        <p>Go Back</p>
      </button>
      <form className="form">
        <h2 className="form__title">Checkout</h2>
        <section className="form__section"></section>
        <section className="form__section"></section>
        <section className="form__section"></section>
      </form>
      <section className="summary"></section>
    </main>
  );
}
