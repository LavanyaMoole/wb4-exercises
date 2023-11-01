let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Chocolate Bar", price: 1.99 },
    { product: "Lollipop", price: 0.99 },
    { product: "Jelly Beans", price: 4.29 },
    { product: "Caramel Popcorn", price: 3.49 },
    { product: "Licorice", price: 2.49 },
    { product: "Hard Candy", price: 1.49 },
];

products.sort((p1,p2)=>{
    let product1=p1.product.toLowerCase();
   let product2= p2.product.toLowerCase();
   if (product1 < product2) {
    return -1;
} else if (product1 > product2) {
    return 1;
} else {
    return 0;
}
})

console.log("Candie after sorting:");
console.table(products);