import React, { useEffect, useRef } from 'react'
import './App.css'

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
      <div>
  {/*       <div className='app__bg-pink'>
          <img className='app__bg-pink-img' src={Vector3} alt='розовая гора'/>
        </div>
        <div className='app__bg-line'>
          <img className='app__bg-line-img' src={Vector6} alt='синяя линия'/>
        </div>
        <div className='app__bg-blue'>
          <img className='app__bg-blue-img' src={Vector4} alt='синяя гора'/>
        </div> */}
      </div>
    </div>
  )
}

export default App
