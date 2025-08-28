import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../pages/Product";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}
