import { Link, useNavigate } from "react-router-dom";
import "./checkout.scss";
import Form from "../../components/form/form";
import Summary from "../../components/summary/summary";

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
      <section className="checkout__content">
        <Form />
        <Summary />
      </section>
    </main>
  );
}
