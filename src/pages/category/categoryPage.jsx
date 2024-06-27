import Article from "../../components/Article/Article";
import Navigation from "../../components/navigation/navigation";
import ProductCard from "../../components/productCard/productCard";
import myData from "../../assets/data.json";
import "./categoryPage.scss";

export default function CategoryPage({ category }) {
  const filteredData = myData
    .filter((product) => product.category === category)
    .reverse();

  return (
    <>
      <section className="banner">
        <h3 className="banner__title">{category}</h3>
      </section>
      {filteredData.map((item) => (
        <ProductCard
          category={category}
          key={item.id}
          categoryImage={item.categoryImage}
          newProduct={item.new}
          name={item.name}
          description={item.description}
        />
      ))}
      <Navigation />
      <Article />
    </>
  );
}
