const inputBox = document.querySelector(".inputBox")
const searchBtn = document.querySelector(".search-btn")
const weatherImg = document.querySelector(".weatherImg")
const api_key = "454dbdcc9a5ca6779d2c5c6e9b18978f"

async function getWeather(city) {
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
const respons = await fetch(url)
const data = await respons.json()


console.log(data)

// document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp - 273.15)}°C` 
document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273.15) + "°C" 
document.querySelector('.city').innerHTML =  data.name   
document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr"



if(data.weather[0].main == "Clouds"){
    weatherImg.src = "./images/clouds.png"
}
else if(data.weather[0].main == "Clear"){
    weatherImg.src = "./images/clear.png"
}
else if(data.weather[0].main == "Rain"){
    weatherImg.src = "./images/rain.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherImg.src = "./images/drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    weatherImg.src = "./images/mist.png"
}

}
searchBtn.addEventListener('click', () => {
    getWeather(inputBox.value)
    inputBox.value = ""

})



// const api_key = "454dbdcc9a5ca6779d2c5c6e9b18978f"
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

// const weatherData = fetch(url)


// console.log(respons)
