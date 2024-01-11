import { createHtmlBasket } from "../functions/basketPage/createHtmlBasket";
import { Product } from "../models/product";

const existingProductsString = localStorage.getItem("basketarticles");
    const existingProducts = existingProductsString ? JSON.parse(existingProductsString) : [];
let basket: Product[] = [];
if(existingProductsString){
  basket = [...existingProducts ]

}


// Funktion för att lägga till en produkt i varukorgen när en knapp klickas
export const addProductToBasket = (button: HTMLElement, id: Product) => {
  button.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    // Lägg till den valda produkten i varukorgen.
    basket.push(id);
    // Uppdatera det visuella gränssnittet för varukorgen.
    createHtmlBasket(basket);
  });
};

export function saveToLocalstorage(basket: Product[]) {
  localStorage.setItem("basketarticles", JSON.stringify(basket));
  // console.log("Saving to localStorage:", lists);
}

function getFromLocalstorage(basket: Product[]) {
  if (localStorage.getItem("basketarticles")) {
    basket = JSON.parse(localStorage.getItem("basketarticles") || "");
  }
  createHtmlBasket(basket);
}

getFromLocalstorage(basket);
