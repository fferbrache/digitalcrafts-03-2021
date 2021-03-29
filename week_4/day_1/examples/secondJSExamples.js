// String interpolation
// print(f"blah blah blah {interpolateThis}")
// print("%s" % valueToInterpolate)

let height = "6ft";
let weight = "140lbs";
// method 1 of string interpolation
// let JoesDimensions = "Joes height is " + height + " and he weighs " + weight;
// console.log(JoesDimensions);

// method 2 of string interpolation
// use backticks ` S{} `
let string = 'string';
let string2 = "string";
let string3 = `string`;
let number = false

console.log(typeof string)
console.log(typeof number)
let JoesDimensions = `Joes height is ${height} and he weighs ${weight}`;
console.log(JoesDimensions);

// for in is for objects
let singlePizza = {
    crust: 'thin',
    toppings: ["cheese", "pepperoni", "spinach", "onion", "anchovies", "feta", "cream cheese", "mushrooms", "pineapple", "quinoa"],
    size: "large",
    sauce: ["marinara", "alfredo"], 
};

for (const topping of singlePizza.toppings) {
  console.log(topping);
};
// for in loop, iterates over an object, returns the keys as strings
for (const pizza in singlePizza) {
  // this is how to access the key
  console.log("This is the key: ", pizza);
  // this is how you access the value of the key you are currently looping on
  console.log("These are the values: ", singlePizza[pizza]);
};
console.log(Object.keys(singlePizza));
console.log(singlePizza.crust);

let cars = ["Subaru", "Audi", "Honda", "BMW"];
// for of is for arrays
for (const car of cars) {
  console.log("this is a ", car);
};

