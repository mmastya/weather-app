import React from 'react'
import './PageTitle.css'

interface IPageTitle {
  titleWeather: string;
  titleForecast: string;
}

function PageTitle (props:IPageTitle) {
  return (
    <div className="page-title">
        <div className='page-title__weather'>{props.titleWeather}</div>
        <div className='page-title__forecast'>{props.titleForecast}</div>
    </div>
  )
}

export default PageTitle
