import "./../scss/style.scss";
import { Product } from "./models/product";
import { openBasket } from "./functions/openBasket";
import { closeBasket } from "./functions/basketPage/closeBasket";
import { getProducts } from "./functions/getProducts";
export const shoppingcart: Product[] = [];

export const Main = async () => {

 await openBasket();
 await closeBasket();
const show  = await localStorage.getItem("show");
if(!show){
  const myModal =  document.querySelector<HTMLElement>('#myModal')
   myModal?.classList.add('show')
  };


const yesBtnModal =  document.querySelector<HTMLElement>('#modal-yesButton')
yesBtnModal?.addEventListener('click', (event:MouseEvent) =>{
event.preventDefault()
    localStorage.setItem("show", JSON.stringify(true));
  })
};

Main()