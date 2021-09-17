import React from 'react'
import './PlaceholderIcon.css'
import placeholderIcon from '../../static/images/placeholder-icon.svg'

function PlaceholderIcon () {
  return (
    <div className="icon-close">
      <img src={placeholderIcon} alt='изображение белого облака с синими краями'/>
    </div>
  )
}

export default PlaceholderIcon
