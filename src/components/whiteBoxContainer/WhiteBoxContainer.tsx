import React from 'react'
import './WhiteBoxContainer.css'

interface IWhiteBoxContainer {
  children: React.ReactNode
}

function WhiteBoxContainer (props:IWhiteBoxContainer) {
  return (
    <div className="white-box-container">{props.children}</div>
  )
}

export default WhiteBoxContainer
