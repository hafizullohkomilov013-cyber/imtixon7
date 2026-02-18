import { useState, useEffect } from "react";
export default function Modal({ close, add, dark, editTodo, updateTodo }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (editTodo) {
      setValue(editTodo.text);
    } else {
      setValue("");
    }
  }, [editTodo]);

  const handleSubmit = () => {
    if (!value.trim()) return;

    if (editTodo) {
      updateTodo(editTodo.id, value);
    } else {
      add(value);
    }

    close();
  };
  return (
    <div className="modal-overlay">
      <div className={`modal ${dark ? "dark" : ""}`}>
        <h4>{editTodo ? "EDIT NOTE" : "NEW NOTE"}</h4>

        <input
          placeholder="Input your note..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="modal-actions">
          <button className="cancel-btn" onClick={close}>CANCEL</button>
          <button className="btn" onClick={handleSubmit}>
            {editTodo ? "UPDATE" : "APPLY"}
          </button>
        </div>
      </div>
    </div>
  );
}




