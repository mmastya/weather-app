import React, { useState, useEffect, useRef } from 'react'
import ArrowClose from '../arrowClose/ArrowClose'
import ArrowOpen from '../arrowOpen/ArrowOpen'
import './Select.css'

const cities = ['Kazan', 'Moscow', 'Samara', 'Saint-Petersburg', 'Tolyatti', 'Tula']

export function Select () {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Select city')

  const handleClick = () => setIsOpen(!isOpen)
  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value)
    setIsOpen(false)
    console.log(value)
  }

  useEffect(() => {
    const onClick = () => {
      if (dropdownRef.current !== null) {
        setIsOpen(!isOpen)
      }
    }

    if (isOpen) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [isOpen, dropdownRef])

  return (
    <div className='select'>
      <div className='select__box' onClick={handleClick}>
        <p className='select__placeholder' onChange={onOptionClicked}>{selectedOption}</p>
        {isOpen ? <ArrowClose/> : <ArrowOpen/> }
      </div>
      <div ref={dropdownRef} className={`select__options ${isOpen ? 'select__options--open' : 'select__options--close'}`}>
        {cities.map(city => (
          <div className='select__option' onClick={onOptionClicked(city)} key={Math.random()}>
            {city}
          </div>
        ))}
      </div>
    </div>
  )
}
