import apiClient from "../api/apiClient";

// GET DATA
export const getProduct = async () => {
  const res = await apiClient.get("/products");
  return res.data;
};

// ADD DATA
export const addProduct = async (product) => {
  const res = await apiClient.post("/products", product);
  return res.data;
};

// GET DATA BY ID
export const getProductById = async (id) => {
  const res = await apiClient.get(`/products/${id}`);
  return res.data;
};

// EDIT DATA
export const editProduct = async (id, product) => {
  const res = await apiClient.put(`/products/${id}`, product);
  return res.data;
};

// DELETE DATA
export const deleteProduct = async (id) => {
  const res = await apiClient.delete(`/products/${id}`);
  return res.data;
};

// SEARCH DATA
export const getProducts = async (q) => {
  const res = await apiClient.get(`/products?q=${q}`);
  return res.data;
};
