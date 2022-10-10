class Roll {
   constructor(rollType, rollGlazing, packSize, basePrice) {
       this.type = rollType;
       this.glazing =  rollGlazing;
       this.size = packSize;
       this.basePrice = basePrice;
   }
}

// list of glazing javascript objects
let glazingOptions = {
   'Keep original': {
      "priceAdaptation": 0
   },
   'Sugar milk': {
      "priceAdaptation": 0
   },
   'Vanilla milk': {
      "priceAdaptation": 0.5
   },
   'Double chocolate': {
      "priceAdaptation": 1.5
   }
};

// list of size javascript objects
let sizeOptions = {
   '1': {
      "priceAdaptation": 1
   },
   '3': {
      "priceAdaptation": 3
   },
   '6': {
      "priceAdaptation": 5
   },
   '12': {
      "priceAdaptation": 10
   }
};

let cart = [];
let totalPrice = 0;

//Variables to use
let rollType, rollGlazing, packSize, basePrice;

//Item 1
rollType = 'Original';
rollGlazing = 'Sugar milk';
packSize = '1';
basePrice = parseFloat(rolls[rollType].basePrice);
cart.push(new Roll(rollType, rollGlazing, packSize, basePrice));

//Item 2
rollType = 'Walnut';
rollGlazing = 'Vanilla milk';
packSize = '12';
basePrice = parseFloat(rolls[rollType].basePrice);
cart.push(new Roll(rollType, rollGlazing, packSize, basePrice));

//Item 3
rollType = 'Raisin';
rollGlazing = 'Sugar milk';
packSize = '3';
basePrice = parseFloat(rolls[rollType].basePrice);
cart.push(new Roll(rollType, rollGlazing, packSize, basePrice));

//Item 4
rollType = 'Apple';
rollGlazing = 'Keep original';
packSize = '3';
basePrice = parseFloat(rolls[rollType].basePrice);
cart.push(new Roll(rollType, rollGlazing, packSize, basePrice));

console.log(cart)

function createElement(roll) {
   const template = document.querySelector('#cart-template');
	const clone = template.content.cloneNode(true);
   //Getting all the parts of the template using querySelector
	let element = clone.querySelector('.cart-items');
   let image = element.querySelector('.cart-img');
   let type = element.querySelector('.roll-type');
   let glazing = element.querySelector('.glazing-type');
   let size = element.querySelector('.pack-size');
   let price = element.querySelector('.cart-price');
   let button = element.querySelector('.caption');
   //Setting the image based on the input roll
   image.src=rolls[roll.type].imageFile;
   //Setting the descriptive text based on the input roll
   type.innerText = roll.type + ' Cinnamon Roll';
   glazing.innerText = 'Glazing: ' + roll.glazing;
   size.innerText = 'Pack Size: ' + roll.size;
   //Calculating the total price of the cart item
   let priceChange = glazingOptions[roll.glazing].priceAdaptation;
   let priceMult = sizeOptions[roll.size].priceAdaptation;
   let itemPrice = ((roll.basePrice + priceChange) * priceMult).toFixed(2);
   //Setting the price for the cart item
   price.innerText = '$' + itemPrice;
   //Setting the total price at the bottom
   totalPrice = totalPrice + parseFloat(itemPrice);
   //Adding the template into the DOM
   document.querySelector('#cart-list').append(element);
   //Adding an onclick funciton for the remove button
   button.onclick = removeItem.bind(null, roll, element, itemPrice);
}

function removeItem(roll, element, itemPrice) {
   //Remove the roll fromt he cart array
   let index = cart.indexOf(roll);
   if (index > -1) {
      cart.splice(index, 1);
   }
   //Update total price
   totalPrice = parseFloat(totalPrice.toFixed(2)) - parseFloat(itemPrice);
   checkoutPrice.innerText = '$' + totalPrice.toFixed(2);
   //Remove the actual template element from the page
   element.remove();
}

for (let i = 0; i < cart.length; i++) {
   //Creating an element for each item in the cart
   createElement(cart[i]);
}

//Displaying the total price at the beginning
let checkout = document.querySelector('.cart-checkout');
let right = checkout.querySelector('.items-right');
let checkoutPrice = right.querySelector('.cart-price');
checkoutPrice.innerText = '$' + totalPrice.toFixed(2);

