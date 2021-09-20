import React from 'react'
import './WeatherCard.css'

function WeatherCard (props:any) {
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
