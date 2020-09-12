// modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import { WeatherItem } from '../../components';

class Weather extends Component {
    componentDidMount() {
        const { getCityWeather } = this.props;

        getCityWeather();
    }

    render() {
        const { data } = this.props.weatherData || {};

        return (data && <WeatherItem data={data} />)
    }
}

Weather.propTypes = {
    getCityWeather: PropTypes.func,
};

export default Weather;
