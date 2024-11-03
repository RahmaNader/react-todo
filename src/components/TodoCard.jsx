import  { useState } from 'react';
import PropTypes from 'prop-types';
import Confetti from 'react-confetti';

export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props;
    const text = todo.complete ? "Out of the woods" : "Is it over now?";
    const [showYay, setShowYay] = useState(false);

    const handleButtonClick = () => {
        handleCompleteTodo(todoIndex);
        setShowYay(true);
        setTimeout(() => setShowYay(false), 2000);
    };

    return (
        <div className="card todo-item">
            <span>{todo.input}</span>
            <div className="todo-buttons">
                <button onClick={handleButtonClick} disabled={todo.complete}>
                    <h6>{text}</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex);
                }}>
                    <h6>Exile</h6>
                </button>
            </div>
            {showYay && (
                <>
                <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Changed background color to white with opacity
                    color: 'black', // Changed text color to black
                    padding: '50px',
                    borderRadius: '10px',
                    width:'500px',
                    hight:'500px',
                    textAlign:'center',
                    zIndex: 1000
                }}>
                    Yay!! We are in the clear
                </div>
                </>
            )}
        </div>
    );
}

TodoCard.propTypes = {
    todo: PropTypes.shape({
        input: PropTypes.string.isRequired,
        complete: PropTypes.bool.isRequired,
    }).isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
    todoIndex: PropTypes.number.isRequired,
    handleCompleteTodo: PropTypes.func.isRequired,
};