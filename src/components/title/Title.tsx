import React from 'react'
import './Title.css'

function Title (props:any) {
  return (
    <div className="title">
        <h1 className='title__text'>{props.text}</h1>
    </div>
  )
}

export default Title
