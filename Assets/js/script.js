const apiKey = '10729e72749b41334c190a66eee113a4';
let cityName = document.getElementById("citySearch")
const forecastButton = document.getElementById("forecastButton")
const searchHistoryList = document.getElementById("searchHistoryList")




function saveCityToLocalStorage(cityNameValue) {
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory"))||[]
    if (!searchHistory.includes(cityNameValue)) {
        searchHistory.push(cityNameValue);
    }

    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

function getSearchHistory() {
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    searchHistoryList.innerHTML = ""
    for (let index = 0; index < searchHistory.length; index++) {
        const button = document.createElement("button")
        button.textContent = searchHistory[index]
        searchHistoryList.appendChild(button)
        button.addEventListener("click", getWeather)
    }
}



forecastButton.addEventListener("click", getWeather)
    function getWeather(){
        console.log(this.textContent)
        if (this.textContent != "GET FORECAST") {
            cityName.value = this.textContent
        }
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=imperial`
    fetch(apiURL)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        document.getElementById("nameDate").textContent = `City Name: ${data.name}`
        document.getElementById("temp").textContent = 'Tempature: '+data.main.temp
        document.getElementById("humidity").textContent ='Humidity: '+data.main.humidity
        document.getElementById("wind").textContent = 'Wind: '+data.wind.speed
        document.getElementById("weatherIcon").src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png"
        saveCityToLocalStorage(cityName.value);
        getSearchHistory();
    })
const apiForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&appid=${apiKey}&units=imperial`
fetch(apiForecast)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.getElementById("nameDate1").textContent = `${data.list[8].dt_txt.split(" ")[0]}`
    document.getElementById("temp1").textContent = 'Tempature: '+data.list[8].main.temp
    document.getElementById("humidity1").textContent ='Humidity: '+data.list[8].main.humidity
    document.getElementById("wind1").textContent = 'Wind: '+data.list[8].wind.speed
    document.getElementById("weatherIcon1").src = "https://openweathermap.org/img/wn/"+data.list[8].weather[0].icon+".png"

    document.getElementById("nameDate2").textContent = `${data.list[16].dt_txt}`
    document.getElementById("temp2").textContent = 'Tempature: '+data.list[16].main.temp
    document.getElementById("humidity2").textContent ='Humidity: '+data.list[16].main.humidity
    document.getElementById("wind2").textContent = 'Wind: '+data.list[16].wind.speed
    document.getElementById("weatherIcon2").src = "https://openweathermap.org/img/wn/"+data.list[16].weather[0].icon+".png"

    document.getElementById("nameDate3").textContent = `${data.list[24].dt_txt}`
    document.getElementById("temp3").textContent = 'Tempature: '+data.list[24].main.temp
    document.getElementById("humidity3").textContent ='Humidity: '+data.list[24].main.humidity
    document.getElementById("wind3").textContent = 'Wind: '+data.list[24].wind.speed
    document.getElementById("weatherIcon3").src = "https://openweathermap.org/img/wn/"+data.list[24].weather[0].icon+".png"

    document.getElementById("nameDate4").textContent = `${data.list[32].dt_txt}`
    document.getElementById("temp4").textContent = 'Tempature: '+data.list[32].main.temp
    document.getElementById("humidity4").textContent ='Humidity: '+data.list[32].main.humidity
    document.getElementById("wind4").textContent = 'Wind: '+data.list[32].wind.speed
    document.getElementById("weatherIcon4").src = "https://openweathermap.org/img/wn/"+data.list[32].weather[0].icon+".png"

    document.getElementById("nameDate5").textContent = `${data.list[39].dt_txt}`
    document.getElementById("temp5").textContent = 'Tempature: '+data.list[39].main.temp
    document.getElementById("humidity5").textContent ='Humidity: '+data.list[39].main.humidity
    document.getElementById("wind5").textContent = 'Wind: '+data.list[39].wind.speed
    document.getElementById("weatherIcon5").src = "https://openweathermap.org/img/wn/"+data.list[39].weather[0].icon+".png"

})
}
getSearchHistory()
console.log("test")
console.log(localStorage)