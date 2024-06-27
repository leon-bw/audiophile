import Article from "../../components/Article/Article";
import Navigation from "../../components/navigation/navigation";
import "./categoryPage.scss";

export default function CategoryPage({ category }) {
  return (
    <>
      <section className="banner">
        <h3 className="banner__title">{category}</h3>
      </section>
      <Navigation />
      <Article />
    </>
  );
}
