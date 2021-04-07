const mainContainer = document.querySelector(".main-container");

const fetchPeople = async () => {
  let response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30");
  let json = await response.json();
  console.log(json);
  counter = 0
  for (let people of json.data) {
    console.log(people)
    const card = document.createElement("div");
    card.className = "card"
    const personName = document.createElement("h3");
    const email = document.createElement("h3");
    const phone = document.createElement("h3");
    const img = document.createElement("img");
    img.height = "160";
    img.width = "240";
    img.src = `http://placeimg.com/640/480/people/${counter}`;
    personName.innerHTML = json.data[counter]["firstname"] + " " + json.data[counter]["lastname"];
    email.innerHTML = json.data[counter]["email"];
    phone.innerHTML = json.data[counter]["phone"];
    card.append(img, personName, email, phone);
    mainContainer.append(card);
    counter +=1
  }
  return json;
};

const submit = document.querySelector("button");
submit.addEventListener("click", ()=>fetchPeople());