import React from 'react'
import './ArrowClose.css'
import IconClose from '../../static/images/icon-close.svg'

function ArrowClose () {
  return (
    <div className="icon-close">
      <img src={IconClose} alt='серая стрелка направленная вверх'/>
    </div>
  )
}

export default ArrowClose
