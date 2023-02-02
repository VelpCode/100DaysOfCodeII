

const initDocumentation = () => {

    const docu = document.querySelector("#menu-sidebar");
    const ment = document.querySelector("#app-sidebar");

    docu.addEventListener("click", () => {
        ment.classList.toggle("show");
    })


}