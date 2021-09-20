import React from 'react'
import { Placeholder } from '../placeholder/Placeholder'
import Title from '../title/Title'
import WhiteBoxContainer from '../whiteBoxContainer/WhiteBoxContainer'
import './WhiteBox.css'

function WhiteBox (props:any) {
  console.log(props)
  return (
    <div className="white-box">
      <WhiteBoxContainer>
        <Title text={props.title}/>
        <Placeholder/>
      </WhiteBoxContainer>
    </div>
  )
}

export default WhiteBox
