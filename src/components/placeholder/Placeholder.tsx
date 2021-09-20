import React from 'react'
import PlaceholderIcon from '../placeholderIcon/PlaceholderIcon'
import './Placeholder.css'

export function Placeholder () {
  return (
    <div className="placeholder">
      <PlaceholderIcon/>
      <p className='placeholder__text'>Fill in all the fields and the weather will be displayed</p>
    </div>
  )
}
