import React, { useContext, useState } from 'react'
import { colorChangeContext } from './Context'

const Button = () => {
    const {color, handleChangeColor} = useContext(colorChangeContext)
  return (
    <div>
        <button onClick={handleChangeColor} style={{color: color}}>Click me</button>
    </div>
  )
}

export default Button