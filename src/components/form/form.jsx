import { useState } from "react";
import "./form.scss";

export default function Form() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevformData) => ({ ...prevformData, [name]: value }));
  };

  return (
    <>
      <form className="form">
        <h4 className="form__title">Checkout</h4>
        <section className="form__section">
          <p className="form__subheader">billing details</p>
          <div className="form__container">
            <div className="form__wrapper">
              <label htmlFor="userName" className="form__label">
                Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={changeHandler}
                className="form__input"
                placeholder="Type here..."
              />
            </div>
            <div className="form__wrapper">
              <label htmlFor="email" className="form__label">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                className="form__input"
                placeholder="Type here..."
              />
            </div>
            <div className="form__wrapper">
              <label htmlFor="phone" className="form__label">
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={changeHandler}
                className="form__input"
                placeholder="Type here..."
              />
            </div>
          </div>
        </section>
        <section className="form__section">
          <p className="form__subheader">shipping info</p>
        </section>
        <section className="form__section">
          <p className="form__subheader">payment details</p>
        </section>
      </form>
    </>
  );
}
