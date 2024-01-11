import { Product } from "../../models/product";
import { increaseQuantity } from "./increaseQuantity";
import { updatePrice } from "./updatePrice";

// Funktion för att skapa och returnera "plus"-knappen för en produkt i varukorgen.
export const buttonPlus = (
  basket: Product[],
  productId: string,
  productQuantityNumber: HTMLSpanElement,
  totalBasketPrice: number,
  onePrductPrice: HTMLParagraphElement,
  totalPrice: HTMLSpanElement
) => {
  // Hitta indexet för produkten med det givna produkt-ID i varukorgen.
  const productToAdd = basket.findIndex((product) => product._id === productId);

  // Kontrollera om produkten finns i varukorgen.
  if (productToAdd !== -1) {
    // Skapa en "plus"-knapp som läggs till i DOM.
    const plusButton = document.createElement("button") as HTMLButtonElement;
    plusButton.className = "plusButton";
    plusButton.innerHTML = "+";

    plusButton.addEventListener("click", () => {
      // Öka antalet av den specifika produkten i varukorgen.
      const totalQuantityProductPlus = increaseQuantity(basket, productId);

      // Uppdatera det visuella elementet som visar antalet produkter.
      productQuantityNumber.innerHTML += totalQuantityProductPlus;

      // Uppdatera priset för den specifika produkten och det totala priset för varukorgen.
      updatePrice(basket, productId, totalBasketPrice, onePrductPrice, totalPrice);
    });
    return plusButton;
  }
};
