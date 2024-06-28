import Navigation from "../../components/navigation/navigation";
import Article from "../../components/Article/Article";
import Data from "../../assets/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function details() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(Data);
  }, []);

  return (
    <>
    <section className="details">
      <Link to={"/"}>Go Back</Link>
  
    </section>
      <Navigation />
      <Article />
    </>
  );
}
