import React, { useEffect, useRef } from 'react'
import { WeatherAppPage } from './pages/WeatherAppPage'

function App () {
  const htmlRef = useRef<HTMLElement | null>(null)

  const handleResize = (): void => {
    if (htmlRef.current === null) {
      return
    }

    const { width, height } = htmlRef.current.getBoundingClientRect()

    let baseFontSize = width / 1440

    if (width >= 1440) {
      baseFontSize = Math.min(width / 1440, height / 960)
    } else if (width >= 1028 && width < 1440) {
      baseFontSize = Math.min(width / 1028, height / 768)
    } else {
      baseFontSize = Math.min(width / 320, height / 667)
    }

    htmlRef.current.style.cssText = `font-size: ${baseFontSize}px;`
  }

  useEffect(() => {
    htmlRef.current = document.documentElement

    handleResize()

    window.addEventListener('resize', handleResize)

    return (): void => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="App">
      <header></header>
      <div>
        <WeatherAppPage />
      </div>
    </div>
  )
}

export default App
