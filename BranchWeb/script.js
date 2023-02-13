

const setWelcomeMessage = name => {

    button = document.querySelector("#buttopig")
    button.addEventListener("click", () => {
        document.querySelector("#enter-message").innerHTML = "<strong>This is the message I chose to enter</strong>"
    })
}





setWelcomeMessage("Daarla")
setWelcomeMessage("phrabu")