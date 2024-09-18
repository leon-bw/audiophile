import React from "react";
import "./QuantityPicker.scss";

const QuantityPicker = ({ count, setCount }) => {
  const increment = (e) => {
    e.preventDefault();
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  };

  const decrement = (e) => {
    e.preventDefault();
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  };

  return (
    <>
      <section className="quantity">
        <button className="quantity__btn" onClick={decrement}>
          <span className="quantity__icon">-</span>
        </button>
        <input
          className="quantity__figure"
          type="number"
          value={count}
          readOnly
        />
        <button className="quantity__btn" onClick={increment}>
        <span className="quantity__icon">+</span>
        </button>
      </section>
    </>
  );
};

export default QuantityPicker;
