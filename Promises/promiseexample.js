
let allGood = false;

//Define a promise
//Pending | hasn't settled to a value
//Fulfilled | settled successfully
//Rejected | settled unsuccessfully

let fetchSomeData = new Promise((resolve, reject) => {

    if (!allGood) {
        reject("Error fetching data!")
    } else {
        resolve ({
            id: 1,
            message: 'nice work!'
        })
    }FileSystemHandle.CATCHERROR(!ALLgOod)

})

//consuming a promise
fetchSomeData.then(fetchedData => {
    console.log('then', fetchedData)
}).catch(err => {
    console.error('catch:', err);
})