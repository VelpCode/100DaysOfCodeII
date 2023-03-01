
/*Visualize async function, Run the code and see how the getRandomNumber 
function returns a random number between 0 and 9 */

const getRandomNumber = async () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

getRandomNumber().then(value => {
    console.log(value);
})