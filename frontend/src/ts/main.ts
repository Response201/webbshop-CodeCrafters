import "./../scss/style.scss";
import { Product } from "./models/product";
import { openBasket } from "./functions/openBasket";
import { closeBasket } from "./functions/basketPage/closeBasket";
import { getProducts } from "./functions/getProducts";
export const shoppingcart: Product[] = [];

export const Main = async () => {

 await openBasket();
 await closeBasket();
await getProducts()
const show  = await localStorage.getItem("show");
if(!show){
  const myModal = await document.querySelector<HTMLElement>('#myModal')
   myModal?.classList.add('show')
  };


const yesBtnModal = await document.querySelector<HTMLElement>('#modal-yesButton')
yesBtnModal?.addEventListener('click', (event:MouseEvent) =>{
event.preventDefault()
    localStorage.setItem("show", JSON.stringify(true));
  })
};

