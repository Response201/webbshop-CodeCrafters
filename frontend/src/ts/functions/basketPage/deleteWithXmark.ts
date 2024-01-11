import { Product } from "../../models/product";

// Funktion för att ta bort en produkt från kundvagnen baserat på dess produkt-ID, alla produkter av ett och samma id tas bort
export const deleteWithXmark = (basket: Product[], productId: string) => {
  // Loopa baklänges genom kundvagnens produkter för att undvika problem med förskjutning av index när element tas bort

  for (let i = basket.length - 1; i >= 0; i--) {
    // Kontrollera om produktens ID matchar det önskade produkt-ID

    if (basket[i]._id === productId) {
      // Om matchning hittas, ta bort produkten från kundvagnen
      basket.splice(i, 1);
    }
  }
};
