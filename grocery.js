var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
var groceries = [
    new Grocery('Milk', 2, 2.55),
    new Grocery('Eggs', 12, 3.99),
    new Grocery('Orange Juice', 1, 5.99)
];
var output = "";
// looping over the groceries to create HTML output
for (var i = 0; i < groceries.length; i++) {
    output = output.concat("<li>" +
        "Name: " + groceries[i].name + ", " +
        "Quantity: " + groceries[i].quantity + ", " +
        "Price: " + groceries[i].price + ", " +
        "</li>");
    console.log("index: " + i);
}
console.log("output: " + output);
// writing the output to the screen
document.getElementById("groceries").innerHTML = "<ol>" + output + "</ol>";
