import PropTypes from 'prop-types'

export function Tabs(props){
    const tabs = ['All', 'In-progress', 'Completed']
    const {todos} = props
    //in react whenever we use the mapping tecnique we need to identify all the different buns with a unique key
    return (
        <nav className="tab-container">
            {tabs.map((tab,tabIndex) => {
                const numOfTasks = tab === 'All'? todos.length
                : tab === 'In-progress' ? todos.filter(val => !val.complete).length 
                : todos.filter(val => val.complete).length
                return(
                    <button key={tabIndex}
                    className="tab-button">
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}

Tabs.propTypes = {
    todos: PropTypes.array.isRequired
}
