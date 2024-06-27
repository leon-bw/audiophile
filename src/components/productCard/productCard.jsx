import "./productCard.scss";

export default function ProductCard({
  category,
  categoryImage,
  newProduct,
  name,
  description,
}) {
  const { mobile, tablet, desktop } = categoryImage;

  return (
    <article className="product-card">
      <div className="product-card__wrapper">
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
      <div className="product-card__wrapper">
        {newProduct && <p className="product-card__new">NEW PRODUCT</p>}
        <h5 className="product-card__name">{name}</h5>
        <p className="product-card__description">{description}</p>
      </div>
    </article>
  );
}
