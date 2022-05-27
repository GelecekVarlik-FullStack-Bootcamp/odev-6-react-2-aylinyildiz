import { useEffect, useState } from "react";
import CategoryService from "../../services/category.service";
import Styled from "./Categories.styled";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
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

  const handleAddCategory = async (e)=>{
    e.preventDefault();
    try{
      await CategoryService.createCategory(title.toString())
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Styled>
      <div>
        <form onSubmit={handleAddCategory}>
          <input
            type="text"
            placeholder="Kategori Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button type="submit" className="btnadd">Ekle</button>
        </form>

        <div>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                {category.title} <button  className="btn">Statüleri Gör</button>
                <button  className="btn">Update</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Styled>
  );
}

export default Categories;
