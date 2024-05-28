import earphones from "../../assets/images/shared/desktop/image-category-thumbnail-earphones.png";
import speaker from "../../assets/images/shared/desktop/image-category-thumbnail-speakers.png";
import headphones from "../../assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import arrowIcon from "../../assets/images/shared/desktop/icon-arrow-right.svg";
import "./navigation.scss";

export default function Navigation() {
  return (
    <section className="nav">
      <div className="nav__wrapper">
        <img src={earphones} alt="Earphones" className="nav__img" />
        <div className="nav__content">
          <h6 className="nav__name">earphones</h6>
          <div className="nav__link">
            <p className="nav__text">shop</p>
            <img src={arrowIcon} alt="Arrow icon" className="nav__icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
