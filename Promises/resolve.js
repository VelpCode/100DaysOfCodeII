/*Implement the logWeatherDescription such that it uses getWeatherDescrpition to log the weather
description to the console. Look at the sample usage to see the expected result*/

const logWeatherDescription = cityName => {

    getWeatherDescription(cityName).then((data) =>{
        console.log(data);
    })

}