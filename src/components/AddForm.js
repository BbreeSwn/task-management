import "./AddForm.css";

export default function AddForm(props) {
  const { title, setTitle,saveTask,editID,theme} = props;
  const textColor = theme === "dark" ? "#ffffff" : "#333333";
  return (
    <div >
      <h2 style={{ color: textColor }} >App management</h2>
      <form onSubmit={saveTask} >
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editID ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}
