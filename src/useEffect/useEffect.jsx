import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(1)
    const [isCounting, setIsCounting] = useState(false)
    const getProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${count}`)
        const data = await response.json()
        setData(data)
    }
    // useEffect(() => {
    //     console.log("useeffect")
    //     getProducts()
    // }, [count])

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCount(count + 1)
    //     }, 1000)
    //     return () => clearInterval(intervalId)
    // })
    // const handleClick = () => {
    //     setInterval(()=>{
    //         setCount(count + 1)
    //     }, 1000)
    // }

    // useEffect(() => {
    //     if (isCounting) {
    //         const intervalId = setInterval(() => { setCount((prev)=> prev + 1)}, 1000)
    //         return () => clearInterval(intervalId)
    //     }
    // }, [isCounting])
    //count -> 1
    //setCount(()=>{})
    const handleIncrement = () => {
        setCount((prev) => prev + 1) //2
        setCount((prev) => prev + 1) //2 + 1 -> 3
        setCount(count + 1) //3 + 1
        setCount(count + 1)
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            {/* {
                isCounting ?
                    <button onClick={() => setIsCounting(false)}>Pause</button>
                    :
                    <button onClick={() => setIsCounting(true)}>Start</button>
            } */}
            {/* {getProducts().map()} */}
            {/* {count}
            {
                <h3>{data.id}). {data.title}</h3>
            }
            <button onClick={() => setCount(1)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>Previous</button> */}
            <button onClick={handleIncrement}>Next</button>
        </div>
    )
}

export default UseEffect