import "./productCard.scss";

export default function ProductCard({
  id,
  category,
  categoryImage,
  newProduct,
  name,
  description,
}) {
  const { mobile, tablet, desktop } = categoryImage;

  console.log(id);
  return (
    <article
      className={
        id % 2 === 0 ? "product-card" : "product-card product-card--reversed"
      }
    >
      <div className="product-card__wrapper product-card__wrapper--img">
        <img
          src={mobile}
          alt={`${category} image`}
          className="product-card__img--mobile"
        />
        <img
          src={tablet}
          alt={`${category} image`}
          className="product-card__img--tablet"
        />
        <img
          src={desktop}
          alt={`${category} image`}
          className="product-card__img--desktop"
        />
      </div>
      <div className="product-card__wrapper product-card__wrapper--content">
        {newProduct && <p className="product-card__new">NEW PRODUCT</p>}
        <h5 className="product-card__name">{name}</h5>
        <p className="product-card__description">{description}</p>
        <button className="product-card__btn">see product</button>
      </div>
    </article>
  );
}
