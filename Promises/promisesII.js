const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds)
    });
}

const result = wait(1000)
console.log(result); //Promise {<pending>}
result.then(() => {
    console.log(result); //Promise {fulfilled}
})
console.log(result);