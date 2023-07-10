const TodoFilter = () => {

    return (
        <section className='container mt-4 mx-auto'>
            <div className='bg-white p-4 flex justify-center gap-4 rounded-md'>
                <button className='text-blue-500'>All</button>
                <button className='hover:text-blue-500'>Active</button>
                <button className='hover:text-blue-500'>Complete</button>
            </div>
        </section>
    )
}

export default TodoFilter;