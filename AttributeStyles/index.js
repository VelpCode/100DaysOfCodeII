const hideEUConsent = () => {

    const showOk = document.querySelector("#eu-consent");
    showOk.style.display = "none";
    

}





const cookieOk = document.querySelector("#cookie-ok")
cookieOk.addEventListener("click", () => hideEUConsent());
