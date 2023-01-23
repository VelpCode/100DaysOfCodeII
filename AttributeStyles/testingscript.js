
const toggleDarkTheme = () => {

    document.documentElement.classList.toggle("dark");

}





const button = document.querySelector("#theme-btn")
button.addEventListener("click", () => toggleDarkTheme());