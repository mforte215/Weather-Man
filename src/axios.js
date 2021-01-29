import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://community-open-weather-map.p.rapidapi.com/weather?',
});



export default instance;