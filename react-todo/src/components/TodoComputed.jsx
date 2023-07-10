const TodoComputed = ({todos, handleClearCompleted}) => {

    return (
        <section className='dark:bg-gray-800 py-4 px-4 flex justify-between'>
            <span className='text-gray-400'>{todos.length ?? 0} items left</span>
            <button className='text-gray-400' onClick={() => handleClearCompleted()}>Clear completed</button>
        </section>
    )

}

export default TodoComputed;