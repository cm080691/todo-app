import React from "react";
import ToDo from "./ToDo";

const ToDoList = (props) => {
  const { toDoList, handleToggle, handleFilter } = props;
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
