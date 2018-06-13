import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';
// import { setSelectedCity, setWeather } from './../actions';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';

class LocationListContainer extends Component {
    
    componentDidMount(){
        const { setWeather, setSelectedCity, cities, city} = this.props;

        setWeather(cities)
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }
    
    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}/>
            );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

// Sin ayuda del binding 
// const mapDispatchToProps = dispatch => ({
//     setCity: value => dispatch(setSelectedCity(value)),
//     setWeather: cities => dispatch(setWeather(cities))
// });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
  
const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
