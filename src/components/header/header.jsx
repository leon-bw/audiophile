import "./header.scss";
import burgerIcon from "../../assets/images/shared/tablet/icon-hamburger.svg";
import logo from "../../assets/images/shared/desktop/logo.svg";
import cartIcon from "../../assets/images/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <img src={burgerIcon} alt="Burger menu" className="header__burger" />
        <Link to={"/"}>
          <img src={logo} alt="Audiophile logo" className="header__logo" />
        </Link>
        <div className="header__nav">
          <Link to={"/"} className="header__nav-link">
            <p className="header__nav-text">HOME</p>
          </Link>
          <Link to={"/"} className="header__nav-link">
            <p className="header__nav-text">HEADPHONES</p>
          </Link>
          <Link to={"/"} className="header__nav-link">
            <p className="header__nav-text">SPEAKERS</p>
          </Link>
          <Link to={"/"} className="header__nav-link">
            <p className="header__nav-text">EARPHONES</p>
          </Link>
        </div>
        <img src={cartIcon} alt="Shopping cart" className="header__cart" />
      </section>
    </header>
  );
}
