import React from 'react'
import { BlockData } from '../components/blockData/BlockData'
import './weatherAppPage.css'
import logo from '../images/logo.png'

export function WeatherAppPage () {
  return (
    <div className="weatherAppPage">
      <div className="weatherAppPage__logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="weatherAppPage__whiteBoxes">
        <BlockData />
      </div>

    </div>
  )
}
