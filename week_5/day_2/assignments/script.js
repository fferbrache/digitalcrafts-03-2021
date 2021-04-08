const tgtPeopleContainer = document.querySelector(".people-container");
const header = document.querySelector(".header");

const fetchPeople = async () => {
  let response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30");
  let json = await response.json();
  counter = 0
  for (let people of json.data) {
    const tgtPeople = document.querySelector(".people-container")
    const peopleCard = document.createElement("div");
    peopleCard.className = "people-card"
    const personName = document.createElement("h3");
    const email = document.createElement("h3");
    const phone = document.createElement("h3");
    const img = document.createElement("img");
    img.height = "80";
    img.width = "120";
    img.src = `http://placeimg.com/640/480/people/${counter}`;
    personName.innerHTML = json.data[counter]["firstname"] + " " + json.data[counter]["lastname"];
    email.innerHTML = json.data[counter]["email"];
    phone.innerHTML = json.data[counter]["phone"];
    peopleCard.append(img, personName, email, phone);
    tgtPeople.append(peopleCard);
    counter +=1
  }
  return json;
};

const submitPeople = document.querySelector(".people-button");
submitPeople.addEventListener("click", ()=>fetchPeople());

const tgtBookContainer = document.querySelector(".book-container");
const fetchBooks = async () => {
  let response = await fetch("https://fakerapi.it/api/v1/books?_quantity=30");
  let json = await response.json();
  counter = 0
  for (let people of json.data) {
    const tgtBooks = document.querySelector(".book-container")
    const bookCard = document.createElement("div");
    bookCard.className = "book-card"
    const title = document.createElement("h3");
    const author = document.createElement("h3");
    const img = document.createElement("img");
    img.height = "80";
    img.width = "120";
    img.src = `http://placeimg.com/640/480/${counter}`;
    title.innerHTML = json.data[counter]["title"];
    author.innerHTML = json.data[counter]["author"];
    bookCard.append(img, title, author);
    tgtBooks.append(bookCard);
    counter +=1
  }
  return json;
};

const submitBooks = document.querySelector(".book-button");
submitBooks.addEventListener("click", ()=>fetchBooks());

const clearSelection = document.querySelector(".clear-button")
clearSelection.addEventListener("click", () => location.reload())