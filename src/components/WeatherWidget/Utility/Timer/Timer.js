import React, {useState, useEffect} from 'react';
import classes from './Timer.module.css';

const Timer = () => {

    function useNewTimer(currentDate) {
        const [date, setDate] = React.useState(currentDate);
        
        React.useEffect(() => {
          var timerID = setInterval( () => tick(), 1000 );
          return function cleanup() {
              clearInterval(timerID);
            };
         });
        
        function tick() {
          setDate(new Date());
         }
        
        return date;
      }

      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const timer = useNewTimer(new Date());
    let day = dayNames[timer.getDay()];
    let date = timer.getDate();
    let month = monthNames[timer.getMonth()];
    let year = timer.getFullYear();


    return (
        <div className={classes.Timer}>
            <h1 className={classes.TitleDisplayElement}>{day}</h1>
            <p className={classes.DateDisplayItem}>{month} {date} {year}</p>
            <h1 className={classes.TimeDisplay}>{timer.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Timer;