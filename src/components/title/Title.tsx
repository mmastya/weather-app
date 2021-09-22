import React from 'react'
import './Title.css'

interface ITitle {
  text: string;
}

function Title (props:ITitle) {
  return (
    <div className="title">
        <h2 className='title__text'>{props.text}</h2>
    </div>
  )
}

export default Title
