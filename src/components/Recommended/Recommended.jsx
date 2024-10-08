import "./Recommended.scss";
import myData from "../../assets/data.json";
import { useNavigate } from "react-router-dom";

const Recommended = ({ others }) => {
  const nav = useNavigate();

  const recommendedProd = (prodName) => {
    return myData.find((item) => item.slug === prodName);
  };

  const handleNav = (category, name) => {
    nav(`/${category}/${name}`);
  };

  return (
    <section className="recommended">
      <div className="recommended__container">
        <h3 className="recommended__heading">you may also like</h3>
        <ul className="recommended__list">
          {others &&
            others.map((item, index) => {
              return (
                <li className="recommended__item" key={index}>
                  <img
                    src={`.${item.image.mobile}`}
                    alt={`${item.name}`}
                    className="recommended__img recommended__img--mobile"
                  />
                  <img
                    src={`.${item.image.tablet}`}
                    alt={`${item.name}`}
                    className="recommended__img recommended__img--tablet"
                  />
                  <img
                    src={`.${item.image.desktop}`}
                    alt={`${item.name}`}
                    className="recommended__img recommended__img--desktop"
                  />
                  <h3 className="recommended__name">{item.name}</h3>
                  <button
                    className="recommended__btn"
                    onClick={() =>
                      handleNav(
                        recommendedProd(item.slug).category,
                        recommendedProd(item.slug).id
                      )
                    }
                  >
                    see product
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default Recommended;
