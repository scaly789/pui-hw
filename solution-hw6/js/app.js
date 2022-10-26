class Roll {
   constructor(rollType, rollGlazing, packSize, basePrice) {
       this.type = rollType;
       this.glazing =  rollGlazing;
       this.size = packSize;
       this.basePrice = basePrice;
   }
}

function glazingChange(element) {
   // get value of selected glazing option
   const priceChange = parseFloat(element.value);

   // do the math from the other select and update the total price
   let sizeSelect = document.querySelector('#size-select');
   const priceMultiple = parseInt(sizeSelect.value);
   let totalPrice = document.querySelector('#total-price');
   totalPrice.innerText = '$' + ((basePrice + priceChange) * priceMultiple).toFixed(2);
}

function sizeChange(element) {
   // get value of selected size option
   const priceMultiple = parseInt(element.value);

   // do the math from the other select and update the total price
   let glazingSelect = document.querySelector('#glazing-select');
   const priceChange = parseFloat(glazingSelect.value);
   let totalPrice = document.querySelector('#total-price');
   totalPrice.innerText = '$' + ((basePrice + priceChange) * priceMultiple).toFixed(2);
}

//Function to add to cart in local storage
function addToCart() {
   rollGlazing = glazingSelect.options[glazingSelect.selectedIndex].text;
   packSize = sizeSelect.options[sizeSelect.selectedIndex].text;
   rollObject = new Roll(rollType, rollGlazing, packSize, basePrice);
   cart.push(rollObject);
   const cartArrayString = JSON.stringify(cart);
   localStorage.setItem('storedCart', cartArrayString);
   console.log(JSON.parse(localStorage.getItem('storedCart')));
}

//Check if a cart exists in local storage or not
let cart;
if (localStorage.getItem('storedCart') == null) {
   cart = [];
} 
else {
   cart = JSON.parse(localStorage.getItem('storedCart'));
}

// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

// Finally, we can access the parameter we want using the "get" method:
const rollType = params.get('roll');

var basePrice = parseFloat(rolls[rollType].basePrice);

//Setting price for detail page on load
let totalPrice = document.querySelector('#total-price');
totalPrice.innerText = '$' + basePrice.toFixed(2);

//Setting header text for detail page on load
let detailHeader = document.querySelector('#detail-header');
detailHeader.innerText = rollType + ' Cinnamon Roll';

//Setting image for detail page on load
let detailImage = document.querySelector('.detail-img');
detailImage.src = rolls[rollType].imageFile;

// list of glazing javascript objects
let glazingOptions = [
   {
      option: 'Keep original',
      priceAdaptation: 0,
   },
   {
      option: 'Sugar milk',
      priceAdaptation: 0,
   },
   {
      option: 'Vanilla milk',
      priceAdaptation: 0.5,
   },
   {
      option: 'Double chocolate',
      priceAdaptation: 1.5,
   },
];

// When the page loads, find the select element.
let glazingSelect = document.querySelector('#glazing-select');

for (let i = 0; i < glazingOptions.length; i++) {
   // Adding the select element for each of the glazing options
   var option = document.createElement('option');
   option.text = glazingOptions[i].option;
   option.value = glazingOptions[i].priceAdaptation;
   glazingSelect.add(option);
}

// list of size javascript objects
let sizeOptions = [
   {
      option: '1',
      priceAdaptation: 1,
   },
   {
      option: '3',
      priceAdaptation: 3,
   },
   {
      option: '6',
      priceAdaptation: 5,
   },
   {
      option: '12',
      priceAdaptation: 10,
   },
];

 // When the page loads, find the select element.
let sizeSelect = document.querySelector('#size-select');

for (let i = 0; i < sizeOptions.length; i++) {
   // Adding the select element for each of the size options
   var option = document.createElement('option');
   option.text = sizeOptions[i].option;
   option.value = sizeOptions[i].priceAdaptation;
   sizeSelect.add(option);
}

