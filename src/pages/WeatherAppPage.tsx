import React from 'react'
import { BlockData } from '../components/blockData/BlockData'
import './weatherAppPage.css'

export function WeatherAppPage () {
  return (
    <div className="weatherAppPage">
      <div className="weatherAppPage__title">
        <p>Weather</p>
        <p className="weatherAppPage__title-forecast">forecast</p>
      </div>
      <div className="weatherAppPage__whiteBoxes">
        <BlockData />
      </div>

    </div>
  )
}
