import axios from "axios";

const API_URL="http://localhost:81/auth"

const register = (username,password)=>{
    return axios
        .post(API_URL + "/register",{
            username,
            password
        })
        .then((response)=>{
            if(response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data;
        })
}

const login = (username,password)=>{
    return axios
        .post(API_URL + "/login",{
            username,
            password
        })
        .then((response)=>{
            console.log(response)
            if(response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data;
        })
}

const authService={
    register,
    login
}
export default authService