import { useState } from "react"
import Swal from "sweetalert2"

const Form = ({addTodo, deleteTodo}) => {

    const [todo, setTodo] = useState({
        title: 'Todo #01',
        description: 'Description #01',
        status: 'completed',
        priority: false
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        const {title, description, status} = todo
        if(title.trim() === '' || description.trim() === '' || status.trim() === ''){
            return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'All fields are required!'

            })
        }
        addTodo({
            id: Date.now(),
            ...todo,
            status: todo.status === 'outstanding' ? false : true
        });

        return Swal.fire({
            icon: 'success',
            title: 'Ok',
            text: 'Todo successfully created!'

    })
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setTodo({
            ...todo,
            [name]: e.target.type === 'checkbox' ? e.target.checked : value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Type todo" 
                className="form-control mb-2" 
                name="title" 
                value={todo.title}
                onChange={handleChange}
            />
            <textarea 
                placeholder="Type todo" 
                className="form-control mb-2" 
                name="description"
                value={todo.description}
                onChange={handleChange}
            >
            </textarea>
            <select 
                className="form-control form-select mb-2" 
                name="status"
                value={todo.status}
                onChange={handleChange}
            >
                <option value="outstanding">Outstanding</option>
                <option value="completed">Completed</option>
            </select>
            <div className="form-check mb-2">
                <input 
                    type="checkbox" 
                    name="priority"  
                    className="form-check-input"
                    checked={todo.priority}
                    onChange={handleChange}
                />
                <label htmlFor="">Dar prioridad</label>
            </div>
            <button 
                className="btn btn-sm btn-success" 
                type="submit"
            >
                Add
            </button>
        </form>
    )
}
export default Form