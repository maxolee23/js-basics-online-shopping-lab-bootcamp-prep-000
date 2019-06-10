var cart;
"use strict"

var cart = [];

function getCart() {
 return cart;
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {};
  item_object[item] = price
  cart.push(item_object)
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item])
      }
    }
    console.log("In your cart, you have " + items.join(", ") + ".");
  }
}

function removeFromCart(item) {
  // write your code here
  var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
function total() {
  let t = 0