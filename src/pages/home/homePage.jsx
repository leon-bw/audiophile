import Article from "../../components/Article/Article";
import Hero from "../../components/hero/hero";
import Navigation from "../../components/navigation/navigation";
import "./homePage.scss";
import zx9 from "../../assets/images/home/desktop/image-speaker-zx9.png";
import yx1 from "../../assets/images/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Navigation />
      <section className="zx9">
        <div className="zx9__container">
          <img src={zx9} alt="ZX9 Speaker" className="zx9__img" />
          <h2 className="zx9__title">zx9 speaker</h2>
          <p className="zx9__text">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="zx9__btn">see product</button>
        </div>
      </section>
      <section className="zx7">
        <div className="zx7__container">
          <h2 className="zx7__title">zx7 speaker</h2>
          <Link to={"/Speakers"}>
            <div className="btn">see product</div>
          </Link>
        </div>
      </section>
      <section className="yx1">
        <div className="yx1__container">
          <img src={yx1} alt="YX1 Earphones" className="yx1__img" />
          <div className="yx1__content">
            <h2 className="yx1__title">yx1 Earphones</h2>
            <Link to={"/Earphones"}>
              <div className="btn">see product</div>
            </Link>
          </div>
        </div>
      </section>
      <Article />
    </>
  );
}
