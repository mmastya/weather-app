import React, { useEffect, useRef } from 'react'
import './App.css'
import WhiteBox from './components/whiteBox/WhiteBox'

function App () {
  const htmlRef = useRef<HTMLElement | null>(null)

  const handleResize = (): void => {
    if (htmlRef.current === null) {
      return
    }

    const { width } = htmlRef.current.getBoundingClientRect()

    let baseFontSize = width / 1440

    if (width >= 1440) {
      baseFontSize = Math.min(width / 1440)
    } else if (width >= 1280 && width < 1440) {
      baseFontSize = Math.min(width / 1280)
    } else {
      baseFontSize = Math.min(width / 320)
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
    <div className="app">
      <div className='title'>
        Weather forecast
        <div className='app__white-box-container'>
          <div className='app__white-box-container-mb'><WhiteBox/></div>
          <WhiteBox/>
        </div>
      </div>
    </div>
  )
}

export default App
