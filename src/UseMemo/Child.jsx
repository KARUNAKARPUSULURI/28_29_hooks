import React from 'react'

//memo() -> higher higher component

const Child = () => {
    const data = Array.from({ length: 100 }, (_, index) => `item${index}`)
    console.log("is child rendering? ")
    return (
        <div>
            {
                data.map(i => <p>{i}</p>)
            }
        </div>
    )
}

export default Child