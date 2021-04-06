// We are going to communicate to an api and display the stuff on the screen

// I need to fetch from an api
// What does fetch require me to write?
// First Goal is to see if you can get the information (Postman) and show it on the screen

// let response = fetch("https://pokeapi.co/api/v2/pokemon?&limit=5")
// Thenable object

// resolution
// .then((responseWeGetBack)=> responseWeGetBack.json())
// .then((data) => data)
const mainContainer = document.querySelector(".main-container");

const fetchPokemonData = async () => {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?&limit=30");
  let json = await response.json();
  console.log(json);
  counter = 1
  for (let pokemon of json.results) {
    console.log(pokemon);
    const pokemonContainer = document.createElement("div");
    pokemonContainer.className = "pokemon"
    const nameOfPokemon = document.createElement("h3");
    const img = document.createElement("img");
    img.height = "250"
    img.width = "250"
    img.src = `https://pokeres.bastionbot.org/images/pokemon/${counter}.png`;
    nameOfPokemon.innerHTML = pokemon.name;
    pokemonContainer.append(nameOfPokemon, img)
    mainContainer.append(pokemonContainer);
    counter += 1;
  }
  // const nameOfPokemon = document.createElement("h3");
  // console.log(json);
  // nameOfPokemon.innerHTML = json.results[0].name;
  // nameOfPokemon.innerHTML = json.results[1].name;
  // nameOfPokemon.innerHTML = json.results[2].name;
  // nameOfPokemon.innerHTML = json.results[3].name;
  // nameOfPokemon.innerHTML = json.results[4].name;
  // mainContainer.append(nameOfPokemon);
  return json;
};
const submit = document.querySelector("button");
submit.addEventListener("click", ()=>fetchPokemonData());
// rejection
// .catch(console.log("woops, error"));
// console.log(response)


// Fruit Example
// examples about async, concurrency, and async await
// const getFruit = async (name) => {
//   const fruits = {
//     pineapple: "🍍",
//     peach: "🍑",
//     strawberry: "🍓",
//   };

//   return fruits[name]
// };

// console.log(getFruit("pineapple"));

// const makeSmoothie = async () => {
//   const firstFruit = await getFruit("peach");
//   const secondFruit = await getFruit("pineapple");
  
//   return [firstFruit, secondFruit];
// };

// console.log("first run", makeSmoothie());

// whereas with promise.all, we will make the program finish both promises because we are running them both concurrently

// const makeSmoothieFaster = async () => {
//   const firstFruit = await getFruit("peach");
//   const secondFruit = await getFruit("pineapple");
//   const smoothie = await Promise.all([firstFruit, secondFruit]);
//   return smoothie;
// };
// console.log(makeSmoothieFaster());

// const fruitRace = async () => {
//   const firstFruit = getFruit("peach");
//   const secondFruit = getFruit("pineapple");
//   const winner = await Promise.race([firstFruit, secondFruit]);
//   console.log(winner);
//   return winner;
// };

// fruitRace();