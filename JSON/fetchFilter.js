/*Let's say we're coding the Chapters sidebar of this website.
You can get the list of chapters by using the following endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json
Call the displayCompletedChapters with only the chapters (array) that have been completed (it expects an array).
*/

const getChapters = () => {

    fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json`)
    .then(result => result.json())
    .then(data => {
        console.log(data)
        const completedChapters = data.filter(chapter => chapter.isCompleted)
        displayCompletedChapters(completedChapters)
    })

}

function displayCompletedChapters(chapters) {
    console.log("Recieved", chapters)
}

getChapters();