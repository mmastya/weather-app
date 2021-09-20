import React from 'react'
import './PageTitle.css'

function PageTitle (props:any) {
  return (
    <div className="page-title">
        <div className='page-title__weather'>{props.titleWeather}</div>
        <div className='page-title__forecast'>{props.titleForecast}</div>
    </div>
  )
}

export default PageTitle
