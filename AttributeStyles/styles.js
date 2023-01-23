
/*Show GDPR consent
You're building a website that's going to be used around the world as well as by some EU residents. You have to show a message that shows EU users what data is being collected. Show or Hide the div with id eu-consent message based on the isEU boolean flag.

Note that this function may be used several times in a row. So, you cannot assume that it's always hidden by default as it may have become visible from the previous user.*/


const showOrHideConsent = user => {


    const randomVar = document.querySelector("#eu-consent")
    if (user.isEU) {
        randomVar.style.display = "";
    } else {
        randomVar.style.display = "none";
    }


}



showOrHideConsent({
    id: 1,
    isEU: false
});
showOrHideConsent({
    id: 2,
    isEU: true
});
