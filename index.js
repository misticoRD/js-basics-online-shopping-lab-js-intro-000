var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let price = Math.floor(Math.random() * 100) + 1;
 cart.push({ itemName: item, itemPrice:price, });

 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    let itemsList = [];
    for (let i = 0; i < cart.length; i++) {
      for (let item in cart[i]) {
        itemsList.push(`${itemName}   at ${cart[i][item]}.`)
      }
    }
    return "In your cart, you have " + itemsList.join(", ") + ".";
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
