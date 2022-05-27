import axios from "axios";
import authHeader from "./auth-header";

const API_URL="http://localhost:81/category/";


const getList = ()=>{
    return axios.get(API_URL, {headers:authHeader()});
}

const createCategory =  (title)=>{
    return axios
        .post(API_URL,{title:title},{headers:authHeader()})
        .then((response)=>{
            console.log(response)
            window.location.reload();
        })
};

const updateCategory = (title,id)=>{
    return axios
        .put(API_URL, {title:title},{headers:authHeader()})
}

const getById = (id)=>{
    return axios
    .get(API_URL + id, {headers:authHeader()})
}


const categoryService={
    getList,
    createCategory,
    getById
}
export default categoryService