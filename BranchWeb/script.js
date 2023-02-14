

const setWelcomeMessage = name => {

    button = document.querySelector("#buttopig")
    button.addEventListener("click", () => {
        document.querySelector("#enter-message").innerHTML = "<strong>You have cleared your list!</strong>"
        document.querySelector("#shopping-list").innerHTML = " ";
    })
}

const banner = document.querySelector("#banner");
banner.getAttribute("id");
banner.getAttribute("disabled");

const button = document.querySelector("#login");
button.getAttribute("disbaled")
button.removeAttribute("disabled")
button.setAttribute("id", "navbar")




setWelcomeMessage("Daarla")
setWelcomeMessage("phrabu")