// total price of products

const products = [
  { name: "Rice", price: 500, weight: "8 kg" },
  { name: "Milk", price: 300, weight: "5 kg" },
  { name: "Alu", price: 180, weight: "6 kg" },
  { name: "Meat", price: 2500, weight: "3 kg" },
];

function shoppingTotal(products) {
  let total = 0;
  for (const product of products) {
    total = total + product.price;
  }
  return total;
}

const total = shoppingTotal(products);
console.log("Shopping total is :", total);


