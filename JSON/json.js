
/*The prepareStatus function is called before sending a status on a social network.
Complete the prepareStatus function such that it returns a string of the data that's going to be sent, containing the userId, status, and location.
*/


const prepareStatus = (status, location) => {
    const userId = 42;
    const data = {
        userId,
        status,
        location
    }

    const dummytrial = JSON.stringify(data)
    return dummytrial;

}

console.log(prepareStatus("My first post!", "Amsterdam"));
console.log(prepareStatus("Hello World!", "Berlin"));