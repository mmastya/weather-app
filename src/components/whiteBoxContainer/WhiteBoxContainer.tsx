import React from 'react'
import './WhiteBoxContainer.css'

function WhiteBoxContainer (props:any) {
  return (
    <div className="white-box-container">{props.children}</div>
  )
}

export default WhiteBoxContainer
