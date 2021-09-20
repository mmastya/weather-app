import React from 'react'
import { Placeholder } from '../placeholder/Placeholder'
import Title from '../title/Title'
import WeatherCard from '../weatherCard/WeatherCard'
import WhiteBoxContainer from '../whiteBoxContainer/WhiteBoxContainer'
import './WhiteBox.css'
import sunCloud from '../../static/images/sun-cloud.svg'

function WhiteBox (props:any) {
  const show = true

  return (
    <div className="white-box">
      <WhiteBoxContainer>
        <Title text={props.title}/>
        {show ? <WeatherCard isAlone={props.alone} date={'27 sep 2021'} weatherIcon={sunCloud} degree={'+17°'} alt={'солнце'}/> : <Placeholder/>}
      </WhiteBoxContainer>
    </div>
  )
}

export default WhiteBox
