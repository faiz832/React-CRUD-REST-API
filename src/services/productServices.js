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
