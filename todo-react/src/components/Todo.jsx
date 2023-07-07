const Todo = ({todo, deleteTodo, updateTodo}) => {
    const {title, description, status, priority, id} = todo

    return (
        <>
           <li className="list-group-item">
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <h5 className={`${status && 'text-danger'}`}>{title}</h5>
                        <p className={`${status && 'text-danger'}`}>{description}</p>
                        <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(id)}>Eliminar</button>
                            <button className="btn btn-sm btn-warning" onClick={() => updateTodo(id)}>Actualzar</button>
                        </div>
                    </div>
                    <span 
                    className="badge bg-primary text-white">
                        {priority === true ? 'Priority' : ''}
                    </span>
                </div>

           </li>
        </>
    )
}

export default Todo