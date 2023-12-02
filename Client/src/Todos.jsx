import React from "react";
import "./index.css";
import { TiDeleteOutline } from "react-icons/ti";

const Todos = ({ tasks, handleCheck, handleDelete }) => {
  return (
    <div>
      {tasks.length ? (
        <ul>
          {tasks.map((item) => (
            <li key={item.id} className="work">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.work}
              </label>
              <TiDeleteOutline onClick={() => handleDelete(item.id)} />
            </li>
          ))}
        </ul>
      ) : (
        <h1>TODO List Is Empty Now OM SHRI VARDHANAYA NAMAH</h1>
      )}
    </div>
  );
};

export default Todos;
