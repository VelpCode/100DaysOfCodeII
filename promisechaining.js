
//Simulate fetching some data
let fetchData = function(data) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Fetching some data complete!')
            resolve({id:1, message: 'Nice work'})
        }, 2000)
    })


}

//parse data
let parseData = function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parsedOutput = `Parsed the data for id: ${data.id} with message: ${data.message}`
            resolve({parsed: parsedOutput });
        }, 2000)
    })
}

let echoData = function(data) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            consolelog(data.parsed);
        })
    })
}

fetchData().then(parseData).then(echoData).catch(err => {
    console.error(err);
});