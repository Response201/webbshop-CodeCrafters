import { Product } from "../../models/product";

// Funktion för att öka antalet av en specifik produkt i varukorgen och returnera det nya antalet.
export const increaseQuantity = (basket: Product[], productId: string) => {
  // Variabel för att hålla reda på antalet av den specifika produkten.
  let productQuantity = 0;

  for (let j = 0; j < basket.length; j++) {
    // Kontrollera om produktens ID matchar det sökta produkt-ID.
    if (basket[j]._id === productId) {
      // Öka antalet av den specifika produkten.
      productQuantity += 1;
    }
  }
  return productQuantity;
};
