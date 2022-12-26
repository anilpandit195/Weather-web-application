const API_KEY = `8ae8f397b516b102e2fb4ba9223e1067`
const form = document.querySelector("form")
const search = document.querySelector("#input")
const weather = document.querySelector("#api")

    const getWeather = async(search) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric&lang=hi`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    console.log(JSON.stringify(data, null,'\t'));
    return showWeather(data)
};
const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2 class="tempr">${data.main.temp} ℃ / ${data.name} </h2>
            <h6"> ${data.weather[0].main}/${data.weather[0].description} </h6>
            <h6> Humidity ${data.main.humidity} </h6>
            <p> </p>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
    
)