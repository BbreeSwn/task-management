import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState,useEffect } from "react";

function App() {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("task"))||[]);
  const [title, setTitle] = useState("");
  const [editID, setEditID] = useState(null);
  const [theme,setTheme] = useState("light")

  // บันทึกข้อมูลทั้งหมดลงไปใน localStorage ที่เป็นฐานข้อมูลใน setItem โดยต้องตั้งชื่อฐานข้อมูลคือ "task"
  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task))
  },[task])

  function deleteTask(id) {
    const result = task.filter((item) => item.id !== id);
    setTask(result);
  }

  function editTask(id) {
    setEditID(id);
    const editTask = task.find((item) => item.id === id);
    setTitle(editTask.title);
  }

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("Please add your title!");
    } else if (editID) {
      //update
      const updateTask = task.map((item) => {
        //which title.id === editID ? let change propertie title
        if (item.id === editID) {
          return { ...item, title: title };
        }
        return item;
      });
      setTask(updateTask);
      setEditID(null);
      setTitle("");
    } else {
      //add new title
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title,
      };
      setTask([...task, newTask]);
      setTitle("");
    }
  }
  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className={"container "+theme}>
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editID={editID}
          theme={theme}
        />
        <section>
          {task.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
              theme={theme}
              setTheme={setTheme}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
