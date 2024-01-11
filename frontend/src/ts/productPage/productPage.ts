import { oneProduct } from "./oneProduct";
import { restOfProducts } from "./restOfProducts"
import { Product } from "../models/product";

export const productPage = async(oneProductArray:Product[], restOfProductsArray:Product[]) => {

if(oneProduct.length >= 1 && restOfProductsArray.length > 0){

/* create elements - oneProduct  */
const productPageContainer = document.createElement('article')
productPageContainer.classList.add('productPageContainer')
document.body.appendChild(productPageContainer)
const text: string = `Add   <i class="fa fa-shopping-basket"></i> `


oneProduct(oneProductArray, productPageContainer, text)

const productContainer = document.createElement('section')
productContainer.classList.add('productContainer')
productPageContainer.appendChild(productContainer)
window.scrollTo({top:0, behavior:"smooth"})
restOfProducts(restOfProductsArray, productContainer)



  



}
}
