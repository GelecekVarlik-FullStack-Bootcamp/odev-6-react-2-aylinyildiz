import Styled from "./Todos.styled";
import { useState, useEffect } from "react";
import CategoryService from "../../services/category.service";
import TodosService from "../../services/todos.service";
import TodoList from "./TodoList";

function Todos() {
  const [todo, setTodo] = useState("");
  const [categories, setCategories] = useState([]);
  const handleChange = e => setCategories(e.target.value);
  useEffect(() => {
    CategoryService.getList().then(
      (response) => {
        setCategories(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  
  const handleAddTodos = async (e) =>{
    e.preventDefault();
    try{
      await TodosService.createTodo(todo,1, 1)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Styled>
      <div>
        <form onSubmit={handleAddTodos}>
          <input
            type="text"
            placeholder="Todo Açıklama Title"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <select>
            <option value="0">Kategoriler</option>
            {categories.map((category, index) => (
              <option value={index} onChange={handleChange}>{category.title}</option>
            ))}
          </select>

          <select>
            <option value="0" >
              Status
            </option>
            {/* {categories.map((category, index) => (
              <option value={index}>{category.title}</option>
            ))} */}
          </select>
          <button type="submit" className="btnadd">Ekle</button>
        </form>

        <div className="todo-list">
          <TodoList />
        </div>
      </div>
    </Styled>
  );
}

export default Todos;
