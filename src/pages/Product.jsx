import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getProduct, getProducts } from "../services/productServices";
import useDebounce from "../hooks/useDebounce";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const loadProduct = async (q = "") => {
    try {
      const data = await getProducts(q);
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      loadProduct();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProduct(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <>
      <h1>Product list</h1>
      <Link to="/product/add">Add new product</Link>
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      {loading && <h1>Loading...</h1>}
      {products.length > 0 ? (
        products.map((product) => (
          <ul key={product.id}>
            <li>{product.name}</li>
            <li>{product.price}</li>
            <Link to={`/product/edit/${product.id}`}>Edit</Link>
            <button onClick={(e) => handleDelete(product.id)}>Delete</button>
          </ul>
        ))
      ) : (
        <p>No product found</p>
      )}
    </>
  );
}
