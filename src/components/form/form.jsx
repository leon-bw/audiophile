import { useState } from "react";
import "./form.scss";

export default function Form() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    city: "",
    country: "",
    payMethod: "eMoney",
    eNum: "",
    ePin: "",
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
                Phone Number
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
          <div className="form__container">
            <div className="form__wrapper">
              <label htmlFor="address" className="form__label">
                Your Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={changeHandler}
                className="form__input"
                placeholder="Type here..."
              />
            </div>
            <div className="form__wrapper">
              <label htmlFor="postcode" className="form__label">
                Postcode
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={changeHandler}
                className="form__input"
                placeholder="Type here..."
              />
            </div>
            <div className="form__wrapper">
              <label htmlFor="city" className="form__label">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={changeHandler}
                className="form__input"
                placeholder="Type here..."
              />
            </div>
            <div className="form__wrapper">
              <label htmlFor="country" className="form__label">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={changeHandler}
                className="form__input"
                placeholder="Type here..."
              />
            </div>
          </div>
        </section>
        <section className="form__section">
          <p className="form__subheader">payment details</p>
          <div className="form__container">
            <div className="form__wrapper form__wrapper--radio">
              <p className="form__label">Payment Method</p>
              <div className="form__radio-option-wrapper">
                <div className="form__radio-option">
                  <label htmlFor="payMethod1" className="form__label">
                    e-Money
                  </label>
                  <input
                    type="radio"
                    id="payMethod1"
                    name="payMethod"
                    value="eMoney"
                    onChange={changeHandler}
                    checked={formData.payMethod === "eMoney"}
                    className="form__input-radio"
                  />
                </div>
                <div className="form__radio-option">
                  <label htmlFor="payMethod2" className="form__label">
                    Cash on Delivery
                  </label>
                  <input
                    type="radio"
                    id="payMethod2"
                    name="payMethod"
                    value="cash"
                    onChange={changeHandler}
                    checked={formData.payMethod === "cash"}
                    className="form__input-radio"
                  />
                </div>
              </div>
            </div>
            <div className="form__wrapper">
              <label htmlFor="eNum" className="form__label">
                e-Money Number
              </label>
              <input
                type="text"
                id="eNum"
                name="eNum"
                value={formData.eNum}
                onChange={changeHandler}
                className="form__input"
                placeholder="Type here..."
              />
            </div>
            <div className="form__wrapper">
              <label htmlFor="ePin" className="form__label">
                e-Money PIN
              </label>
              <input
                type="text"
                id="ePin"
                name="ePin"
                value={formData.ePin}
                onChange={changeHandler}
                className="form__input"
                placeholder="Type here..."
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
