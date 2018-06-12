import React from 'react';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = ({forecastData}) => {
    return forecastData.map(forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour}
            data={forecast.data}>
        </ForecastItem>
));
}

const renderProgress = () => {
    return <h3>Cargando pronóstico extendido...</h3>;
}

const ForecastExtended = ({city, forecastData}) => (
    <div className="forecastExtendedCont">
        <h2 className="forecastExtendTitle">ForecastExtended for {city}</h2>
        {forecastData ?
            renderForecastItemDays({forecastData}):
            renderProgress()    
        }
    </div>
)

export default ForecastExtended;