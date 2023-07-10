import CrossIcon from './icons/CrossIcon'
import { useState } from 'react'

const TodoCreate = ({handleCreateTodo}) => {

    const [title, setTitle] = useState('')

    const createTodo = (e) => {
        e.preventDefault()
        handleCreateTodo({
            title: title
        })
        setTitle('')
    }


    return (
        <form onSubmit={createTodo} className='mt-8 bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4'>
            <span className='h-5 w-5 rounded-full border-2 inline-block'></span>
            <input 
                className='w-full text-gray-400 outline-none' 
                type="text" 
                placeholder='Create a new todo...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    )
}

export default TodoCreate;
