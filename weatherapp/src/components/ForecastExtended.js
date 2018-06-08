import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';
/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'snow',
    wind: '15'
}
*/
const api_key = "eb5a15450c15afde76a2e2b6049c431b";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    
    constructor(){
        super();
        this.state = { forecastData: null};
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null})
            this.updateCity(nextProps.city)
        }        
    }
    
    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast)
            .then(
                data => (data.json())
            ).then(
                weather_data => {
                    const forecastData = transformForecast(weather_data);
                    this.setState({forecastData});
                    console.log(forecastData);
                }
            )
    }

    renderForecastItemDays = ({forecastData}) => {
        return forecastData.map(forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>
    ));
    }

    renderProgress = () => {
        return <h3>Cargando pronóstico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div className="forecastExtendedCont">
                <h2 className="forecastExtendTitle">ForecastExtended for {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays({forecastData}):
                    this.renderProgress()    
                }
            </div>
        );
    }
}

export default ForecastExtended;