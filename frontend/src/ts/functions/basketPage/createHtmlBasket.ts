import { removeProduct } from "./removeproducts";
import { Product } from "../../models/product";
import { basketEmptyMessage } from "./emptyBasketMessage";
import { increaseQuantity } from "./increaseQuantity";
import { buttonMinus } from "./minusButton";
import { buttonPlus } from "./plusButton";
import { basketPrice, priceProduct } from "./prices";
import { xmark } from "./createXmark";
import { addProductToBasket, saveToLocalstorage } from "../../eventlisteners/addProductsBasket";

//Funktion för att skapa html för varukorg
export const createHtmlBasket = (basket: Product[]) => {
  console.log(basket);
  saveToLocalstorage(basket);
  //hämta element där varukorgsartiklar hamnar
  const basketArticles = document.getElementById("basketArticles") as HTMLTableSectionElement;
  basketArticles.innerHTML = "";

  //skapa meddelande för tom varukorg
  const emptyBasket = basketEmptyMessage(basket);

  //Skapa en uppsättning för att hålla reda på unika produkt-ID
  const addedProducts: Set<string> = new Set();

  //Sortera varukorg (just nu efter titel)
  basket.sort((a: Product, b: Product) => a.titel.length - b.titel.length);

  //Loopa igenom varje produkt i varukorgen
  for (let i = 0; i < basket.length; i++) {
    const currentProduct = basket[i];
    const productId = currentProduct._id;

    //Ta bort varukorgsmeddelande när produkt läggs till
    emptyBasket.innerHTML = "";

    let totalBasketPrice = 0;

    //Skapa HTML för varje produkt som inte redan har lagts till sedan tidigare
    if (!addedProducts.has(productId)) {
      //Skapa element för varje del av produktens presentation
      const basketOneProduct = document.createElement("section");
      basketOneProduct.className = "container--basketOneProduct";

      const basketImage = document.createElement("section");
      basketImage.className = "container--basketImage";

      //visa produktbild
      const img = document.createElement("img");
      img.src = `${currentProduct.image}`;
      img.className = "img";

      const oneProductText = document.createElement("section");
      oneProductText.className = "container--openProductText";

      const titleAndXmark = document.createElement("section");
      titleAndXmark.className = "container--titleAndXmark";

      //Visa Produkttitel
      const basketProductTitle = document.createElement("p");
      basketProductTitle.className = "basketProductTitle";
      basketProductTitle.innerHTML = currentProduct.titel;

      const productQuantityAndIndividualPrice = document.createElement("section");
      productQuantityAndIndividualPrice.className = "container--productQuantityIndividualPrice";

      const productQuantity = document.createElement("section");
      productQuantity.className = "container--productQuantity";

      //Visa det individuella priset
      const indiviualPrice = document.createElement("span");
      indiviualPrice.className = "indiviualPrice";
      indiviualPrice.innerHTML += currentProduct.price + " SEK each";

      const productQuantityText = document.createElement("span");
      productQuantityText.className = "productQuantityText";
      productQuantityText.innerHTML = "Quantity: ";

      const buttonsAndPrice = document.createElement("section");
      buttonsAndPrice.className = "container--buttonAndPrice";

      const addOrRemoveButtons = document.createElement("section");
      addOrRemoveButtons.className = "container--addOrRemoveButtons";

      //Hämta och visa antal produkter
      const totalQuantityProduct = increaseQuantity(basket, productId);
      const productQuantityNumber = document.createElement("span");
      productQuantityNumber.className = "productQuantityNumber";
      productQuantityNumber.innerHTML += totalQuantityProduct;

      //Hämta och visa totalt pris för alla produkter med ett och sammma ID
      const totalProductPrice = priceProduct(basket, productId);
      const onePrductPrice = document.createElement("p") as HTMLParagraphElement;
      onePrductPrice.className = "oneProductPrice";
      onePrductPrice.innerHTML = totalProductPrice + " SEK";

      //Hämta element för att visa det totala priset för hela varukorgen
      const totalPrice = document.getElementById("summa") as HTMLSpanElement;

      //Uppdatera det totala priset för hela varukorgen
      totalBasketPrice = basketPrice(basket);
      totalPrice.innerHTML = totalBasketPrice + " SEK";

      //Funktion för att uppdatera priset när man trycker på minusknappen
      const minusBOTTON = buttonMinus(
        basket,
        productId,
        totalBasketPrice,
        onePrductPrice,
        totalPrice
      ) as HTMLButtonElement;

      //Funktion för att kunna ta bort produkter när man trycker på minusknappen
      removeProduct(
        minusBOTTON,
        basket,
        productId,
        i,
        productQuantityNumber,
        basketArticles,
        basketOneProduct,
        totalPrice,
        totalBasketPrice
      );

      //En funktion för att kunna ta bort alla produkter av ett specifikt id på en och samma gång (klickar på krysset då)
      const oneProductXmark = xmark(basket, productId, totalPrice, totalBasketPrice);

      //Funktion för att uppdatera pris och kvanitiet när plusknappen klickas
      const plusButton = buttonPlus(
        basket,
        productId,
        productQuantityNumber,
        totalBasketPrice,
        onePrductPrice,
        totalPrice
      ) as HTMLButtonElement;

      //Funktion för att öka antalet produkter med plusknappen i varukorgen
      addProductToBasket(plusButton, currentProduct);

      productQuantity.appendChild(productQuantityText);
      productQuantity.appendChild(productQuantityNumber);
      addOrRemoveButtons.appendChild(minusBOTTON);
      addOrRemoveButtons.appendChild(plusButton);
      buttonsAndPrice.appendChild(addOrRemoveButtons);
      buttonsAndPrice.appendChild(onePrductPrice);
      titleAndXmark.appendChild(basketProductTitle);
      titleAndXmark.appendChild(oneProductXmark);
      oneProductText.appendChild(titleAndXmark);
      productQuantityAndIndividualPrice.appendChild(productQuantity);
      productQuantityAndIndividualPrice.appendChild(indiviualPrice);
      oneProductText.appendChild(productQuantityAndIndividualPrice);
      oneProductText.appendChild(buttonsAndPrice);
      basketImage.appendChild(img);
      basketOneProduct.appendChild(basketImage);
      basketOneProduct.appendChild(oneProductText);
      basketArticles.appendChild(basketOneProduct);

      //Lägg till en produkts id i Set:en för att undvika duplikation
      addedProducts.add(productId);
    }
  }
};
