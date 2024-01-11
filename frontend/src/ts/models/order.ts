import { Product } from "./product";


export interface Order{
  firstname: string,
  lastname:string,
  phone:string,
street: string,
postcode:string,
county: string,
paymentmethod: string,
totalprice:string,
items:Product[]

    }