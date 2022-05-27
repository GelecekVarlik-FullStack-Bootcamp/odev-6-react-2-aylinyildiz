import { useState } from "react";
import "./App.css";
import { Categories } from "./components/categories";
import { Todos } from "./components/todos";

function App() {
  const [tab, setTab] = useState("todo");
  return (
    <div className="container">
      <div>
        <div className="headerbtn">
        <button onClick={() => setTab("todo")} className="btnHeader">Todolar</button>
        <button onClick={() => setTab("categories")} className="btnHeader">Kategoriler</button>
        </div>
     
        {tab === "todo" ? <Todos /> : <Categories />}
      </div>
    </div>
  );
}

export default App;

