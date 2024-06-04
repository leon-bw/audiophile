import Hero from "../../components/hero/hero";
import Navigation from "../../components/navigation/navigation";
import "./homePage.scss";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Navigation />
      <section className="zx9">
        <div className="zx9__container">
          <div className="zx9__img"></div>
          <h2 className="zx9__title">zx9 speaker</h2>
          <p className="zx9__text">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="zx9__btn">see product</button>
        </div>
      </section>
    </>
  );
}
