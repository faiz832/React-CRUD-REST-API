import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../pages/Product";
import Home from "../pages/Home";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}
