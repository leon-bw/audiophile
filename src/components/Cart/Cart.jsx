import React from 'react'
import "./Cart.scss";

const Cart = () => {
  return (
    <section className="cart">
        <div className="cart__header">
        <h5 className="cart__title">{`cart ${(0)}`}</h5>
        <button className="cart__remove">Remove all</button>
        </div>
        <div className="cart__content">
            
        </div>
    </section>
  )
}

export default Cart;