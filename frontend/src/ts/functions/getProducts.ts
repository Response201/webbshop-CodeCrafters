
import { Product } from "../models/product";
import productsfromjson from "../data/products.json";

export const getProducts = async () => {

  const Array: Product[] =  [ ...productsfromjson]


  return Array
};
