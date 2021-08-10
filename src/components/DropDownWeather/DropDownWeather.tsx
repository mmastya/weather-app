import React from 'react'
import { List } from './partials/List'
import { Item } from './partials/Item'
import { Toggle } from './partials/Toggle'
import './ DropDownWeather.css'

// interface DropDownWeatherropsProps {
//   children: React.ReactNode,
// }

export const DropDownWeather = () => {
  return (
    <div className="dropdown-box">
      <div className="dropdown-box__toggle-box">
        <p className="dropdown-box__toggle-box-title">Select city</p>
        <Toggle/>
      </div>
      <List>
        <Item>Samara</Item>
        <Item>Тольятти</Item>
        <Item>Саратов</Item>
        <Item>Kazan</Item>
        <Item>Краснодар</Item>
      </List>
    </div>
  )
}
