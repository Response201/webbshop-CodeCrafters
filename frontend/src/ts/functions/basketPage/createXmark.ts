import { Product } from "../../models/product";
import { createHtmlBasket } from "./createHtmlBasket";
import { deleteWithXmark } from "./deleteWithXmark";
import { zeroOutPrice } from "./zeroOutPrice";

// Funktion för att skapa ett "X"-element (kryss) för att ta bort en produkt från kundvagnen
export const xmark = (basket: Product[], productId: string, totalPrice: HTMLSpanElement, totalBasketPrice: number) => {
  // Skapa ett HTML-element för "X"-markeringen
  const oneProductXmark = document.createElement("section");
  oneProductXmark.className = "oneProduct--xmark";
  oneProductXmark.innerHTML = "X";

  oneProductXmark.addEventListener("click", () => {
    // Anropa funktionen för att ta bort produkten med "X"-markeringen från kundvagnen
    deleteWithXmark(basket, productId);
    // Återställ det totala priset för kundvagnen
    zeroOutPrice(basket, totalPrice, totalBasketPrice);
    // Skapa om HTML-representationen av kundvagnen efter borttagning av produkten
    createHtmlBasket(basket);
  });

  return oneProductXmark;
};
