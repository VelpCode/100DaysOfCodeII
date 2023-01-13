import FetchWrapper from "./fetch-wrapper.js";

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app")
const getTweetDetails = () => {

    API.get(`/tweet/1080777336298049537.json`).then(data => {
        console.log(data);
        showAuthorName(`${data.author.details.firstName} ${data.author.details.lastName}`)
    })

}

function showAuthorName(fullName) {
    console.log(fullName)
}

getTweetDetails();