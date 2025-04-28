import { useState } from "react"

function TodoList() {
    const [formData, setFormData] = useState({
        taskname: "",
        description: "",
        assignedTo: ""
    })
    const [data, setData] = useState([]) 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleAdd = (e) => {
        e.preventDefault()
        console.log(formData)
        setData([...data, formData]) 
    }
    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={handleAdd}>
                <input type="text" placeholder="enter " name="taskname" onChange={handleChange} />
                <input type="text" placeholder="enter " name="description" onChange={handleChange} />
                <select name="assignedTo" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value={"Karunakar"}>Karunakar</option>
                    <option value={"chaitanya"}>chaitanya</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default TodoList