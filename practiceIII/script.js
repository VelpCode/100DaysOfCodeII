
const beginningClass = () => {


    const buttons = document.querySelectorAll(".button")
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            event.currentTarget.classList.toggle("active")
        })
    })
}


beginningClass();