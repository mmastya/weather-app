import React from 'react'
import './WeatherCard.css'

interface IWeatherCard {
  date: string;
  isAlone?: boolean;
  weatherIcon: string;
  alt: string;
  degree: string;
}

function WeatherCard (props:IWeatherCard) {
  return (
    <div className={props.isAlone ? 'weather-card weather-card--alone' : 'weather-card'}>
        <div className='weather-card__date'>{props.date}</div>
        <div className='weather-card__icon-container'>
          <img className='weather-card__icon' src={props.weatherIcon} alt={props.alt}/>
        </div>
        <div className='weather-card__degree'>{props.degree}</div>
    </div>
  )
}

export default WeatherCard
