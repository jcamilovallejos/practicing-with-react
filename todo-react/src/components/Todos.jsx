import Todo from "./Todo";

const Todos = ({todos, deleteTodo, updateTodo}) => {
    return (
        <div>
            <h2 className="text-center">Todos</h2>
            <ul className="list-group">
                {todos.map((todo) => (
                    <Todo key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} todo={todo}></Todo>
                ))}
                {
                    todos.length === 0 && (
                        <p>No data.</p>
                    )
                }
            </ul>
        </div>
    )
};
export default Todos;