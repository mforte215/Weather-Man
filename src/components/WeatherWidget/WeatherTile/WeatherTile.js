import React from 'react';
import classes from './WeatherTile.module.css';
import Icon from '../Icon/Icon';



const WeatherTile = (props) => {

    console.log("Printing Tile -----------");
    console.log(props.futureWeather);
    console.log(props.futureMinTemp);
    console.log(props.futureMaxTemp);

    return (
        <div className={classes.WeatherTile}>
            <h3>{props.dayOfWeek}</h3>
            <Icon iconType={props.futureWeather} />
            <p>{props.futureWeather}</p>
            <p>High: {props.futureMaxTemp}&#8457;</p>
            <p>Low: {props.futureMinTemp}&#8457;</p>
        </div>
    )
}

export default WeatherTile;