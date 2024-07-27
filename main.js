

//template literal


const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

//let eltiempo = "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=26d63fbd7ac4d9bdc5db99c0e77a4c3c&units=metric&lang=es";
let eltiempo = "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=26d63fbd7ac4d9bdc5db99c0e77a4c3c&units=metric&lang=es";



fetch(eltiempo)
.then((response) => response.json())
.then((data) => {
console.log(data);
console.log(data.name);//ciudad
console.log(data.main.temp);//temperatura
console.log(data.weather[0].description);

document.getElementById("ciudad").innerHTML = data.name;
document.getElementById("temp").innerHTML = data.main.temp + "º";
document.getElementById("icon").innerHTML = "<img src='https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'>";
document.getElementById("humedad").innerHTML = data.main.humidity + "%";
document.getElementById("viento").innerHTML = data.wind.speed;




})