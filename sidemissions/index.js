import FetchWrapper from "./fetch-wrapper.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app");

const getTweetDetails = () => {

    API.get('tweetspecified.json').then(data => {
        console.log(data)
    })
    API.put('tweetspecified.json', {
        method: "put",
        firstName = firstName, 
        lastName = lastName,
        body {
            container-type: "FULL".charAt.
        }
    }
    )
}

function showAuthorName(fullName) {
    console.log(fullName)
}

getTweetDetails();


const paras = document.querySelectorAll("p")

return [...paras].filter(para => para.textContent.length < 10 )



