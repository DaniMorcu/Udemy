import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import './styles.css';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

class ForecastExtended extends Component {
    
    // renderForecastItemDays() {
    //     return (days.map(day => (<ForecastItem weekDay={day}></ForecastItem>)));
    // }

    renderForecastItemDays() {
        return days.map(day => (<ForecastItem weekDay={day}></ForecastItem>));
    }
   
    render() {
        const { city } = this.props;
        return (
            <div className="forescastExtendedCont">
                <h2>ForecastExtended for {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        );
    }
}

export default ForecastExtended;