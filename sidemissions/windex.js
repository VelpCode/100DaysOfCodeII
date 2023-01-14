
import FetchWrapper from "./side-wrapper.js"
const API = new FetchWrapper ("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app")

const getChapters = () => {

    API.get("/chapters/all.json").then(data => {
        console.log(data)
        displayCompletedChapters(data.array.id)
    })


}

function displayCompletedChapters(chapters) {
    console.log("Recieved", chapters)
}

getChapters()