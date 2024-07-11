import "./header.scss";
import burgerIcon from "../../assets/images/shared/tablet/icon-hamburger.svg";
import logo from "../../assets/images/shared/desktop/logo.svg";
import cartIcon from "../../assets/images/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "../navigation/navigation";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="header">
      <section className="header__container">
        <img
          src={burgerIcon}
          alt="Burger menu"
          className="header__burger"
          onClick={toggleNav}
        />
        {showNav && (
          <section className="header__dropdown">
            <div className="header__dropdown-container">
              <Navigation setShowNav={setShowNav} />
            </div>
          </section>
        )}
        <Link to={"/"}>
          <img src={logo} alt="Audiophile logo" className="header__logo" />
        </Link>
        <div className="header__nav">
          <Link to={"/"} className="header__nav-link">
            <p className="header__nav-text">HOME</p>
          </Link>
          <Link to={"/headphones"} className="header__nav-link">
            <p className="header__nav-text">HEADPHONES</p>
          </Link>
          <Link to={"/speakers"} className="header__nav-link">
            <p className="header__nav-text">SPEAKERS</p>
          </Link>
          <Link to={"/earphones"} className="header__nav-link">
            <p className="header__nav-text">EARPHONES</p>
          </Link>
        </div>
        <Link to={"/checkout"} className="header__cart">
          <img src={cartIcon} alt="Shopping cart" />
        </Link>
      </section>
    </header>
  );
}
