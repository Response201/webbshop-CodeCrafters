import { Product } from "../../models/product";
import { basketPrice, priceProduct } from "./prices";

// Funktion för att uppdatera priset för en produkt och den totala kundvagnen
export const updatePrice = (
  basket: Product[],
  productId: string,
  totalBasketPrice: number,
  onePrductPrice: HTMLParagraphElement,
  totalPrice: HTMLSpanElement
) => {
  // Beräkna det totala priset för den specifika produkten
  const totalProductPrice = priceProduct(basket, productId);

  // Uppdatera det HTML-elementet som visar priset för den specifika produkten
  onePrductPrice.innerHTML = totalProductPrice + " SEK";

  // Uppdatera det totala priset för hela kundvagnen
  totalBasketPrice = basketPrice(basket);

  // Uppdatera det HTML-elementet som visar det totala priset för kundvagnen
  totalPrice.innerHTML = totalBasketPrice + " SEK";
};
