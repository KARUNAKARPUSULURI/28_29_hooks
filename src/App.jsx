import { lazy, Suspense, useState } from "react";
import TodoList from "./TodoList";
import UseEffect from "./useEffect/useEffect";
import { myContext, colorChangeContext } from "./useContext/Context";
import Parent from "./useContext/Parent";
import Example from "./useContext/Example";
import Button from "./useContext/Button";
import UseMemo from "./UseMemo/UseMemo";
import UseRef from "./UseRef/UseRef";
import AudioUpload from "./Audio/Audio";
import AudioList from "./Audio/AudioList";
import Gallery from "./Gallery/Gallery";
import Header from "./Gallery/Header";
const Lazy = lazy(() => import("./Lazy/Lazy"))
const Home = lazy(() => import("./Lazy/Home"))
const Child = lazy(() => import("./Lazy/Child"))
const UseReducer = lazy(() => import("./UseReducer/UseReducer"))
const ImagePreview = lazy(() => import("./UseRef/ImagePreview"))
const App = () => {
  const [color, setColor] = useState("red")
  const [show, setShow] = useState(false)
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
      <Header />
      <Gallery />
      {/* <AudioUpload fetchAudios={() => {}}  />
      <AudioList /> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <UseReducer />
      </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <ImagePreview />
      </Suspense> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Lazy />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
      {
        show && <Suspense fallback = {<div>Loading...</div>}>
          <Child />
        </Suspense>
      } */}
      {/* // <button onClick={() => setShow(true)}>Click me to load the component</button> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <myContext.Provider valkkkkkkkkkkkktue={arr}>
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