import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtender from './../components/ForecastExtended';
import { connect } from 'react-redux';

class ForecastExtenderContainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForecastExtender city={this.props.city}/>
        );
    }
}

ForecastExtenderContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

// const mapStateToProps = state => ({ city: state.city })
const mapStateToProps = ({city}) => ({ city })
export default connect(mapStateToProps, null)(ForecastExtenderContainer);