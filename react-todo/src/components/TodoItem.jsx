import CrossIcon from './icons/CrossIcon'

const TodoItem = ({todo}) => {
    return (
        <article className='flex gap-4 px-4 py-4 border-b-gray-400'>
            <button className='h-5 w-5 rounded-full border-2 inline-block'></button>
            <p className='text-gray-700 grow'>{todo.title}</p>
            <button className='flex-none'>
                <CrossIcon />
            </button>
        </article>
    )
}

export default TodoItem;