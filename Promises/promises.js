import {wait} from "helpers.js";

const init = () => {
    console.log("Program starterd");
    wait(1000).then(() => {
        console.log("Waiting 1 Second");
    })
}

init();