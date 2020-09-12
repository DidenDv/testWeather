// modules
import React from 'react';
import PropTypes from 'prop-types';
// lodash
import get from 'lodash.get';
// components
import { Image, Title } from '../../components';

const WeatherItem = ({ data }) => {
    const weatherData = get(data[0], 'weather[0]');

    const renderWeatherItem = (item) => {
        const { temp } = item.main;

        return (
            <div key={item.id}>
                <Title title={item.name} />
                <Image icon={weatherData.icon} />
                <div>Температура: {Math.round(temp)} °C</div>
                <div>{weatherData.main}</div>
            </div>
        );
    }

    const renderWeatherWrap = () => (
        <div>
            {data.map(item => renderWeatherItem(item))}
        </div>
    );

    return (
        <div>
            { renderWeatherWrap() }
        </div>
    )
}

WeatherItem.propTypes = {
    data: PropTypes.array
};

export default WeatherItem;
