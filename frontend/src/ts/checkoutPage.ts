import { Product } from "../ts/models/product";
import { checkOut } from "./eventlisteners/checkOut";

// Gränssnitt som utökar Product-gränssnittet med en amount-egenskap.

// Funktion för att hämta produkter från local storage eller returnera en tom array om inga produkter är lagrade.
export const getProductsFromLocalStorage = (): Product[] => {
  const products = localStorage.getItem("basketarticles");
  return products ? JSON.parse(products) : [];
};

const groupProductsById = (products: Product[]): { [id: string]: Product } => {
  return products.reduce((result, product) => {
    const { _id, titel, image, price } = product;

    if (!result[_id]) {
      // Skapar en grupperad produkt om det inte finns en med det givna ID:t.
      result[_id] = { _id, titel, image, price, amount: 1 };
    } else {
      // Ökar antalet om en produkt med samma ID redan finns.
      result[_id].amount++;
    }

    return result;
  }, {} as { [id: string]: Product });
};

let products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

// Funktion för att rendera grupperade produkter i DOM med ta bort-knappar.
export const renderProductsInDOM = (products: Product[]): void => {
  const itemListContainer = document.getElementById("itemlist");

  if (itemListContainer) {
    itemListContainer.innerHTML = "";

    // Grupperar produkter
    const groupedProducts = Object.values(groupProductsById(products));
    groupedProducts.sort((a: Product, b: Product) => a.titel.length - b.titel.length);

    groupedProducts.forEach((product) => {
      const productElement = document.createElement("ul");

      productElement.innerHTML = `
      
        <strong id="itemName" >${product.titel}:</strong>
        <img id="itemPicture" src="${product.image}" alt="Produktbild"/>
        <strong id="itemPrice" >${product.price}:</strong>
        <span id="itemAmount">${product.amount}</span>
        <button  id="itemButton" class="removeProductButton" data-product-id="${product._id}">-</button>
        <button  id="itemButton"   class="AddProductButton" data-product-id="${product._id}">+ </button>
        
      `;

      productElement.id = "listItems";

      const AddProductButton = productElement.querySelector(".AddProductButton");

      const removeProductButton = productElement.querySelector(".removeProductButton");
      if (removeProductButton) {
        // Lägger till en klickhändelse för att ta bort produkten när knappen klickas.
        removeProductButton.addEventListener("click", () => {
          const productIdToRemove = removeProductButton.getAttribute("data-product-id");
          if (productIdToRemove) {
            const updatedProductsArray = removeProduct(productIdToRemove, products);
            renderProductsInDOM(updatedProductsArray);
          }
        });
      }
      if (AddProductButton) {
        // Lägger till en händelselyssnare för att Addera produkten när knappen klickas.
        AddProductButton.addEventListener("click", () => {
          const productIdToAdd = AddProductButton.getAttribute("data-product-id");
          if (productIdToAdd) {
            const updatedProductsArray = addProduct(productIdToAdd, products);

            renderProductsInDOM(updatedProductsArray);
          }
        });
      }

      itemListContainer.appendChild(productElement);
    });

    // Ta bort funktion
    const removeProduct = (productId: string, products: Product[]): Product[] => {
      const updatedProducts = [...products];
      const indexToRemove = updatedProducts.findIndex((product) => product._id === productId);
      // Tar bort från listan om antalet är 0
      if (indexToRemove !== -1) {
        updatedProducts.splice(indexToRemove, 1);

        // Uppdaterar detta till local storage
        localStorage.setItem("basketarticles", JSON.stringify(updatedProducts));
      }

      return updatedProducts;
    };
    const addProduct = (productId: string, products: Product[]): Product[] => {
      const storedProducts = JSON.parse(localStorage.getItem("basketarticles") || "[]");
      const productToAdd = storedProducts.find((product: Product) => product._id === productId);
      products.sort((A, B) => A.titel.localeCompare(B.titel));

      if (productToAdd) {
        let updatedProducts = [...products, productToAdd];
        updatedProducts.sort((a: Product, b: Product) => a.titel.length - b.titel.length);

        localStorage.setItem("basketarticles", JSON.stringify(updatedProducts));

        return updatedProducts;
      }

      return products;
    };

    // Summerar alla priser i listan
    const totalPrice = groupedProducts.reduce((sum, product) => sum + product.price * product.amount, 0);

    const totalElement = document.createElement("div");
    const totalt = document.createElement("input");

    totalElement.innerHTML = `<strong id="itemTotal">Totalt pris: ${totalPrice}</strong> `;
    itemListContainer.appendChild(totalElement);
    totalElement.id = "totalPrice";

    totalt.id = 'total';
    totalt.value = `${totalPrice}`;

    itemListContainer.appendChild(totalt);
   
    
    checkOut()
  
  
  
  }

  

};

// Hämtar produkter från local storage
const storedProducts = getProductsFromLocalStorage();

// Renderar produkterna i DOMen
renderProductsInDOM(storedProducts);
