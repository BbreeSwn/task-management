import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import {useState} from "react"

function App() {
  const [task , setTask] = useState([
    {id:1,title:"Fix bugs"},
    {id:2,title:"Study React"},
    {id:3,title:"Cooking"}
  ])
  const [title , setTitle] = useState("")
  const [editID , setEditID] = useState(null)


  function deleteTask(id){
    const result = task.filter(item=>item.id !==id)
    setTask(result)
  }

  function editTask(id){
    setEditID(id)
    const editTask = task.find((item) => item.id === id)
    setTitle(editTask.title)
  }

  function saveTask(e){
    e.preventDefault()
    if(!title){
      alert("Please add your title!")
    }else{
      //add new title
      const newTask = {
        id:Math.floor(Math.random()*1000),
        title
      }
      setTask([...task,newTask])
      setTitle("")
    }

   
  }
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editID={editID} />
        <section>
          {
            task.map((data)=>(
              <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
            ))
          }
        </section>
      </div>
    </div>
  );
}

export default App;
