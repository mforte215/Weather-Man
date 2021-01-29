import React, { useState, useEffect } from 'react';
import Today from './Today/Today';
import Future from './Future/Future';
import classes from './WeatherWidget.module.css';


const WeatherWidget = () => {
    let [currentResponseObj, setCurrentResponseObj] = useState({});
    let [forecastResponseObj, setForecastResponseObj] = useState({});
    let [city, setCity] = useState('Philadelphia');
    let [unit, setUnit] = useState('imperial');

    const uriEncodedCity = encodeURIComponent(city);

    //Current Data
    let currentData = {};
    let fiveDayForecast = {};


        useEffect(() => {

            function getForecast() {
                fetch('https://community-open-weather-map.p.rapidapi.com/forecast/daily?cnt=4&units=imperial&q=' + uriEncodedCity, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                            }
                        })
                        .then(response => response.json())
                        .then(response => {
                            console.log("Logging Forecast Data");
                            console.log(response.list);
                            setForecastResponseObj(response);  
                            }
                        )
                        .catch(err => {
                            console.error(err);
                        });
                            }


            function getWeather() {

                fetch( 'https://community-open-weather-map.p.rapidapi.com/weather?units='+unit+'&q='+uriEncodedCity, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                    }
                }).then(response => response.json())
                .then(
                    response => {
                        currentData.currentCity = response.name;
                        currentData.country = response.sys.country;
                        currentData.currentTemp = response.main.temp;
                        currentData.currentWeather = response.weather[0].description;
                        console.log("Logging Current Data");
                        console.log(currentData);

                        setCurrentResponseObj(currentData);
                    }
                    );
                }

            getWeather();
            getForecast();
          }, []);

    return (
        <div className={classes.Widget}>
            <Today responseObj={currentResponseObj} />
            <Future responseObj={forecastResponseObj}  />
        </div>
    );
}

export default WeatherWidget;