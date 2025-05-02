function ComponentName(){
    return (
        <></>
    )
}

export default ComponentName

React v16 -> 

->Hooks -> Hooks are functions which are used to for state management, to perform side effects, to prevent prop drilling, or to prevent unnecessary re-renders 
types:- 
1. State management -> useState()
2. Life cycle methods -> useEffect()
3. prop drilling -> useContext()
4. Dom manupilating  -> useRef()
5. Preventing unnecessary re-renders -> useMemo(), useCallback()
6. Complex state logic -> useReducer()


UseState Hook : - State management 

what is state? 
to store data which changes overtime
whenever a state value changes, component re-renders

how to update a state? 
using setState

state is Object

useState()

import React from "react"

console.log(React) // {}



function useState(name){
    return `$Hello {name}`
}

-> karunakar -> useState() // 

    *


UseEffect : - It is used to perform side effects in functional based components

side effects :- fetching apis, functional calls, Dom manupilation, timer functions, subscriptions or events
it will be triggered after render

useEffect() -> 


useContext : -

- Context -> share data globally -> const myContext = createContext() -> {Provider, Consumer}
- Provider -> which send data -> 
- Consumer -> which uses data

App.jsx ->Data -> Parent.jsx -> Child.jsx
const arr = [{}]
<myContext.Provider value = {arr}>
<Parent />
</myContext.Provider>

Child.jsx ->const data =  useContext(myContext)


useMemo():- It is used to cache(memoizing) data, 
it is used to prevent unnecessary re-renders,
incase any value changes then only we re-render the component

Cache :- storing data


Students :- [{},{},{}, {}]   -> initial render

Classes :-  


staff:-


Const Student = () => {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(0)
    return  (
        <>
        {count} - {age}
        <Header /> //100000 fetch data
        <footer /> //10000000 fetch daa
        </>
    )
}


What is react js?
what is the difference between react vs angular
what is the difference between export and exporrt default and import and import all
what is the difference between functional based componenyts vs class based components
what is the difference between controlled components vs uncontrolled components
what is state management? 
what are props
How do you pass  data from child component to  parent component? 
what is the difference between props and state
what is conditional rendering
what are custom components? 
what are hooks? 
diff b/w usestate vs useeffect
diff blw usestate vs useref
diff b/w usereducer vs usestate
diff b/w usememo vs useeffect
diff b/w usememo vs useCallback
diff b/w useeffect vs uselayouteffect
what is reconciliation? 
whst is diffing algorithm?
How do you do componentwillunmonut in functional based components? 
what is cleanup function in react js? 
what is hydration in react js? 
Do you know about react -router -dom? if yes explain? 
what is one way data binding? 
diff b/w dom vs virtual dom vs shallow dom
what is server side render in react js? 
what are keys in react js? 

todolist, calculator, weather app, e-commerce website, counter

------------------------------------------------------------------------------

Lazy loading: -



loading = "lazy"

lazy()


suspense -> component -> >loading

fallback



UseReducer():-

it is used when you have complex state logic

action creators -> users, one who perform action
actions -> triggering or clicking or making any action
actionTypes -> type of action
disptach -> sending
reducer -> this is the for logic
state -> data

const reducerFunction = (state, action) => {
    action == "deposit" ? state = state + amount
}
[state, disptach] = useReducer(reducer funtion, 0)


<button></button>
<button></button>
<button></button>


audio/*

const [title, setTitle] = useState("")
const handleUpload = (event) => {
    event.preventDefault()
}


<form onSubmit = {handleUpload}>

const fetchAudios = async()=>{
    const response = await fetch("url")
    const data = await response.json()
    setAudio(data)
}

useEffect(()=>{
    fetchAudios()
},[])