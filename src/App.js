import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState,useEffect } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [editID, setEditID] = useState(null);

  //? ☝🏻 แบบที่ 1 เมื่อมีการเปลี่ยนแปลง state จะเกิด effect ขึ้นทั้งหมด เช่น พิมว่า ไป useEffect จะทำงาน 2 ครั้ง คือ ไ และ ป 
  //? ✌🏻 แบบที่ 2 เมื่อ Run App useEffect จะทำงานแค่ครั้งเดียวตอนเริ่มต้น
  //? 👌🏻 แบบที่ 3 ดักจับ effect ที่เกิดขึ้น ใน state ที่กำหนด เมื่อ state ที่กำหนด มีการแก้ไข useEffect จะทำงาน
  useEffect(()=>{
    console.log("Call  useEffect");
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
    <div className="App">
      <Header />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editID={editID}
        />
        <section>
          {task.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
