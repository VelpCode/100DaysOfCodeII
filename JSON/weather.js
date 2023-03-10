import FetchWrapper from "./fetchwrappers";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app")

export const getWeather = city => {

    API.get(`/weatherstack/${city}.json`).then(data => {
        console.log(data)//visualize obj
        showTemperature(data.current.temperature)
    })


}

const result = document.querySelector(#result);
const showTemperature = showTemperature => {
    result.textContent = `It's ${temperature} degrees celcius.`;
}