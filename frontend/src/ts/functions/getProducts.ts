import axios from "axios";
import { Product } from "../models/product";
import { productsfromjson } from "../data/products";



export const getProducts = async () => {



  const url: string = import.meta.env.VITE_URL;
  let Array: Product[] = [];
  try {
    const { data } = await axios.get<Product[]>(`${url}`, {
      timeout: 500,
    });
    if (data.length >= 3) {
      data.forEach((item) => {
        Array.push(item);
      });
    } else {

      Array = await productsfromjson;
      
  } } catch {
    if (productsfromjson) {
     Array = await productsfromjson;
    
    } else {
      console.error("error");
    }
  }
  return Array;
};
