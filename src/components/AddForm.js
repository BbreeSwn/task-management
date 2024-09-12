import "./AddForm.css";

export default function AddForm(props) {
  const { title, setTitle,saveTask,editID } = props;
  return (
    <>
      <h2>Form management</h2>
      <form onSubmit={saveTask}>
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
    </>
  );
}
