import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {

    const handlerWeatherLocationClick = city => {
        onSelectedLocation(city);
    }

    const strToComponent = cities => (
        cities.map((city) =>  
            (
                <WeatherLocation 
                    city={city.key} 
                    key={city.name}
                    onWeatherLocationClick={() => handlerWeatherLocationClick(city.name)}
                    data={city.data} />
            )
        )
    )
    
    return(
        <div className="locationListCont">
            {strToComponent(cities)}
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;