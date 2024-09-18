import "./header.scss";
import burgerIcon from "../../assets/images/shared/tablet/icon-hamburger.svg";
import logo from "../../assets/images/shared/desktop/logo.svg";
import cartIcon from "../../assets/images/shared/desktop/icon-cart.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "../navigation/navigation";
import Modal from "../Modal/Modal";
import Cart from "../Cart/Cart";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    setModalOpen(false);
    navigate("/checkout");
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const [cartContents, setCartContents] = useState(() => {
    const savedCart = sessionStorage.getItem("cartContents");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const itemCount = () => {
    let sum = 0;

    cartContents.forEach((e) => {
      sum += e.quantity;
    });
    return sum;
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
        <div className="header__cart">
          {itemCount() !== 0 && (
            <div className="header__cart-pip">
              <p className="header__cart-text">{itemCount()}</p>
            </div>
          )}
          <img
            src={cartIcon}
            alt="Shopping cart"
            className="header__cart-icon"
            onClick={() => setModalOpen(true)}
          />
          {modalOpen && (
            <Modal
              onSubmit={handleSubmit}
              close={handleClick}
              content={<Cart />}
              children={`checkout`}
            />
          )}
        </div>
      </section>
    </header>
  );
}
