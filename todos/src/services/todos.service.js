import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:81/todo";

const getList = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

const createTodo = (title, categoryId, statusId) => {
  return axios
  .post(
    API_URL,
    { title: title, categoryId: categoryId, statusId: statusId },
    { headers: authHeader() }
  )
  .then((response)=>{
    console.log(response)
    window.location.reload();
  })
};

const todoService = {
  getList,
  createTodo,
};
export default todoService;
