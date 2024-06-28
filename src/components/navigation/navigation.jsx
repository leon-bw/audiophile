import earphones from "../../assets/images/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../assets/images/shared/desktop/image-category-thumbnail-speakers.png";
import headphones from "../../assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import arrowIcon from "../../assets/images/shared/desktop/icon-arrow-right.svg";
import "./navigation.scss";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <section className="nav">
      <Link to={"/headphones"} className="nav__wrapper">
        <img src={headphones} alt="Headphones" className="nav__img" />
        <div className="nav__content">
          <h6 className="nav__name">headphones</h6>
          <div className="nav__link">
            <p className="nav__text">shop</p>
            <img src={arrowIcon} alt="Arrow icon" className="nav__icon" />
          </div>
        </div>
      </Link>
      <Link to={"/speakers"} className="nav__wrapper">
        <img src={speakers} alt="Speakers" className="nav__img" />
        <div className="nav__content">
          <h6 className="nav__name">speakers</h6>
          <div className="nav__link">
            <p className="nav__text">shop</p>
            <img src={arrowIcon} alt="Arrow icon" className="nav__icon" />
          </div>
        </div>
      </Link>
      <Link to={"/earphones"} className="nav__wrapper">
        <img src={earphones} alt="Earphones" className="nav__img" />
        <div className="nav__content">
          <h6 className="nav__name">earphones</h6>
          <div className="nav__link">
            <p className="nav__text">shop</p>
            <img src={arrowIcon} alt="Arrow icon" className="nav__icon" />
          </div>
        </div>
      </Link>
    </section>
  );
}
