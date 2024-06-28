import Navigation from "../../components/navigation/navigation";
import Article from "../../components/Article/Article";
import Data from "../../assets/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Details.scss";

export default function details() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(Data);
  }, []);

  return (
    <>
      <section className="details">
        <div className="details___container">
          <div className="details__back-btn">
          <Link to={"/"}>Go Back</Link>
          </div>
        </div>
      </section>
      <Navigation />
      <Article />
    </>
  );
}
