import { useState } from "react";
import PropTypes from "prop-types";

export function TodoInput(props) {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add task"
        onKeyPress={(e) => {
          if (e.key === "Enter" && inputValue) {
            handleAddTodo(inputValue);
            setInputValue("");
          }
        }}
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleAddTodo(inputValue);
          setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

TodoInput.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};
