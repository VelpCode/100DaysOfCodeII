/*Complete the checkForNewNotifications function such that it makes a fetch request to https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json and return its result.
Also, visualize that the result of fetch is a Promise. You should see Promise in the console.*/

const checkHubermanNotis = () => {

    return fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')

}

const result = checkHubermanNotis();
console.log(result)