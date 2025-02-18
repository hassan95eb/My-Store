import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import ProductPage from "../pages/ProductPage";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

export default function RoutesSite() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkOut" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
