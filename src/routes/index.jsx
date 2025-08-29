import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../pages/Product";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import DataFetching from "../pages/DataFetching";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/data" element={<DataFetching />} />
      </Routes>
    </Router>
  );
}
