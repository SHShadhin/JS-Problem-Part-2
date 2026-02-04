const products = [
  { name: "Rice", price: 500, quantity : 3 },
  { name: "Milk", price: 300, quantity : 3},
  { name: "Alu", price: 180, quantity : 1},
  { name: "Tomato", price: 5, quantity : 20},
];


function shoppingCart (producs) {
    let total = 0;
    for (const product of products) {
        const productCost = product.price * product.quantity;
        total = total + productCost;
    }
    return total ;
}

const cartTotalPrice = shoppingCart(products);
console.log('Shopping cart total price is :', cartTotalPrice);