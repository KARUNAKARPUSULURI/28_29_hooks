import React, { useMemo, useState } from 'react'

//how does browser read jsx -> babel -> transpiler
//0x100 -> count -> 0
//0x101 -> count -> 1
const arr = []
//1st render -> [f] //600 -> 
// 2nd render -> [f, f] //700
const Usememo = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  arr.push(handleIncrement)
  // console.log("arr", arr) //[f]
  // console.log("comparing", arr[0] == arr[1]) //[f] == [f] => true ? "reuse" : "recreate"

  return (
    <div>

      <h1>Counter : {count}</h1>
      <button onClick={handleIncrement}>Click</button>
    </div>
  )
}

export default Usememo