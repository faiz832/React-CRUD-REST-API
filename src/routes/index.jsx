import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../pages/Product";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}
