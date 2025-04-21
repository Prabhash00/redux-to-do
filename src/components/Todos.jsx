import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <>
      <div className="text-2xl">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between rounded-lg items-center bg-gray-800 text-white p-3"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                type="text"
                className="bg-gray-700 rounded border border-gray-600 text-white p-2 w-full"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span className="text-2xl">{todo.text}</span>
            )}
            <div className="p-2 flex gap-x-2">
              <button
                className="bg-red-600 rounded p-2 hover:bg-red-700 cursor-pointer"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
              {editId === todo.id ? (
                <button
                  className="bg-green-600 hover:bg-green-700 cursor-pointer rounded p-2"
                  onClick={() => handleUpdate(todo.id)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-green-600 hover:bg-green-700 cursor-pointer rounded p-2"
                  onClick={() => handleEdit(todo)}
                >
                  Update
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
