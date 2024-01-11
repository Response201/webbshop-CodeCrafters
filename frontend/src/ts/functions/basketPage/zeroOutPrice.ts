import { Product } from "../../models/product";

// Funktion för att nollställa priset beroende på innehållet i kundvagnen
export const zeroOutPrice = (basket: Product[], totalPrice: HTMLSpanElement, totalBasketPrice: number) => {
  // Kontrollera om kundvagnen är tom
  if (basket.length === 0) {
    // Om kundvagnen är tom, sätt det totala priset till "0 SEK"
    totalPrice.innerHTML = "0 SEK";
  } else {
    // Om kundvagnen inte är tom, sätt det totala priset till det beräknade totala kundvagnspriset
    totalPrice.innerHTML = totalBasketPrice + " SEK";
  }
};
