export function closeBasket() {
  // Hämta stängknappen och öppningsknappen för basket
  const closeButton = document.getElementById("closeButton") as HTMLButtonElement;

  closeButton.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    // Hämta kundvagnssidan från html
    const basketPage = document.getElementById("basketPage") as HTMLTableSectionElement;

    // Dölj kundvagnssidan när stängknappen klickas
    basketPage.style.display = "none";
  });
}
