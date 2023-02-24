const username = document.querySelector("#user-name")

username.addEventListener("blur", () => {
    if (username.value.length >= 6) {
        username.classList.remove("error")
        username.classList.add("success")
    }
    else {
        username
    }
})