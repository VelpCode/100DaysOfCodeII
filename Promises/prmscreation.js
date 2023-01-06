

/* fix the implementation so that it returns to the fulfilled state after 1 second*/


const wait = (milliseconds) => {
    return new Promise(resolve => {

        setTimeout(() =>{
            resolve()
        },milliseconds)

    })

}

wait(1000).then(() => {
    console.log("Done waiting!")
});
