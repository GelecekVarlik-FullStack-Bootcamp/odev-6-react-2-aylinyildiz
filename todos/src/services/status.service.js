import axios from "axios";
import authHeader from "./auth-header";


const API_URL="http://localhost:81/status";


const getById = (id) =>{
    return axios.get(API_URL + id ,{headers:authHeader()})
}

const statusService={
    getById
}

export default statusService