const Recommended = () => {
  return (
    <section className="recommended">
      <div className="recommended__container">
        <h3 className="recommended__heading">you may also like</h3>
        <ul className="recommended__list">
          <li className="recommended__item">
            <img src="" alt="" className="recommended__img" />
            <h3 className="recommended__product">{name}</h3>
            <button className="recommended__btn">see product</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Recommended;
