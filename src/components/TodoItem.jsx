import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
export default function TodoItem({ todo, toggle, remove, startEdit }) {
  return (
    <div className="todo">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggle(todo.id)}
        />
        <span
          style={{
            textDecoration: todo.done ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </div>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button className="edit-btn" onClick={() => startEdit(todo)}>
          <CiEdit />
        </button>
        <button className="delete-btn" onClick={() => remove(todo.id)}>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}
