import React from 'react'

export function WeatherAppPage () {
  return (
    <div className="weather-app">
      <div className="weather-app__wrapper">
      <header className="weather-app__header">
        <div className="weather-app__header-title">
          <p className="weather-app__header-title-weather">Weather</p>
          <p className="weather-app__header-title-forecast">forecast</p>
        </div>
      </header>
      <main className="weather-app__main">
        <div className="weather-app__white-box">
        <h1 className="weather-app__white-box-title">7 Days Forecast</h1>

      </div>
      <div className="weather-app__white-box">
        <h1 className="weather-app__white-box-title">Forecast for a Date in the Past</h1>

      </div>
      </main>
      <footer className="weather-app__footer">
        <span className="weather-app__footer-copyright">с любовью от mercury development</span>
      </footer>
      </div>
    </div>
  )
}
