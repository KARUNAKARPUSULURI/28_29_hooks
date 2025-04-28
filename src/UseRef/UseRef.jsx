import React, { useEffect, useRef, useState } from 'react'
import video from "../assets/video.mp4"
const UseRef = () => {
    const [count, setCount] = useState(0)
    const [isTimer, setIsTimer] = useState(false)
    const timerRef = {
        current: null
    }
    //ref attribute-> it is used to create a mutable reference to a node
    //input -> .value -> .focus(),.play(), pause()
    //ref -> {current : initialValue}
    eval()
    const ele = document.getElementById("div")
    const divRef = useRef(0) //
    const inputRef = useRef(null)
    const btnRef = useRef(null) //{current : any }
    const videoRef = useRef(null)
    const handleClick = () => {
        // inputRef.current.focus()
    }
    const handlePlay = () => {
        videoRef.current.play()
    }
    const hanldePause = () => {
        videoRef.current.pause()
    }
    useEffect(() => {
        btnRef.current.click()
        inputRef.current.focus()
        inputRef.current.style.outline = "2px solid red"
        inputRef.current.style.border = "none"
    }, [])
    const handleStart = () => {
        setIsTimer(true)
    }
    const handleStop = () => {
        setIsTimer(false)
    }
    const handleReset = () => {
        setIsTimer(false)
        setCount(0)
    }

    useEffect(() => {
        if (isTimer) {
            timerRef.current = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 1000)
        }
        return ()=> clearInterval(timerRef.current)
    }, [isTimer])
    return (
        <>
            <div id='div' ref={divRef}>Hello this is ref attribute
            </div>
            <input ref={inputRef} type='text' placeholder='enter name' id='name' />
            <button ref={btnRef} onClick={handleClick}>Click</button>
            <video ref={videoRef} height={"200px"} width={"200px"} controls={false}>
                <source src={video} />
            </video>
            <button onClick={handlePlay}>Play</button>
            <button onClick={hanldePause}>Pause</button>

            <h1>Timer : {count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default UseRef