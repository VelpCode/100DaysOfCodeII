

const failedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject
        })
    })
}