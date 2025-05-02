import React, { useRef, useState } from 'react'

const ImagePreview = () => {
    const [image, setImage] = useState(null)
    const inputRef = useRef(null)
    const handleChange = () => {
        const fileObj = inputRef.current.files[0]
        if (fileObj) {
            const url = URL.createObjectURL(fileObj)
            setImage(url)
        }
    }
    return (
        <div>
            <input ref={inputRef} type='file' onChange={handleChange} />
            {
                image &&
                <img src={image} width={"250px"} height={"250px"} />
            }
        </div>
    )
}

export default ImagePreview