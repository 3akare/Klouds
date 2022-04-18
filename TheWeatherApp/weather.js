let weather = {
    // "apiKey":"1dff06585ef540ec911191150222603",
    fetchWeather: function(city){
        fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=1dff06585ef540ec911191150222603&q=${city}&days=1&aqi=yes&alerts=no`
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name, localtime} = data.location;
        const {icon, text} = data.current.condition;
        const {humidity,wind_kph,gust_kph,pressure_mb,uv,feelslike_c,temp_c,cloud} = data.current;
        const {sunrise, sunset} = data.forecast.forecastday[0].astro



        document.querySelector("#sunrise").innerText = sunrise
        document.querySelector("#sunset").innerText = sunset
        document.querySelector("#city").innerText = name
        document.querySelector("#time").innerText = localtime
        document.querySelector("#cloud").innerText = cloud
        document.querySelector("#pressure").innerText = pressure_mb + "mb"
        document.querySelector("#uv").innerText = uv
        document.querySelector("#feels").innerText = "feels like " + feelslike_c + "°C"
        document.querySelector("#icon").src = icon
        document.querySelector("#degree").innerText =  Math.round(temp_c) + "°C"
        document.querySelector("#detail").innerText = text
        document.querySelector("#gust").innerText = gust_kph
        document.querySelector("#hummy").innerText = humidity + "%"
        document.querySelector("#wind").innerText = wind_kph+ "Km/h"
    },

    needWeather: function(city){
        fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=1dff06585ef540ec911191150222603&q=${city}&days=1&aqi=yes&alerts=no`
        )
        .then((response) => response.json())
        .then((data) => this.giveWeather(data))
    },
    giveWeather: function(data){
        // const {temp_c} = data.forecast.forecastday[0].hour[0];
        const hour0 = data.forecast.forecastday[0].hour[0].temp_c;
        const icon_0 = data.forecast.forecastday[0].hour[0].condition.icon;
        const hummy_0 = data.forecast.forecastday[0].hour[0].humidity;
        // console.log(icon_0)
        // const hour1 = data.forecast.forecastday[0].hour[1].temp_c;
        const hour2 = data.forecast.forecastday[0].hour[2].temp_c;
        const icon_2 = data.forecast.forecastday[0].hour[2].condition.icon;
        const hummy_2 = data.forecast.forecastday[0].hour[2].humidity;
        // const hour3 = data.forecast.forecastday[0].hour[3].temp_c;
        const hour4 = data.forecast.forecastday[0].hour[4].temp_c;
        const icon_4 = data.forecast.forecastday[0].hour[4].condition.icon;
        const hummy_4 = data.forecast.forecastday[0].hour[4].humidity;
        // const hour5 = data.forecast.forecastday[0].hour[5].temp_c;
        const hour6 = data.forecast.forecastday[0].hour[6].temp_c;
        const icon_6 = data.forecast.forecastday[0].hour[6].condition.icon;
        const hummy_6 = data.forecast.forecastday[0].hour[6].humidity;
        // const hour7 = data.forecast.forecastday[0].hour[7].temp_c;
        const hour8 = data.forecast.forecastday[0].hour[8].temp_c;
        const icon_8 = data.forecast.forecastday[0].hour[8].condition.icon;
        const hummy_8 = data.forecast.forecastday[0].hour[8].humidity;
        // const hour9 = data.forecast.forecastday[0].hour[9].temp_c;
        const hour10 = data.forecast.forecastday[0].hour[10].temp_c;
        const icon_10 = data.forecast.forecastday[0].hour[10].condition.icon;
        const hummy_10 = data.forecast.forecastday[0].hour[0].humidity;

        const hour12 = data.forecast.forecastday[0].hour[12].temp_c;
        const icon_12 = data.forecast.forecastday[0].hour[12].condition.icon;
        const hummy_12 = data.forecast.forecastday[0].hour[12].humidity;

        const hour14 = data.forecast.forecastday[0].hour[14].temp_c;
        const icon_14 = data.forecast.forecastday[0].hour[14].condition.icon;
        const hummy_14 = data.forecast.forecastday[0].hour[14].humidity;

        const hour16 = data.forecast.forecastday[0].hour[16].temp_c;
        const icon_16 = data.forecast.forecastday[0].hour[16].condition.icon;
        const hummy_16 = data.forecast.forecastday[0].hour[16].humidity;

        const hour18 = data.forecast.forecastday[0].hour[18].temp_c;
        const icon_18 = data.forecast.forecastday[0].hour[18].condition.icon;
        const hummy_18 = data.forecast.forecastday[0].hour[18].humidity;
        
        const hour20 = data.forecast.forecastday[0].hour[20].temp_c;
        const icon_20 = data.forecast.forecastday[0].hour[20].condition.icon;
        const hummy_20 = data.forecast.forecastday[0].hour[20].humidity;

        const hour22 = data.forecast.forecastday[0].hour[22].temp_c;
        const icon_22 = data.forecast.forecastday[0].hour[22].condition.icon;
        const hummy_22 = data.forecast.forecastday[0].hour[22].humidity;


        document.querySelector("#hour0").innerText = hour0 + " °C"
        document.querySelector("#hummy0").innerText = hummy_0 + "%"
        document.querySelector("#icon-0").src = icon_0

        document.querySelector("#hour2").innerText = hour2 + " °C"
        document.querySelector("#hummy2").innerText = hummy_2 + "%"
        document.querySelector("#icon-2").src = icon_2

        document.querySelector("#hour4").innerText = hour4 + " °C"
        document.querySelector("#hummy4").innerText = hummy_4 + "%"
        document.querySelector("#icon-4").src = icon_4

        document.querySelector("#hour6").innerText = hour6 + " °C"
        document.querySelector("#hummy6").innerText = hummy_6 + "%"
        document.querySelector("#icon-6").src = icon_6

        document.querySelector("#hour8").innerText = hour8 + " °C"
        document.querySelector("#hummy8").innerText = hummy_8 + "%"
        document.querySelector("#icon-8").src = icon_8

        document.querySelector("#hour10").innerText = hour10 + " °C"
        document.querySelector("#hummy10").innerText = hummy_10 + "%"
        document.querySelector("#icon-10").src = icon_10

        document.querySelector("#hour12").innerText = hour12 + " °C"
        document.querySelector("#hummy12").innerText = hummy_12 + "%"
        document.querySelector("#icon-12").src = icon_12

        document.querySelector("#hour14").innerText = hour14 + " °C"
        document.querySelector("#hummy14").innerText = hummy_14 + "%"
        document.querySelector("#icon-14").src = icon_14

        document.querySelector("#hour16").innerText = hour16 + " °C"
        document.querySelector("#hummy16").innerText = hummy_16 + "%"
        document.querySelector("#icon-16").src = icon_16

        document.querySelector("#hour18").innerText = hour18 + " °C"
        document.querySelector("#hummy18").innerText = hummy_18 + "%"
        document.querySelector("#icon-18").src = icon_18

        document.querySelector("#hour20").innerText = hour20 + " °C"
        document.querySelector("#hummy20").innerText = hummy_20 + "%"
        document.querySelector("#icon-20").src = icon_20

        document.querySelector("#hour22").innerText = hour22 + " °C"
        document.querySelector("#hummy22").innerText = hummy_22 + "%"
        document.querySelector("#icon-22").src = icon_22
    },
    search: function(){
        this.fetchWeather(document.querySelector("#search-bar").value)
        this.needWeather(document.querySelector("#search-bar").value)
    }
}

document.querySelector(".search #search-btn").addEventListener("click", function(){
    weather.search();
})

weather.fetchWeather("Abuja")
weather.needWeather("Abuja")

document.querySelector("#search-bar").addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        weather.search()
    }
})
