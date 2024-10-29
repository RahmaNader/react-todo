// a functional component is where I write the template for the code once and use it over and over again
import PropTypes from 'prop-types'
export function TodoCard(props){
    const {todoIndex, todos} = props
    const todo = todos[todoIndex]
    return (
        <div className='card todo-item'>
            <p>{todo.input}</p>
            <div className='todo-buttons'>
            <button disabled={todo.complete}><h6>Done</h6></button>
                <button><h6>Delete</h6></button>
            </div>
        </div>
    )
}

TodoCard.propTypes = {
    todoIndex: PropTypes.number,
    todos: PropTypes.array
}