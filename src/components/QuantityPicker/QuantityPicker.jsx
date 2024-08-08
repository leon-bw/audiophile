import React, { useState } from "react";
import "./QuantityPicker.scss";


const QuantityPicker = ({ count, setCount}) => {

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
      <button className="quantity__decrease" onClick={decrement}>
        -
      </button>
      <input
        className="quantity__figure"
        type="number"
        value={count}
        readOnly
      />
      <button className="quantity__increase" onClick={increment}>
        +
      </button>
    </>
  );
};

export default QuantityPicker;
