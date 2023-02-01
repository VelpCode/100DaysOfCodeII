const initGetWeather = () => {

    const button = document.querySelector("#my-button")
    button.addEventListener("click", () => {
        button.setAttribute("disabled", "disabled")
        button.textContent = "Loading..."
    })
}

initGetWeather();