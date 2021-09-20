import React from 'react'
import './Title.css'

function Title (props:any) {
  return (
    <div className="title">
        <h2 className='title__text'>{props.text}</h2>
    </div>
  )
}

export default Title
