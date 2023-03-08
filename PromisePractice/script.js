import {fakeFetch} from "./helpers.js";

const logUserDetails = async () => {
    try {
        
        const data = await fakeFetch("user-details")
        console.log(data)
    } catch(error) {
        console.error(error)
    }
}

logUserDetails();