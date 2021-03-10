class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

let groceries: Array<Grocery> = [
    new Grocery('Milk', 2, 2.55),
    new Grocery('Eggs', 12, 3.99),
    new Grocery('Orange Juice', 1, 5.99)
]

let output: string = "";
// looping over the groceries to create HTML output
for (let i = 0; i < groceries.length; i++) {
    output = output.concat(
        "<li>" +
        "Name: " + groceries[i].name + ", " +
        "Quantity: " + groceries[i].quantity + ", " +
        "Price: " + groceries[i].price + ", " +
        "</li>"
    );
    console.log("index: " + i);
}

console.log("output: " + output);

// writing the output to the screen
document.getElementById("groceries").innerHTML = "<ol>" + output + "</ol>";
