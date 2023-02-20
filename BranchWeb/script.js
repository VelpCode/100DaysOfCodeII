

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
button.getAttribute("disbaled");
button.removeAttribute("disabled");
button.setAttribute("id", "navbar");

const positions = document.querySelector("#job-positions");
positions.insertAdjacentHTML("afterbegin", `<div class = "position">2015-2020</div>`);
positions.insertAdjacentHTML("beforeend", `<div class = "positiontwo">Amma Nana</div>`);

const davidbut = document.querySelector("#david")
davidbut.addEventListener("click", event => {
    console.log(davidbut.textContent)
}, {
    once: true
})

const fatbutton = document.querySelector("#big-fat")
const handleClick = () => {
    console.log(event.currentTarget.textContent);
}

fatbutton.addEventListener("click", handleClick);

setTimeout(() => {
    fatbutton.removeEventListener("click", handleClick);
}, 1500)
