import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/home/homePage";
import CategoryPage from "./pages/category/categoryPage";
import CheckoutPage from "./pages/checkout/checkout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/headphones"
          element={<CategoryPage category="headphones" />}
        />
        <Route
          path="/speakers"
          element={<CategoryPage category="speakers" />}
        />
        <Route
          path="/earphones"
          element={<CategoryPage category="earphones" />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
