import React, { useReducer } from 'react'

const reducer = (prevState, action) => {
    if(action == "increment"){
        prevState = prevState + 1
        return prevState
    }else if(action == "decrement"){
        prevState = prevState - 1
        return prevState
    }else if(action == "reset"){
        prevState = 0
        return prevState
    }else{
        return "error"
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, 0)
    const handleIncre = () => {
        dispatch("increment")
    }
    const handleDecre = () => {
        dispatch("decrement")
    }
    const handleReset = () => {
        dispatch("reset")
    }
    return (
        <div>
            <h2>Counter : {count}</h2>
            <div>
                <button onClick={handleIncre}>Increment</button>
                <button onClick={handleDecre}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default UseReducer