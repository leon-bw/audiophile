import "./Article.scss";
import bestGear from "../../assets/images/shared/mobile/image-best-gear.jpg";

const Article = () => {
  return (
    <article className="article">
      <div className="article__container">
        <img
          src={bestGear}
          alt="man with headphones on holding right ear cup"
          className="article__img"
        />
        <div className="article__content">
          <h3 className="article__heading">
            Bringing you the{" "}
            <span className="article__heading-accent">best</span> audio gear{" "}
          </h3>
          <p className="article__body">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Article;
