import "./Item.css";
import { FaRegTrashAlt , FaRegEdit  } from "react-icons/fa";

export default function Item(props) {
  const { data, deleteTask,editTask,theme } = props;

const textColor = theme === "dark" ? "#ffffff" : "#333333";

  return (
    <div >
    <div className="list-item" >
      <p className="title" style={{ color: textColor }} >{data.title}</p>
      <div className="button-container" >
      <FaRegTrashAlt className="btn" style={{ color: textColor }} onClick={() => deleteTask(data.id)}  />
       <FaRegEdit className="btn" style={{ color: textColor }} onClick={()=>editTask(data.id)} />
       
      </div>
    </div>
    </div>
  );
}
