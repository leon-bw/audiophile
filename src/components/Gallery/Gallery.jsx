import "./Gallery.scss";
import React from "react";

const Gallery = ({ gallery, name }) => {
  const { first, second, third } = gallery;

  return (
    <section className="gallery">
      <div className="gallery__container">
        <div className="gallery__small-img">
          <img
            src={`.${first.mobile}`}
            alt={`${name}`}
            className="gallery__img--mobile"
          />
          <img
            src={`.${first.tablet}`}
            alt={`${name}`}
            className="gallery__img--tablet"
          />
          <img
            src={`.${first.desktop}`}
            alt={`${name}`}
            className="gallery__img--desktop"
          />
          <img
            src={`.${second.mobile}`}
            alt={`${name}`}
            className="gallery__img--mobile"
          />
          <img
            src={`.${second.tablet}`}
            alt={`${name}`}
            className="gallery__img--tablet"
          />
          <img
            src={`.${second.desktop}`}
            alt={`${name}`}
            className="gallery__img--desktop"
          />
        </div>
        <div className="gallery__large-img">
          <img
            src={`.${third.mobile}`}
            alt={`${name}`}
            className="gallery__img--mobile"
          />
          <img
            src={`.${third.tablet}`}
            alt={`${name}`}
            className="gallery__img--tablet"
          />
          <img
            src={`.${third.desktop}`}
            alt={`${name}`}
            className="gallery__img--desktop"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
