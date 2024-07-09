import "./Gallery.scss";

const Gallery = ({ image }) => {
  const { first, second, third } = image;

  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__small-img">
          <img src={first.mobile} alt="" className="gallery__img-one--mobile" />
          <img src={first.tablet} alt="" className="gallery__img-one--tablet" />
          <img
            src={first.desktop}
            alt=""
            className="gallery__img-one--desktop"
          />
          <img
            src={second.mobile}
            alt=""
            className="gallery__img-two--mobile"
          />
          <img
            src={second.tablet}
            alt=""
            className="gallery__img-two--tablet"
          />
          <img
            src={second.desktop}
            alt=""
            className="gallery__img-two--desktop"
          />
        </div>
        <div className="gallery__large-img">
          <img
            src={third.mobile}
            alt=""
            className="gallery__img-three--mobile"
          />
          <img
            src={third.tablet}
            alt=""
            className="gallery__img-three--tablet"
          />
          <img
            src={third.desktop}
            alt=""
            className="gallery__img-three--desktop"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
