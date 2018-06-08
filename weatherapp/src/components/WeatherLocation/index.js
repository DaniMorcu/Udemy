import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const api_key = "eb5a15450c15afde76a2e2b6049c431b";
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component {

    constructor({ city }) {
        super();
        this.state = {
            data: null,
            city,
        }
    }
    
    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        
        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data }); 
        })
    }
        
    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location className="weatherLocationTitle" city={city}/>
                {data ? <WeatherData data={data}/> : 
                <CircularProgress/>}
            </div>
        )
    };
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;