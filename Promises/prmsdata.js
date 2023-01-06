/*Implement fake fetch complete the fakeFetch
function such that it returns a promise that resolves
successfully after 1 second with the following object:
{
    departed: false,
    delayed: true
}
*/

const fakeFetch = () => {

    return new Promise(resolve => {
        setTimeout(() => {
            const fitch = {
                departed: false,
                delayed: true
            }
            resolve(fitch);
        },1000)
    })


}

fakeFetch().then((data) => {
    console.log(data);
})