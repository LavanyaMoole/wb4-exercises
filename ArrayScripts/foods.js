let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }

];
let subtotal=0;
let total=0;

for(let i=0;i<lunch.length;i++){
    subtotal+=lunch[i].price;
}
console.log(subtotal)
let tax=0.08*subtotal;
let tip=0.18*subtotal;
total=(subtotal+tax+tip).toFixed(2);
console.log(`Total amount: ${total}`)
