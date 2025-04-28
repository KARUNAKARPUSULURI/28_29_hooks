import React, { useContext } from 'react'
import { myContext } from './Context'

const Example = () => {
   const data =  useContext(myContext)
   console.log("example", data)
  return (
    <div>Example</div>
  )
}

export default Example