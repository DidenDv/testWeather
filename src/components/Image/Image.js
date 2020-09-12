import React from 'react';

export default function Image({ icon }) {
    const iconImg = `http://openweathermap.org/img/wn/${icon}.png`;

    return (
        <img src={iconImg} alt={iconImg} />
    )
}
