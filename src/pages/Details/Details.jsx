import Navigation from "../../components/navigation/navigation";
import Article from "../../components/Article/Article";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Details.scss";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Data from "../../assets/data.json";
import { useParams } from "react-router-dom";

export default function Details() {
  const [productData, setProductData] = useState(null);
  const { headphoneId } = useParams();

  useEffect(() => {
    console.log("Fetching product with ID:", headphoneId);
    const fetchProduct = () => {
      const foundProduct = Data.find((item) => item.id === parseInt(headphoneId));
      console.log("Found product:", foundProduct);
      if (foundProduct) {
        setProductData(foundProduct);
      } else {
        console.log("product not found");
      }
    };

    fetchProduct();
  }, [headphoneId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="details">
        <div className="details__container">
          <div className="details__back-btn">
            <Link to={"/headphones"}>Go Back</Link>
          </div>
          <article className="details__product">
            <ProductDetails
              id={productData.id}
              image={productData.image}
              newProduct={productData.new}
              name={productData.name}
              description={productData.description}
              features={productData.features}
              price={productData.price}
              includes={productData.includes}
            />
          </article>
        </div>
      </section>
      <Navigation />
      <Article />
    </>
  );
}
