import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Gallery = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState([])
    const cloudName = "dqxlshkcy"; //Replace the cloudname with your cloudname 
    const gallery_preset = "gallery-preset-name"; //replace your preset name with your preset name
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeFile = (e) => {
        setFile(e.target.files[0])
    }
    const handleUpload = async () => {
        const formData = new FormData() //{} ->Prototype -> 
        formData.append("file", file) //{type : "image/mp3"}, {type : "video/mp4"}
        formData.append('upload_preset', gallery_preset);
        const fileType = file.type.startsWith("image") ? "image" : "video"
        try {
            const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/${fileType}/upload`, formData);
            const audioUrl = res.data.secure_url;
            const payload = {
                title: title,
                type: fileType,
                url: audioUrl
            };
            await axios.post('http://localhost:3000/media', payload);
            setTitle('');
            setFile(null);
            alert('media uploaded successfully!');
        } catch (err) {
            console.log("error", err)
        }
    }

    useEffect(() => {
        fetch("http://localhost:3000/media")
            .then(res => res.json())
            .then(data => setMedia(data))
    }, [])
    return (
        <>
            <div>
                <input type='text' placeholder='enter title' name='title' onChange={handleChangeTitle} /><br />
                <input type='file' accept='image/*, video/*' onChange={handleChangeFile}  /><br />
                <button onClick={handleUpload}>Upload</button>
            </div>
            <div>
                <h2 style={{ textAlign: 'center' }}>Gallery </h2>
                <div  style={{width: "200px", height: "200px"}}>
                    {
                        media.map((ele) => {
                            console.log("ele", ele)
                            return (
                                <div>
                                    <h3>Title : {ele.title}</h3>
                                    <div>
                                        {
                                            ele.type == "image" ? (
                                                <img src={ele.url} />
                                            ) : (
                                                <video src={ele.url} controls></video>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery