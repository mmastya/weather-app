import React from 'react'
import { Placeholder } from '../placeholder/Placeholder'
import Title from '../title/Title'
import WeatherCard from '../weatherCard/WeatherCard'
import WhiteBoxContainer from '../whiteBoxContainer/WhiteBoxContainer'
import './WhiteBox.css'
import sunCloud from '../../static/images/sun-cloud.svg'
import DataPicker from '../dataPicker/DataPicker'

interface IWhiteBox {
  title: string;
  isAlone?: boolean;
  isDataInput?: boolean;
}

function WhiteBox (props: IWhiteBox) {
  const show = true

  return (
    <div className="white-box">
      <WhiteBoxContainer>
        <Title text={props.title}/>
        <div className='white-box__data-picker-container'>
          <DataPicker/>
        </div>
        {show ? <WeatherCard isAlone={props.isAlone} date={'27 sep 2021'} weatherIcon={sunCloud} degree={'+17°'} alt={'солнце'}/> : <Placeholder/>}
      </WhiteBoxContainer>
    </div>
  )
}

export default WhiteBox
