export default class FetchWrapper {

    constructor(baseURL) {
        this.baseURL = baseURl;
    }
    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json())
    }

    
}