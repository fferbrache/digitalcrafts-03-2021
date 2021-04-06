const mainDiv = document.querySelector(".main-container")
const submit = document.querySelector(".button")
const getWeather = async () => {
  const zipCode = document.querySelector(".zip").value
  console.log(zipCode)
  const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=6d6b1ed89ba87c840b17ab8a094b8ef1&units=imperial`)
  const formattedJson = await data.json()
  console.log(formattedJson)

  const city = document.createElement("h2")
  city.className = "city"
  city.innerHTML = "Location"
  const cityName = document.createElement("h5")
  cityName.innerHTML = formattedJson.name 
  city.append(cityName)

  const temp = document.createElement("h2")
  temp.className = "temp"
  temp.innerHTML = "Current Temperature"
  const tempValue = document.createElement("h5")
  tempValue.innerHTML = formattedJson.main.temp 
  temp.append(tempValue)

  const humidity = document.createElement("h2")
  humidity.className = "humidity"
  humidity.innerHTML = "Humidity"
  const humidityValue = document.createElement("h5")
  humidityValue.innerHTML = formattedJson.main.humidity
  humidity.append(humidityValue)

  const map = document.createElement("iframe")
  map.width = "600"
  map.height = "450"
  map.style.border = "0"
  map.loading = "lazy"
  map.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCgYqkp1_NlaPC-HiJL7q5Guxhg-kLSuyE
  &q=,${cityName}+GA`


  mainDiv.append(city, map, temp, humidity)
}
submit.addEventListener("click", ()=> getWeather())