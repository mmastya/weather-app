import React from 'react'
import { SelectDayBox } from '../selectDayBox/SelectDayBox'
import { SelectWeatherBox } from '../selectWeatherBox/SelectWeatherBox'
import { WeatherCard } from '../weatherCard/WeatherCard'
import './blockData.css'

export function BlockData () {
  return (
    <div className="blockData">
      <h1 className="blockData__title">7 Days Forecast</h1>
      <SelectDayBox />
      <SelectWeatherBox />
      <div className="blockData__image"></div>
      <WeatherCard/>
      <span className="blockData__textInfo">Fill in all the fields and the weather will be displayed</span>
    </div>
  )
}
