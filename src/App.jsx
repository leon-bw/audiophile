import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/home/homePage";
import Details from "./pages/Details/Details";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones/:headphoneId" element={<Details />} />
        <Route path="/speakers/:speakerId" element={<Details />} />
        <Route path="/earphones" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
