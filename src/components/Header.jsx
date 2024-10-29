import PropTypes from 'prop-types'

export function Header({ todos }) {
    const todosLength = todos.length
    const isTasksPlural = todosLength > 1
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'
    return (
        <header>
            <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}.</h1>
        </header>
    )
}

Header.propTypes = {
    todos: PropTypes.array.isRequired
}
