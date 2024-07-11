import "./Gallery.scss";
import React from "react";

const Gallery = ({ gallery }) => {
  const { first, second, third } = gallery;

  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__small-img">
          <img
            src={first.mobile}
            alt={`${name}`}
            className="gallery__img-one--mobile"
          />
          <img
            src={first.tablet}
            alt={`${name}`}
            className="gallery__img-one--tablet"
          />
          <img
            src={first.desktop}
            alt={`${name}`}
            className="gallery__img-one--desktop"
          />
          <img
            src={second.mobile}
            alt={`${name}`}
            className="gallery__img-two--mobile"
          />
          <img
            src={second.tablet}
            alt={`${name}`}
            className="gallery__img-two--tablet"
          />
          <img
            src={second.desktop}
            alt={`${name}`}
            className="gallery__img-two--desktop"
          />
        </div>
        <div className="gallery__large-img">
          <img
            src={third.mobile}
            alt={`${name}`}
            className="gallery__img-three--mobile"
          />
          <img
            src={third.tablet}
            alt={`${name}`}
            className="gallery__img-three--tablet"
          />
          <img
            src={third.desktop}
            alt={`${name}`}
            className="gallery__img-three--desktop"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
