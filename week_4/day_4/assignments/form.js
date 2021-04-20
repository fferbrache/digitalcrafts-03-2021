function tipCalc() {
  const billAmount = Number(document.querySelector("#bill").value)
  console.log(typeof billAmount)
  const tipAmount = Number(document.querySelector("#tip").value)
  console.log(typeof tipAmount)
  const totalAmount = tipAmount * .01 * billAmount + billAmount
  console.log(typeof totalAmount)
  const target = document.querySelector(".total")
  target.innerHTML = totalAmount
  const newListItem = document.createElement("li")
  newListItem.innerText = totalAmount - billAmount
  console.log(tipAmount)
  const list = document.getElementById("list")
  list.append(newListItem)
}

const form = document.querySelector("form");

const validateForm = (name) => {
  console.log(`Your name is ${name}`);
  myRegex = /[A-Za-z]+/;
  return myRegex.test(name);
};

form.addEventListener("submit", (event) => {
  const textInput = document.querySelector("#textInput");
  if(!validateName(textInput.value) === false){
    event.preventDefault();
    alert("Please enter in a valid name that doesn't contain numbers");
  }
});

// Convert your tip calc to now be a form that runs a check of the input fields to make sure they are valid numbers.  Use JS for this, and add the eventlistener using JS as well.  Use Regex to find the correct pattern to compare your text to