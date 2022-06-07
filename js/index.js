// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  
  let priceElement= product.querySelector(".price span")
  let price= Number(priceElement.innerText)
  let quantityElement= product.querySelector(`.quantity input`)
  let quantity= Number(quantityElement.value)
  let subtotal = price * quantity
  let subtotalElement= product.querySelector(".subtotal span")
  subtotalElement.innerText = subtotal
  return subtotal


//let price = product.querySelector('.price span').innerHTML
 //let quantity = product.querySelector('.quantity input').value

  //let total = price * quantity

  //product.querySelector('.subtotal span').innerHTML = total
  //return total

}




function calculateAll() {

  let total = 0
  let allProducts = document.querySelectorAll(".product")
  for (let product of allProducts){
   total +=  updateSubtotal(product)
  
  }
  
  // end of test

  // ITERATION 3
  
  totalElement = document.querySelector("#total-value span")
  totalElement.innerText = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
