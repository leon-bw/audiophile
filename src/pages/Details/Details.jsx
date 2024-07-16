import Navigation from "../../components/navigation/navigation";
import Article from "../../components/Article/Article";
import React, { useEffect, useState } from "react";
import "./Details.scss";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Data from "../../assets/data.json";
import { useParams, useNavigate } from "react-router-dom";

export default function Details() {
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();

  //   [
  //   { id: 0, product_id: 4, quantity: 1, price: 2999 },
  //   { id: 1, product_id: 2, quantity: 2, price: 899 },
  //   { id: 2, product_id: 1, quantity: 1, price: 599 },
  //   ]

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = Data.find((item) => item.id === parseInt(productId));
      console.log("Found product:", foundProduct);
      if (foundProduct) {
        setProductData(foundProduct);
      } else {
        console.log("product not found");
      }
    };

    fetchProduct();
  }, [productId]);

  const nav = useNavigate();

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="details">
        <div className="details__container">
          <button
            className="details__back-btn"
            onClick={() => {
              nav(-1);
            }}
          >
            Go Back
          </button>
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
              gallery={productData.gallery}
              others={productData.others}
            />
          </article>
        </div>
      </section>
      <Navigation />
      <Article />
    </>
  );
}
