import { Link } from "react-router-dom";
import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__divider"></div>
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__overline">new product</p>
          <h1 className="hero__title">XX99 Mark II Headphones</h1>
          <p className="hero__text">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to={`/headphones`}>
            <button className="hero__btn">see product</button>
          </Link>
        </div>
      </div>
      <div className="hero__img"></div>
    </section>
  );
}
