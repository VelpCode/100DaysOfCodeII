

const setWelcomeMessage = name => {

    button = document.querySelector("#buttopig")
    button.addEventListener("click", () => {
        document.querySelector("#enter-message").innerHTML = "<strong>You have cleared your list!</strong>"
        document.querySelector("#shopping-list").innerHTML = " ";
    })
}





setWelcomeMessage("Daarla")
setWelcomeMessage("phrabu")