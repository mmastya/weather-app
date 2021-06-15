import React from 'react'
import { SelectDayBox } from '../selectDayBox/SelectDayBox'
import { DropDownWeather } from '../DropDownWeather/DropDownWeather'
import { WeatherCard } from '../weatherCard/WeatherCard'
import './blockData.css'

// const dropdownOptions = [{ value: 'Самара', id: 1 }, { value: 'Тольятти', id: 2 }, { value: 'Саратов', id: 3 }, { value: 'Казань', id: 4 }, { value: 'Краснодар', id: 5 }]

export function BlockData () {
  return (
    <div className="blockData">
      <h1 className="blockData__title">7 Days Forecast</h1>
      <SelectDayBox />
      <DropDownWeather/>
      <div className="blockData__image"></div>
      <WeatherCard/>
      <span className="blockData__textInfo">Fill in all the fields and the weather will be displayed</span>
    </div>
  )
}
