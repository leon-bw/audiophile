import React from 'react'
import "./Order.scss"

const Order = () => {
  return (
    <section className="order">
        <div className="order__container">
            <div className="order__header">
            <div className="order__check"><img src="" alt="" className="order__icon" /></div>
            <h5 className="order___title">Thank you <br/>for your order</h5>
            <p className="order__text">You will receive an email confirmation shortly.</p>
            </div>
            <div className="order__footer">
            <div className="order__summary">
                <div className="order__items">
                Headphone and Speakers
                </div>
                <div className="order__total">
                <h6 className="order__total-heading">grand total</h6>
                <p className="order__total-figure">{cartContents.length
            ? `$ ${(calcTotal() + 50).toLocaleString()}`
            : `$ 0`}</p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Order