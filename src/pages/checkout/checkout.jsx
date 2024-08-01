import { Link, useNavigate } from "react-router-dom";
import "./checkout.scss";
import Form from "../../components/form/form";
import Summary from "../../components/summary/summary";

export default function CheckoutPage() {
  const nav = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.userName) errors.userName = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.postcode) errors.postcode = "Postcode is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.eNum) errors.eNum = "e-Money Number is required";
    if (!formData.ePin) errors.ePin = "e-Money PIN is required";

    isValid = Object.keys(errors).length === 0;

    setFormErrors(errors);
    return isValid;
  };

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
        <Form formErrors={formErrors} />
        <Summary validateForm={validateForm} />
      </section>
    </main>
  );
}
