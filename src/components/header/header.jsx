import "./header.scss";
import burgerIcon from "../../assets/images/shared/tablet/icon-hamburger.svg";
import logo from "../../assets/images/shared/desktop/logo.svg";
import cartIcon from "../../assets/images/shared/desktop/icon-cart.svg";

export default function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <img src={burgerIcon} alt="Burger menu" className="header__burger" />
        <img src={logo} alt="Audiophile logo" className="header__logo" />
        <img src={cartIcon} alt="Shopping cart" className="header__cart" />
      </section>
    </header>
  );
}
