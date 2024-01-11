

import { oneProduct } from '../productPage/oneProduct';
import { Product } from "../models/product";
import productsfromjson from "../data/products.json";

export const allProducts = async() => {
 



     const productArray = [...productsfromjson]
    

console.log(productArray)


    if(productArray){
        const productContainer = document.createElement('section')
        productContainer.id = 'productPage'
        productContainer.classList.add('productContainerAllProducts')
        document.body.appendChild(productContainer)
        productArray.forEach(item => {
            const text: string = `<i class="fa fa-shopping-basket"></i>` ;
         let  itemArray:Product[] = [];
         itemArray.push(item)
         if(itemArray){
            oneProduct(itemArray, productContainer, text)
}
})
    }
}

allProducts()