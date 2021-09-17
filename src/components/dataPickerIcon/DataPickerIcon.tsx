import React from 'react'
import './DataPickerIcon.css'
import calendar from '../../static/images/calendar.svg'

function DataPickerIcon () {
  return (
    <div className="data-picker-icon">
      <img src={calendar} alt='Изображение пустого календаря'/>
    </div>
  )
}

export default DataPickerIcon
