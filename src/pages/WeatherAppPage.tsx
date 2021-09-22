import React from 'react'
import PageTitle from '../components/pageTitle/PageTitle'
import WhiteBox from '../components/whiteBox/WhiteBox'
import './WeatherAppPage.css'

export function WeatherAppPage () {
  return (
    <div className="weather-app-page">
      <PageTitle titleWeather={'Weather'} titleForecast={'forecast'}/>
      <div className='weather-app-page__white-box-container'>
        <div className='weather-app-page__white-box-container-mb'><WhiteBox title={'7 Days Forecast'}/></div>
        <WhiteBox isAlone={true} title={'Forecast for a Date in the Past'}/>
      </div>
    </div>
  )
}
