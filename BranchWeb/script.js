

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

const discontinue = document.querySelector("#job-positions");
positions.insertAdjacentHTML("beforeend", `div class = "document">Documentation</div>`);
positions.insertAdjacentHTML("afterbegin", 'div class = "document">Documentation 2 </div>');


const docuSelector = document.querySelector("main");
docuSelector.insertAdjacentHTML("beforeend", `div class = "selector">DocumentationScript</div>`)
docuSelector.insertAdjacentHTML("afterbegin", `div class = "strong">Strong selector</div>`)

const createBanner = document.querySelector("#main");
createBanner = insertAdjacentHTML(`beforeend`, `<div class = "selector">Documentation three</div>`)
createBanner = insertAdjacentHTML(`afterbegin`, `<div class = "selector">Formatting error</div>`);




setWelcomeMessage("Daarla")
setWelcomeMessage("phrabu")