import TodoItem from './TodoItem';

const TodoList = ({todos}) => {

    const renderTodos  = () => {
        return todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
    }

    return (
        <div className='bg-white mt-4 rounded-md'>
            {renderTodos()}
        </div>
    )

};

export default TodoList;