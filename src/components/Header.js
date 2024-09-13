import "./Header.css"
import { AiOutlineSun , AiFillMoon  } from "react-icons/ai";

export default function Header(props) {
  const {theme , setTheme} = props
  function ToggleTheme(){
    if(theme === "light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
      
        <span>{theme === "light"? "light mode":"dark mode"}</span>
        <span className="icon" onClick={ToggleTheme}>{theme === "light"? <AiOutlineSun />: <AiFillMoon />}</span>
      </div>
    </header>
  );
}
