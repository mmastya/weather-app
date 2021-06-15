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
    <div>
      <Toggle/>
      <List>
        <Item>Самара</Item>
        <Item>Тольятти</Item>
        <Item>Саратов</Item>
        <Item>Казань</Item>
        <Item>Краснодар</Item>
      </List>
    </div>
  )
}
