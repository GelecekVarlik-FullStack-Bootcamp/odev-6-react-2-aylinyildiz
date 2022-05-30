import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Categories } from "./components/categories";
import { Todos } from "./components/todos";
import {Login} from "./components/Auth"


function App() {
  const [tab, setTab] = useState("todo");
  const [isLogged, setIslogged] = useState(false);
  return (
    <div className="container">
      
      {/* {
        isLogged ? (
          <div>
          <div className="headerbtn">
          <button onClick={() => setTab("todo")} className="btnHeader">Todolar</button>
          <button onClick={() => setTab("categories")} className="btnHeader">Kategoriler</button>
          </div>
       
          {tab === "todo" ? <Todos /> : <Categories />}
        </div>

        ) :
        (
          <Login setIslogged={setIslogged}/>
        )
      }
       */}
      <div className="headerbtn">
          <button onClick={() => setTab("todo")} className="btnHeader">Todolar</button>
          <button onClick={() => setTab("categories")} className="btnHeader">Kategoriler</button>
          {tab === "todo" ? <Todos /> : <Categories />}
          </div>
       

     

       <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/categories" element={<Categories />} />
          
          <Route path="/todos" element={<Todos />} /> */}
        </Routes> 
    </div>
  );
}

export default App;

