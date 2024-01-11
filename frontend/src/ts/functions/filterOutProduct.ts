import { productPage } from "../productPage/productPage"
import { getProducts } from "./getProducts"
import { Product } from '../models/product';


export const filterOutProduct = async (id:string) => {
    /* hämtar alla produkter */
    const products = await getProducts()

    /* tar bort innehåll för att motverka dubletter på sidan */
    const deleteContainer = document.querySelector<HTMLInputElement>('.productContainerAllProducts')
    const deleteAsWell = document.querySelector<HTMLElement>('.productPageContainer')
    const home = document.querySelector<HTMLElement>('.mainContent')
    const about = document.querySelector<HTMLElement>('#app')
 
        if(deleteContainer){
            deleteContainer.remove();
        }
        if(deleteAsWell){
            deleteAsWell.remove();
        }
        if(home){
            home.remove();
        }
        if(about){

            about.remove()

        }
  
        /* produkter och id finns sorteras produkter in eller ut och sparas i respektive variabel */
    if(products && id){
    const oneProduct: Product[] = await products.filter(item => item._id === id) 
    const twoProduct: Product[] = await products.filter(item => item._id !== id) 
 if(oneProduct && twoProduct){

    /* om variablerna oneProduct && twoProduct finns så körs productPage(), 
    produkt sida skapas */
productPage(oneProduct, twoProduct)
    }
    }
}
