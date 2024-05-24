import "./Footer.scss";
import facebook from "../../assets/images/shared/desktop/icon-facebook.svg";
import twitter from "../../assets/images/shared/desktop/icon-twitter.svg";
import instagram from "../../assets/images/shared/desktop/icon-instagram.svg";
// import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__headings">
          <h3 className="footer__heading">audiophile</h3>
          <div className="footer__links">
            <div to={"/"}>
                <h4 className="footer__link">Home</h4>
            </div>
            <div to={"/Headphones"}>
                <h4 className="footer__link">Headphones</h4>
            </div>
            <div to={"/Speakers"}>
                <h4 className="footer__link">Speakers</h4>
            </div>
            <div to={"/Earphones"}>
                <h4 className="footer__link">Earphones</h4>
            </div>
          </div>
        </div>
        <p className="footer__text">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="footer__copyright">Copyright 2021. All Rights Reserved</p>
        <div className="footer__socials">
          <img src={facebook} alt="facebook icon" className="footer__icon" />
          <img src={twitter} alt="twitter icon" className="footer__icon" />
          <img src={instagram} alt="instagram icon" className="footer__icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
