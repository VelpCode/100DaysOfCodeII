

const disableFunc = () => {

    const disable = document.querySelector("#btn-disable")
    const enable = document.querySelector("#btn-enable")
    const start = document.querySelector("#btn-start")

    disable.addEventListener("click", () => {
        start.setAttribute("disabled", "disabled")
    })

    enable.addEventListener("click", () => {
        start.removeAttribute("disabled")
    })

}