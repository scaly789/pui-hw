var basePrice = 2.49;

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
