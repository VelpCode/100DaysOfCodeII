
/*Complete the checkForNewNotifications function such that it fetches  https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json 
and then calls the showNewNotifications function with the number of unread notifs */
const checkForNewNotifications = () => {
    fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showNewNotifications(data.count);
    })
}



function showNewNotifications(count) {
    console.log(`${count} Notifications! Please check your inbox :)`)
}

checkForNewNotifications();