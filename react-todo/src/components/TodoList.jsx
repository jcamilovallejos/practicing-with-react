import TodoItem from './TodoItem';

const TodoList = ({todos, handleDelete, handleUpdateTodo}) => {

    const renderTodos  = () => {
        return todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} handleUpdateTodo={handleUpdateTodo} />)
    }

    return (
        <div className='bg-white mt-4 rounded-md'>
            {renderTodos()}
        </div>
    )

};

export default TodoList;