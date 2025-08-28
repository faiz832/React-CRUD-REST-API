import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getProductById } from "../services/productServices";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  const loadUser = async () => {
    try {
      const data = await getProductById(id);
      setForm(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editProduct(id, form);
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <input type="number" name="price" value={form.price} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
