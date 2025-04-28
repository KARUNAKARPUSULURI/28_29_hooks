import React, { useContext } from 'react'
import Child from './Child'
import { myContext } from './Context'

const Parent = () => {
  return (
    <div>
        <Child />
    </div>
  )
}

export default Parent