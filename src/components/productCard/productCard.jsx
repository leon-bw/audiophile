import "./productCard.scss";

export default function ProductCard() {
  return (
    <article className="product-card">
      <div className="wrapper"></div>
      <div className="wrapper">
        <p className="product-card__new"></p>
        <p className="product-card__text"></p>
      </div>
    </article>
  );
}
