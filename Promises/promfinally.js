

getWeatherIn("Amsterdam") 
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Done fetching weather")
    })