import { TodoCard } from "./TodoCard";
import PropTypes from 'prop-types'

export function TodoLList(props){

    const {todos} = props
    const tab = 'In-progress'
    const filteredTodosList = tab === 'All' ? todos 
    : tab === 'Completed' ? todos.filter(val => val.complete)
    : todos.filter(val => !val.complete)    

    

    return (
        <>
            {filteredTodosList.map((todo,todoIndex) => {
                return (
                    <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} />
                )
            })}
        </>
    )
}

TodoLList.propTypes = {
    todos: PropTypes.array.isRequired
}