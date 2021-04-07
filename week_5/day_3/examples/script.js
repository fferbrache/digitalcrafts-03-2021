$(document).ready(() => {
  console.log("We are in jquery");
});

const divContainer = document.createElement("div");
console.log(typeof divContainer);


const $jdivContainer = $("<div>");

const $header3 = $("<h3>", {
  text: "Joe is Here",
});

$jdivContainer.append($header3);
console.log($jdivContainer);
$(document.body).append($jdivContainer);