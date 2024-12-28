let citydiv= document.getElementById("city");
let temperature
let tempdiv=document.getElementById("temp")
let condiv=document.getElementById("cond")
let humiddiv=document.getElementById("humid")
let winddiv=document.getElementById("windspeed")
let city=document.getElementById("cityInput")
let imagediv=document.getElementById("image")






 
async function getData(cityName) {
   try { await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=244006e372fb520e56e50b3032f7bcf1`)
   .then((res) => res.json() ).then((data) => weatherData=data); 
   temperature=weatherData.main.temp -273.5
   console.log(weatherData)

   citydiv.innerHTML=`${cityName}`
   tempdiv.innerHTML=`${Math.round(temperature)}°C`
   condiv.innerHTML=`${weatherData.weather[0].main}`
   humiddiv.innerHTML=`<i class="fa-solid fa-droplet me-2"></i> Humidity : ${weatherData.main.humidity}%`
   winddiv.innerHTML=`<i class="fa-solid fa-wind me-2"></i> Wind speed : ${weatherData.wind.speed} km/h`;

   if(Math.round(temperature)>30){
    tempdiv.style.color="orange"
   }else{
    tempdiv.style.color="#04054d"
   }

   if(weatherData.weather[0].main === "Clear sky"){
   imagediv.src="sun.png"

   }
   else if (weatherData.weather[0].main === "Clouds"){
   imagediv.src="clouds.png"

   }

   else if(weatherData.weather[0].main === "Rain"){

   imagediv.src= "rainy-day.png"
   }
   else if(weatherData.weather[0].main === "Thunderstorm"){
   imagediv.src="storm.png"

   }
   else if(weatherData.weather[0].main === "Snow"){
   imagediv.src="snow.png"

   }
   else if(weatherData.weather[0].main === "Mist"){
   imagediv.src="mist.png"

   }
   else if(weatherData.weather[0].main === "Haze"){
    imagediv.src= "mist.png"

   }



   } catch (error) {
       console.log(error)
   }
}

function searchCity(){
    getData(city.value)
}

getData("karachi")







