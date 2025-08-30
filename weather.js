const apiKey = "ee502b712429d0b5421b633963c4e638";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
   const response = await fetch (apiUrl + city + `&appid=${apiKey}`)
   if(response.status == 404){
       document.querySelector(".error").style.display = "block"
   }else{
       const data = await response.json();
       console.log(data)
       document.querySelector(".city").innerHTML =  data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
       if(data.weather[0].main == "Clear"){
           weatherIcon.src = "clear.png"
       }else if(data.weather[0].main == "Clouds"){
           weatherIcon.src = "cloud.png"
       }else if(data.weather[0].main == "Rain"){
           weatherIcon.src = "rain.png"
       }
   }
}

searchBtn.addEventListener("click", ()=>{
   checkWeather(searchBox.value)
})
