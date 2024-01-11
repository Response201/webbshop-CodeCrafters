import axios from "axios";
import { Product } from "../models/product";
import productsfromjson from "../data/products.json";

export const getProducts = async () => {
  const url: string = import.meta.env.VITE_URL;
  const Array: Product[] = [];
  try {
    const { data } = await axios.get<Product[]>(`https://codecrafters-td9j.onrender.com`, {
      timeout: 500,
    });
    if (data.length >= 3) {
      data.forEach((item) => {
        Array.push(item);
      });
    } else {
      if (productsfromjson) {
        productsfromjson.forEach((item) => {
          Array.push(item);
        });
      } else if (!productsfromjson) {
        console.error("error");
      }
    }
  } catch {
    if (productsfromjson) {
      productsfromjson.forEach((item) => {
        Array.push(item);
      });
    } else {
      console.error("error");
    }
  }
  return Array;
};
