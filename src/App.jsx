import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const style = {
    display: "flex",
    flexDirection: "column",
    width: "60vw",
    border: "2px solid orange",
    padding: "15px",
    textAlign: "left",
    fontWeight: "500",
    borderRadius: "15px",
    marginBottom: "15px",
  };

  let url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const editText = (e) => {
    let read = e.target.previousElementSibling;
    read.removeAttribute("readOnly");
    read.focus();
  };

  const saveText = (e) => {
    let read = e.target.previousElementSibling;
    let save = read.previousElementSibling;
    save.innerHTML = save.value;
    save.setAttribute("readOnly", true);
    alert("You have edited a text");
    console.log(save);
  };

  const deleteText = (e) => {
    let toBeDeleted = e.target.parentElement;
    toBeDeleted.remove()
  };
  
  return (
    <>
      {data &&
        data.map((post) => {
          return (
            <div style={style}>
              <textarea readOnly key={post.id}>
                {post.title}
              </textarea>
              <button className="edit" onClick={editText}>
                Edit
              </button>
              <button onClick={saveText}>Save</button>
              <button className="delete" onClick={deleteText}>Delete</button>
            </div>
          );
        })}
    </>
  );
}

export default App;
