

export const addProduct = (button: HTMLElement, product: Product) => {
  button.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    const existingProductsString = localStorage.getItem("basketarticles");
    const existingProducts = existingProductsString ? JSON.parse(existingProductsString) : [];


   const newBasket = [...existingProducts, product ]

    const sortExistingProducts = newBasket.sort((a: Product, b: Product) => a.titel.length - b.titel.length)

    localStorage.setItem("basketarticles", JSON.stringify(sortExistingProducts));
  });
};

