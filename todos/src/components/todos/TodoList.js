import { useState, useEffect } from "react";
import TodosService from "../../services/todos.service";

function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    TodosService.getList().then(
      (response) => {
        setTodos(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
   
  }, []); 
  return (
    <>
      <ul>
        {todos.map((todos, index) => (
          <li key={index}>
            {todos.title} - {todos.categoryId} - {todos.statusId} <button  className="btn">Update</button>

          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
