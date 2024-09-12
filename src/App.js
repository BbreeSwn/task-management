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

  function deleteTask(id){
    const result = task.filter(item=>item.id !==id)
    setTask(result)
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
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} />
        <section>
          {
            task.map((data)=>(
              <Item key={data.id} data={data} deleteTask={deleteTask} />
            ))
          }
        </section>
      </div>
    </div>
  );
}

export default App;
