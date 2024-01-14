
import { Product } from "../models/product";
import { productsfromjson } from "./products";



export const getProducts = async () => {



  let Array: Product[] = [];
  

      Array = await productsfromjson;
      
 
  return Array;
};
