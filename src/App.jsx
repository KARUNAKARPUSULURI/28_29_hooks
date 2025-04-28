import { useState } from "react";
import "./App.css"
import TodoList from "./TodoList";
import UseEffect from "./useEffect/useEffect";
import { myContext, colorChangeContext } from "./useContext/Context";
import Parent from "./useContext/Parent";
import Example from "./useContext/Example";
import Button from "./useContext/Button";
import UseMemo from "./UseMemo/UseMemo";
import UseRef from "./UseRef/UseRef";
const App = () => {
  const [color, setColor] = useState("red")

  const [count, setCount] = useState(0);
  const [name, setName] = useState("karunakar")
  const [toggle, setToggle] = useState(false)
  const [names, setNames] = useState(["karunakar", "chaitanya", "sai"])
  const [inputValue, setInputValue] = useState("")
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleReset = () => {
    setCount(0)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
  const handleChangeName = () => {
    setName("CHAITANYA")
  } //setName("chaitanya")
  const handleToggle = () => {
    setToggle(!toggle)
  } //setToggle(true)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const arr = ["name", "age", "gender"]
  const handleChangeColor = () => {
    setColor("blue")
  }
  return (
    <>
      <UseRef />
      {/* <UseMemo /> */}
      {/* <myContext.Provider value={arr}>
        <Parent />
      </myContext.Provider>
      <Example />
      <colorChangeContext.Provider value={{color, handleChangeColor}}>
        <Button />
      </colorChangeContext.Provider> */}
      {/* <UseEffect /> */}
      {/* <TodoList />
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleDecrement}>-</button>
      </div>

      <h1>Change Text : {name}</h1>
      <button onClick={handleChangeName}>Click</button>

      <div>
        <button onClick={handleToggle}>{toggle ? "Login" : "Logout"}</button>
      </div>

      <h1>Change Name : {names[count]}</h1>

      <h1>{inputValue}</h1>
      <input type="text" placeholder="type something... " onChange={handleInputChange} /> */}
    </>
  )
}

export default App;