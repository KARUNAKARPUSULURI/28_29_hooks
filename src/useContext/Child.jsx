import React, { useContext } from 'react'
import { myContext } from './Context'

const Child = () => {
    const data = useContext(myContext)
    return (
        <div>
            {
                data.map((str, index)=>{
                    return (
                        <p>{str}</p>
                    )
                })
            }
        </div>
    )
}

export default Child