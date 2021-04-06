// We are going to communicate to an api and display the stuff on the screen

// I need to fetch from an api
// What does fetch require me to write?
// First Goal is to see if you can get the information (Postman) and show it on the screen

let response = fetch("https://pokeapi.co/api/v2/pokemon?&limit=5")
// Thenable object

// resolution
.then((responseWeGetBack)=> responseWeGetBack.json())
.then((data) => data)

const fetchPokemonData = async () => {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=5");
  console.log(response)
  let convertedResponse = await response.json();
  console.log(convertedResponse);
};
fetchPokemonData();
// rejection
// .catch(console.log("woops, error"));
// console.log(response)


// Fruit Example
// examples about async, concurrency, and async await
const getFruit = async (name) => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  return fruits[name]
};

// console.log(getFruit("pineapple"));

const makeSmoothie = async () => {
  const firstFruit = await getFruit("peach");
  const secondFruit = await getFruit("pineapple");
  
  return [firstFruit, secondFruit];
};

// console.log("first run", makeSmoothie());

// whereas with promise.all, we will make the program finish both promises because we are running them both concurrently

const makeSmoothieFaster = async () => {
  const firstFruit = await getFruit("peach");
  const secondFruit = await getFruit("pineapple");
  const smoothie = await Promise.all([firstFruit, secondFruit]);
  return smoothie;
};
// console.log(makeSmoothieFaster());

const fruitRace = async () => {
  const firstFruit = getFruit("peach");
  const secondFruit = getFruit("pineapple");
  const winner = await Promise.race([firstFruit, secondFruit]);
  console.log(winner);
  return winner;
};

fruitRace();