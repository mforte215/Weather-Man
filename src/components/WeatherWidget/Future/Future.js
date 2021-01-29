import React from 'react';
import WeatherTile from '../WeatherTile/WeatherTile';
import './Future.css';

const Future = (props) => {

    let weatherTiles = null;
    if (typeof props.responseObj.list !== 'undefined') {
        console.log("Got inside of the props of Future");
        let copyOfArray = [...props.responseObj.list];
        copyOfArray.shift();
       weatherTiles = copyOfArray.map(
            weatherForecast => {
                console.log('-----------------------');
                console.log(weatherForecast.dt);
                let unix_timestamp = weatherForecast.dt;
                var date = new Date(unix_timestamp * 1000);
                let dateString = date.toString();
                let day = dateString.slice(0,3);

                return <WeatherTile key={weatherForecast.dt} dayOfWeek={day} futureWeather={weatherForecast.weather[0].main} futureMinTemp={weatherForecast.temp.min} futureMaxTemp={weatherForecast.temp.max} />
            }
        )
    };




    return (
        <div className="Future">
            <iframe className="weatherMap" title="my-map" width="275" height="200"
        src="https://embed.windy.com/embed2.html?lat=39.926&lon=-75.145&detailLat=39.919&detailLon=-75.109&width=275&height=200&zoom=11&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
        frameborder="0"></iframe>
        <div>
            <h1 className="ForecastTitle">3 Day Forecast</h1>
                {weatherTiles}
        </div>
        </div>
    );

}

export default Future;