

//lets see how we can implement the waitOneSecond funciton tht
//resolves successfully after 1 second. We start by defining the function:

const waitOneSecond = () => { //defining the function
    return new Promise (() => {// new function must return a promise
        //this means the waitOneSeocnd function is doing some asynchronous
        /* work so its result will not be directly accessibly because it 
        resolves sometime in the future */
        

    });
}