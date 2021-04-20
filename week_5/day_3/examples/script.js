$(document).ready(() => {
  console.log("We are in jquery");
});

const divContainer = document.createElement("div");
console.log(typeof divContainer);


const $jdivContainer = $("<div>");

const $header3 = $("<h3>", {
  text: "Joe is Here",
});
// target csss on a jquery element
$header3.css("background-color", "red");

$jdivContainer.append($header3);
console.log($jdivContainer);
$(document.body).append($jdivContainer);

// button.addEventListener('click', () => {})

// $btn.on('click', () => {})

// fetch("url", {})

// PROMISE is a thenable Object
// .then() is for RESOLUTION
// .catch() is for REJECTION

$ajax({
  url: "https://pokeapi.co/api/v2/pokemon/ditto",
  // header {
  //   Accept: "application/json",
  // },
}).then((res) => {
  console.log(res.name);
})
.catch((valueReturned) => {
  console.log(valueReturned)
});