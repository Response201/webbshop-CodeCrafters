

import { Order } from '../models/order'
import { Product } from '../models/product'
import { orderPage } from '../orderPage/orderPage'

export const checkOut  = async() => {

  
  

    const button = document.querySelector<HTMLElement>('#orderButton');

    button?.addEventListener('click', async(event: MouseEvent) => {
        event.preventDefault()


        const form = document.querySelector<HTMLFormElement>('#grid-container');

        let products: Product[] = JSON.parse(localStorage.getItem("basketarticles") || "[]");
       
        if(form?.reportValidity() && products.length >= 1){

  const firstname = document.querySelector<HTMLInputElement>('#firstname')?.value || '';
  const lastname = document.querySelector<HTMLInputElement>('#lastname')?.value || '';
  const phone = document.querySelector<HTMLInputElement>('#phone')?.value ||   '' ;
  const street = document.querySelector<HTMLInputElement>('#street')?.value || '';
  const county = document.querySelector<HTMLInputElement>("#county")?.value || '';
  const postcode = document.querySelector<HTMLInputElement>("#postcode")?.value || '';
  const paymentmethod = 'Kort';
 const totalprice = document.querySelector<HTMLInputElement>('#total')?.value || '';



  const orders: Order = {
    
      firstname,
      lastname,
      phone,
      street,
      postcode,
      county,
      paymentmethod,
      totalprice,
      items: [...products],
  };

  const deletee = document.querySelector(".checkoutContainer");

  if (deletee) {
      deletee.remove();
  }

  orderPage(orders, +totalprice);
  localStorage.setItem("basketarticles", JSON.stringify([]));
   }
})




   
 }
