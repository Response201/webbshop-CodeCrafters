import { Order } from "../models/order";
import { Product } from "../models/product";












const emoijis = () =>{


    const emoijisContainer = document.createElement('section')
    emoijisContainer.classList.add('emoijisContainer')

    document.body.appendChild(emoijisContainer)
    

        for(let i = 0; i < 30; i++){
        let emoji =  document.createElement('p')
        emoji.classList.add('emoji')
        if(i % 2)
        emoji.innerHTML= `🎉`
        
        emoijisContainer.appendChild(emoji)
        }
            }


export const orderPage = (orderArray: Order, getTotalPrice: number) => {
    console.log(orderArray, getTotalPrice)

const del = document.querySelector<HTMLElement>('.containerPage')

if(del){


del.remove()

}

const number: number = (Math.random() * (10523 - 100) + 10);;
    const orderNumber:string = `#${Math.floor(number)}`

    const date:string = `${Date().toString().substring(7, 10)} ${Date().toString().substring(4,7)} ${Date().toString().substring(11,15)}`

  

  

if(orderArray && orderNumber && date && getTotalPrice ){

    
  
      

    const containerPage = document.createElement('article')
    containerPage.classList.add('containerPage')

const orderContainer = document.createElement('section')
orderContainer.classList.add('orderContainer')



const buyerInfo = document.createElement('section')
buyerInfo.classList.add('buyerInfo')


const text = document.createElement('p')
text.classList.add('buyerInfo___text')
text.innerText = `Tack ${orderArray.firstname},

Vi uppskattar verkligen ditt köp hos oss! Din order har nu bekräftats och kommer att behandlas inom kort. Nedan finns en sammanfattning av din beställning:

Ordernummer: ${orderNumber}
Datum för beställning: ${date}
Betalningsmetod: ${orderArray.paymentmethod}
`

const deliveryaddress = document.createElement('p')
deliveryaddress.classList.add('buyerInfo___deliveryaddress')
deliveryaddress.innerHTML = `Leveransadress:`

const name = document.createElement('p')
name.classList.add('buyerInfo___name')
name.innerHTML = `${orderArray.firstname} ${orderArray.lastname}`
const street = document.createElement('p')
street.classList.add('buyerInfo___street')
street.innerHTML = `${orderArray.street} `
const postcodeCounty = document.createElement('p')
postcodeCounty.classList.add('buyerInfo___postcodeCounty')
postcodeCounty.innerHTML = `${orderArray.postcode}, ${orderArray.county} `



const orderDetailsContainer = document.createElement('section')
orderDetailsContainer.classList.add('orderDetailsContainer')
const orderDetailsText = document.createElement('p')
orderDetailsText.classList.add('orderDetailsContainer___orderDetailsText')



const totalPriceContainer = document.createElement('section')
totalPriceContainer.classList.add('totalPriceContainer')




// Räkna ut moms
var moms = +getTotalPrice * 0.25;

const momsPrice = document.createElement('p')
momsPrice.classList.add('totalPriceContainer___momsPrice')
momsPrice.innerHTML =  `moms: ${moms} kr`

const totalPrice = document.createElement('p')
totalPrice.classList.add('totalPriceContainer___totalPrice')
totalPrice.innerHTML =  `Totalt: ${getTotalPrice} kr`


/* append elements */

document.body.appendChild(containerPage)
containerPage.appendChild(orderContainer)
orderContainer.appendChild(buyerInfo)
buyerInfo.appendChild(text)
buyerInfo.appendChild(deliveryaddress)
buyerInfo.appendChild(name)
buyerInfo.appendChild(street)
buyerInfo.appendChild(postcodeCounty)



/* tabel */
const table = document.createElement('table');
table.classList.add('orderDetailsTable');

orderContainer.appendChild(orderDetailsContainer)
orderDetailsContainer.appendChild(orderDetailsText)
orderDetailsContainer.appendChild(table);


// Lägg till rubrik till tabellen
const tableHeader = document.createElement('thead');
const headerRow = document.createElement('tr');
const titleHeader = document.createElement('th');
titleHeader.textContent = 'Köpta artiklar';

const quantityHeader = document.createElement('th');
quantityHeader.textContent = 'Antal';
const priceHeader = document.createElement('th');
priceHeader.textContent = 'Pris';

/* lägger rubriker i header raden */
headerRow.appendChild(titleHeader);
headerRow.appendChild(priceHeader);
headerRow.appendChild(quantityHeader)
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);
















var uniqueArray = [];

for (const element of orderArray.items) {
  


        var isUnique = true;
    
        // Kontrollera om elementet redan finns i uniqueArray
        for (var j = 0; j < uniqueArray.length; j++) {
            if (element._id === uniqueArray[j]._id) {
                isUnique = false;
              
            }
        }
    
        if (isUnique) {
            uniqueArray.push(element);
        }
 
        console.log(uniqueArray)
  
     }


for(const element of uniqueArray){ 

    const row = document.createElement('tr');
    
    const titel  = document.createElement('td')
    titel.classList.add('orderDetailsTable___titel')
    titel.innerHTML = `${element.titel}`

    const price  = document.createElement('td')
    price.classList.add('orderDetailsTable___price')
    price.innerHTML = `${element.price}/st`

    const amount = orderArray.items.filter((i) => i._id === element._id)
    
    const quantity = document.createElement('td')
    quantity.classList.add('orderDetailsTable___quantity')
    quantity.innerHTML = amount.length


    





    table.appendChild(row)
    row.appendChild(titel)
    row.appendChild(price)
    row.appendChild(quantity)
  }



/* totalprice */
orderContainer.appendChild(totalPriceContainer)
totalPriceContainer.appendChild(momsPrice)
totalPriceContainer.appendChild(totalPrice)

  let emojiRain = true;
 
  setTimeout(() => {
      emojiRain = false;
  }, 2000);

  if(emojiRain){
      emoijis()
  }





}



}

