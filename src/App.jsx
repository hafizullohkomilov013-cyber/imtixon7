import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  markAll,
} from "./features/todoSlice";
import { toggleTheme } from "./features/themeSlice";
import { useState } from "react";
import Modal from "./components/Modal";
import TodoItem from "./components/TodoItem";
import EmptyState from "./components/EmptyState";
function App() {
  const todos = useSelector((state) => state.todos);
  const dark = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const [search, setSearch] = useState("");
  const handleAdd = (text) => {
    dispatch(addTodo(text));
    setModalOpen(false);
  };
  const handleUpdate = (id, text) => {
    dispatch(updateTodo({ id, text }));
    setEditTodo(null);
    setModalOpen(false);
  };
  const filteredTodos = todos.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <h2 className="title">TODO LIST</h2>
      <div className="search-row">
        <input
          placeholder="Search note..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" onClick={() => dispatch(markAll())}>
          ALL
        </button>
        <button className="icon-btn" onClick={() => dispatch(toggleTheme())}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
      {filteredTodos.length === 0 ? (
        <EmptyState />
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggle={(id) => dispatch(toggleTodo(id))}
            remove={(id) => dispatch(deleteTodo(id))}
            startEdit={(todo) => {
              setEditTodo(todo);
              setModalOpen(true);
            }}
          />
        ))
      )}
      {modalOpen && (
        <Modal
          close={() => {
            setModalOpen(false);
            setEditTodo(null);
          }}
          add={handleAdd}
          dark={dark}
          editTodo={editTodo}
          updateTodo={handleUpdate}
        />
      )}
      <div className="fab-container">
        <div className="fab" onClick={() => setModalOpen(true)}>
          +
        </div>
      </div>
    </div>
  );
}
export default App;
