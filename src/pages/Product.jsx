import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../services/productServices";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProduct = async () => {
    try {
      const data = await getProduct();
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <>
      <h1>Product list</h1>
      <Link to="/product/add">Add new product</Link>
      {loading && <h1>Loading...</h1>}
      {products.map((product) => (
        <ul key={product.id}>
          <li>{product.name}</li>
          <li>{product.price}</li>
        </ul>
      ))}
    </>
  );
}
