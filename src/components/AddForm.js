import React from "react";

export default function AddForm() {
  return (
    <>
      <h2>Form management</h2>
      <form className="form-group">
        <input type="text" className="text-input" />
        <button type="submit" className="submit-btn">Add</button>
      </form>
    </>
  );
}
