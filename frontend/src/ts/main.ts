import "./../scss/style.scss";
import { allProducts } from "./allProductsPage/allProducts";
import { Order } from "./models/order";
import { Product } from "./models/product";
import { openBasket } from "./functions/openBasket";
import { closeBasket } from "./functions/basketPage/closeBasket";
import { addProductToBasket } from "./eventlisteners/addProductsBasket";
export const shoppingcart: Product[] = [];
openBasket();
closeBasket();
const main = async () => {


const show  = localStorage.getItem("show");
if(!show){
  $(document).ready(function () {
    $("#myModal").modal("show");
  });
}


const yesBtnModal = document.querySelector<HTMLElement>('#modal-yesButton')
yesBtnModal?.addEventListener('click', (event:MouseEvent) =>{
event.preventDefault()
    localStorage.setItem("show", JSON.stringify(true));
  })
};
main();
