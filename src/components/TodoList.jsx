import { TodoCard } from "./TodoCard";
import PropTypes from 'prop-types';

export function TodoList(props) {
    const { todos, selectedTab } = props


    const filterTodosList = selectedTab === 'All' ?
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex}
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        {...props}
                        todo={todo} 
                        />
                )
            })}

        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        input: PropTypes.string.isRequired,
        complete: PropTypes.bool.isRequired
    })).isRequired,
    selectedTab: PropTypes.string.isRequired
};