import React from 'react'
import './selectWeatherBox.css'

export function SelectWeatherBox () {
  return (
    <div className="selectDayBox">
      <div className="custom-select-wrapper">
          <div className="custom-select">
              <div className="custom-select__trigger"><span>Tesla</span>
                  <div className="arrow"></div>
              </div>
              <div className="custom-options">
                  <span className="custom-option selected" data-value="tesla">Tesla</span>
                  <span className="custom-option" data-value="volvo">Volvo</span>
                  <span className="custom-option" data-value="mercedes">Mercedes</span>
              </div>
          </div>
      </div>
    </div>
  )
}
