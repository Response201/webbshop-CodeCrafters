import { createHtmlBasket } from "./createHtmlBasket";
import { zeroOutPrice } from "./zeroOutPrice";
import { Product } from "../../models/product";

// Funktion för att ta bort en produkt från kundvagnen (sker om man trycker på minusknappen)
export const removeProduct = (
  button: HTMLElement,
  basket: Product[],
  productId: string,
  i: number,
  productQuantityNumber: HTMLSpanElement,
  basketArticles: HTMLTableSectionElement,
  basketOneProduct: HTMLElement,
  totalPrice: HTMLSpanElement,
  totalBasketPrice: number
) => {
  button.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    // Hitta indexet för produkten som ska tas bort
    const productToRemove = basket.findIndex((product) => product._id === productId);

    // Kontrollera om produkten finns i kundvagnen
    if (productToRemove !== -1) {
      // Ta bort produkten från kundvagnen
      basket.splice(i, 1);

      // Minska antalet av den specifika produkten i kundvagnen
      let decreaseQuantityy = parseInt(productQuantityNumber.innerHTML);
      decreaseQuantityy = Math.max(0, decreaseQuantityy - 1);
      productQuantityNumber.innerHTML = decreaseQuantityy.toString();

      // Om antalet blir noll, ta bort HTML-elementet för den produkten från kundvagnen
      if (productQuantityNumber.innerHTML === "0") {
        basketArticles.removeChild(basketOneProduct);
      }

      // Återställ priset och skapa om HTML för kundvagnen
      zeroOutPrice(basket, totalPrice, totalBasketPrice);
      createHtmlBasket(basket);
    }
  });
};
