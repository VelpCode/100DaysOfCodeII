
/*Will it rain?
This willItRain function receives a JSON string from a fictive weather API.
Complete the willItRain function such that it returns true when the weather forecast predicts that it'll rain and false otherwise.
*/ 

const willItRain = weatherApiResponse => {

    const data = JSON.parse(weatherApiResponse);
    return data.now.rainExpected;
    


}

console.log(willItRain('{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}')); 
console.log(willItRain('{"now":{"temperature":25,"humidity":"90%","uvIndex":4,"rainExpected":false}}')); // false