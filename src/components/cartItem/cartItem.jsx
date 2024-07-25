import myData from "../../assets/data.json";
import "./cartItem.scss";

export default function CartItem({ productId, quantity, price }) {
  const filteredItem = myData.find((item) => item.id === productId);

  return (
    <article className="cart-item">
      <img
        src={filteredItem.image.mobile}
        alt="image"
        className="cart-item__img"
      />
      <div className="cart-item__details">
        <p className="cart-item__name">{filteredItem.name}</p>
        <p className="cart-item__price">{`$ ${price}`}</p>
      </div>
      <div className="card-item__wrapper">
        <p className="cart-item__quantity">{`x${quantity}`}</p>
        <p className="cart-item__spacer">X</p>
      </div>
    </article>
  );
}
