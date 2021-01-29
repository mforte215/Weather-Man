import React, { useState, useEffect } from 'react';
import classes from './Today.module.css';
import Timer from '../Utility/Timer/Timer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon/Icon';


const Today = (props) => {

    return (
        <div className={classes.Today}>
          
            <div className={classes.TimeDisplay}><Timer /></div>
            <p className={classes.LocationDisplayItem}><FontAwesomeIcon icon={faMapMarkerAlt} /> {props.responseObj.currentCity}, {props.responseObj.country}</p>
            <Icon iconType={props.responseObj.currentWeather} />
            <h1 className={classes.TempDisplayElement}>{Math.round(props.responseObj.currentTemp)}&#8457;</h1>
            <h1 className={classes.CurrentWeatherDisplayElement}>{props.responseObj.currentWeather}</h1>
            
        </div>
    )
}

export default Today;