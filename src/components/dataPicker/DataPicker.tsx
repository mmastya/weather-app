import React from 'react'
import './DataPicker.css'

// interface IDataPicker {
//   date: string;
// }

function DataPicker () {
  return (
    <div className='data-picker'>
        <input className='data-picker-input' type="date" />
    </div>
  )
}

export default DataPicker
