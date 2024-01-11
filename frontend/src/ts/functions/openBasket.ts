export function openBasket() {
  //Hämtar kundvagnselement för att kunna klicka på och öpnna kundvagnssidan
  const openButton = document.getElementById("bag") as HTMLDivElement;
  openButton.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    // Hämta kundvagnssidan från html
    const basketPage = document.getElementById("basketPage") as HTMLTableSectionElement;

    // Visa kundvagnssidan när kundvagnsikonen klickas
    basketPage.style.display = "block";
  });
}
