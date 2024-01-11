import { filterOutProduct } from "../functions/filterOutProduct"

/* Hämtar knappen som eventlistenern ska kopplas till och id:t 
som behövs för att köra funktionen filterOutProduct() */
export const seeProduct = (button:HTMLElement, id:string) => {
 
    button.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault()
      filterOutProduct(id)
     
    })


}
