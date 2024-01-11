import { Product } from "../../models/product";
import { updatePrice } from "./updatePrice";

export const buttonMinus = (
  basket: Product[],
  productId: string,
  totalBasketPrice: number,
  onePrductPrice: HTMLParagraphElement,
  totalPrice: HTMLSpanElement
) => {
  // Hitta indexet för produkten med det givna produkt-ID i varukorgen.
  const productToRemove = basket.findIndex((product) => product._id === productId);

  // Kontrollera om produkten finns i varukorgen.
  if (productToRemove !== -1) {
    const minusButton = document.createElement("button");
    minusButton.className = "minusButton";
    minusButton.innerHTML = "-";
    minusButton.addEventListener("click", () => {
      // Uppdatera priset för den specifika produkten och det totala priset för varukorgen.
      updatePrice(basket, productId, totalBasketPrice, onePrductPrice, totalPrice);
    });
    return minusButton;
  }
};
