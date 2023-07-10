const TodoFilter = ({handleFilterTodo}) => {

    return (
        <section className='container mt-4 mx-auto'>
            <div className='bg-white p-4 flex justify-center gap-4 rounded-md'>
                <button onClick={() => handleFilterTodo('All')} className='text-blue-500'>All</button>
                <button onClick={() => handleFilterTodo(true)} className='hover:text-blue-500'>Active</button>
                <button onClick={() => handleFilterTodo(false)} className='hover:text-blue-500'>Completed</button>
            </div>
        </section>
    )
}

export default TodoFilter;