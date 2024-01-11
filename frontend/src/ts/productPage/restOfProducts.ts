import { seeProduct } from "../eventlisteners/seeProduct"
import { Product } from "../models/product"
export const restOfProducts = (restOfProducts:Product[], productContainer:HTMLElement) => {
    if (restOfProducts && restOfProducts.length > 0 && productContainer ) {
        for (let i in restOfProducts){ 
        /* selected product */
        const manyProducts = document.createElement('section')
        manyProducts.classList.add('manyProducts')

        /* selected product image and description container*/

        /*  image */
        const imgAndDescription___imgContainer = document.createElement('section')
        imgAndDescription___imgContainer.classList.add('imgAndDescription___imgContainer')
        const imgAndDescription___imgContainer___img = document.createElement('img')
        imgAndDescription___imgContainer___img.classList.add('imgAndDescription___imgContainer___img')
            imgAndDescription___imgContainer___img.src = restOfProducts[i].image;
        /* description  */
        const imgAndDescription___description = document.createElement('p')
        imgAndDescription___description.classList.add('imgAndDescription___description')
        /* button */
        const imgAndDescription___button = document.createElement('button')
        imgAndDescription___button.classList.add('imgAndDescription___buttonsContainer___button')
        imgAndDescription___button.innerHTML =   `read more` ;
        /*  titel */
        const selectedProduct___titel = document.createElement('h2')
        selectedProduct___titel.classList.add('selectedProduct___titel')
        selectedProduct___titel.innerText = restOfProducts[i].titel;
        /* append elements */
        /* selected product */
        productContainer.appendChild(manyProducts)
         /* image */
         manyProducts.appendChild( imgAndDescription___imgContainer)
         imgAndDescription___imgContainer.appendChild(imgAndDescription___imgContainer___img)
        /* selected product titel */
        /* description  */
        manyProducts.appendChild(imgAndDescription___description)
        imgAndDescription___description.appendChild(selectedProduct___titel)
        imgAndDescription___description.appendChild(imgAndDescription___button) 

        /* eventlisteners */
seeProduct(imgAndDescription___button, restOfProducts[i]._id)
seeProduct(imgAndDescription___imgContainer, restOfProducts[i]._id)
    }
        }
}
