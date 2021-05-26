import React from 'react'
import { SelectDayBox } from '../selectDayBox/SelectDayBox'
import { SelectWeatherBox } from '../selectWeatherBox/SelectWeatherBox'
import { WeatherCard } from '../weatherCard/WeatherCard'
import './BlockData.css'

export function BlockData () {
  return (
    <div className="blockData">
      <SelectDayBox />
      <SelectWeatherBox />
      <WeatherCard/>
    </div>
  )
}
