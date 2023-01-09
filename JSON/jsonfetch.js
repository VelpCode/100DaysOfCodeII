/*Complete the checkForNewNotifications function such that it makes a fetch request to https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json , converts the response to JSON format, and returns the result.*/

const checkForNewNotifications = () => {

    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
    .then(response => response.json())
    
}   

checkForNewNotifications();