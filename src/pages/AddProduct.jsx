import { useState } from "react";
import { addProduct } from "../services/productServices";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(form);
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add New Product</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" value={form.name} onChange={handleChange} />
        <input type="number" name="price" placeholder="price" value={form.price} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
