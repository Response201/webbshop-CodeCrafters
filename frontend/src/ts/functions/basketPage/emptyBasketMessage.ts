import { Product } from "../../models/product";

// Funktion för att visa ett meddelande om varukorgen är tom eller inte.
export function basketEmptyMessage(basket: Product[]) {
  // Hämta referensen till det HTML-element som visar meddelandet om varukorgen är tom.
  const emptyBasket = document.getElementById("basketEmpty") as HTMLTableSectionElement;
  const emptyBasketText = document.createElement("span");
  emptyBasketText.className = "basketEmptyText";
  emptyBasketText.innerHTML = "Your shoppingcart is empty";

  // Kontrollera om varukorgen är tom.
  if (basket.length === 0) {
    // Lägg till meddelandet om varukorgen är tom i DOM.
    emptyBasket?.appendChild(emptyBasketText);
  } else {
    // Om varukorgen inte är tom, ta bort eventuellt tidigare meddelande från DOM.
    emptyBasket.innerHTML = "";
  }
  return emptyBasket;
}
