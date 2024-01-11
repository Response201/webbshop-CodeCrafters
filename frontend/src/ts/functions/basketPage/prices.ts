import { Product } from "../../models/product";

// Funktion för att beräkna det totala priset för ett specifikt produkt-ID i varukorgen.
export const priceProduct = (basket: Product[], productId: string) => {
  let totalProductPrice = 0;

  // Loopa igenom varje produkt i varukorgen.
  for (let j = 0; j < basket.length; j++) {
    // Kontrollera om produktens ID matchar det sökta produkt-ID.
    if (basket[j]._id === productId) {
      // Lägg till produktens pris till det totala priset.
      totalProductPrice += basket[j].price;
    }
  }

  // Returnera det totala priset för den specifika produkten i varukorgen.
  return totalProductPrice;
};

// Funktion för att beräkna det totala priset för hela varukorgen.
export const basketPrice = (basket: Product[]) => {
  let total = 0;

  for (let j = 0; j < basket.length; j++) {
    // Lägg till varje produkts pris till det totala priset.
    total += basket[j].price;
  }

  // Returnera det totala priset för hela varukorgen.
  return total;
};
