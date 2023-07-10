import CrossIcon from './icons/CrossIcon'
import CheckIcon from './icons/CheckIcon'

const TodoItem = ({todo, handleDelete, handleUpdateTodo}) => {

    const { completed } = todo
    const deleteTodo = (id) => {
        handleDelete(id)
    }

    return (
        <article className='flex gap-4 px-4 py-4 border-b-gray-400'>

            {
                completed ?

                <button 
                    className='grid h-5 w-5 flex-none place-items-center 
                    rounded-full border-2 bg-gradient-to-r
                    from-indigo-500 via-purple-500 to-pink-500 cursor-pointer'
                    onClick={() => handleUpdateTodo(todo.id)}
                >
                    <CheckIcon />
                </button>
                :
                <button onClick={() => handleUpdateTodo(todo.id)} className='h-5 w-5 rounded-full border-2 inline-block'>
                </button>
            }


            <p className='text-gray-700 grow'>{todo.title}</p>
            <button className='flex-none' onClick={() => deleteTodo(todo.id)}>
                <CrossIcon />
            </button>
        </article>
    )
}

export default TodoItem;