/*
Complete the function checkForNewNotifications such that it fetches the following endpoint https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json and then calls the imported showNewNotifications function with the number of unread notifications.
Then, handle network errors by logging it to the console with console.error().
*/

const checkForNewNotifications = () => {

    fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json`)
    .then(result => result.json())
    .then(data => {
        showNewNotifications(data.count)
    })



}

function showNewNotifications(count) {
    console.log(`You have ${count} new notifications, would you like to read them?`)

}

checkForNewNotifications()