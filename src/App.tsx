import React from 'react'
import './App.css'
import { getWeatherForWeek, getWeatherFromPast } from './dataSources/index'
import { APIKey } from './dataSources/common'
import { WeatherAppPage } from './pages/WeatherAppPage'

function App () {
  getWeatherForWeek(45.0357, 38.975313, APIKey)
  getWeatherFromPast(45.0357, 38.975313, 1622034866, APIKey)
  return (
    <div className="App">
      <header></header>
      <body>
        <WeatherAppPage />
      </body>
    </div>
  )
}

export default App
