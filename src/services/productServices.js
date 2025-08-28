import apiClient from "../api/apiClient";

// GET DATA
export const getProduct = async () => {
  const res = await apiClient.get("/products");
  return res.data;
};
