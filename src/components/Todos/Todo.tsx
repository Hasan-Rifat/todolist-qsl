import { MdDelete, MdEdit } from "react-icons/md";

import { ITodo } from "@/interface/interface";
import React from "react";

type TodoProps = {
  Todo: ITodo;
  completeTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const Todo: React.FC<TodoProps> = ({ Todo, completeTodo, deleteTodo }) => {
  return (
    <div
      className={`flex  justify-between px-5 py-3 rounded-lg border-none my-5 text-white
      ${parseInt(Todo.id) % 2 === 0 ? "bg-[#60b7e8]" : "bg-gray-700"}

      `}
    >
      <span style={{ textDecoration: Todo.complete ? "line-through" : "" }}>
        {Todo.name}
      </span>
      <div className="flex gap-3 items-center">
        <button
          className={` px-3 py-1 rounded-lg  focus:outline-none focus:border-cyan-500 ${
            Todo.complete ? "bg-green-500" : "bg-red-500"
          }`}
          onClick={() => completeTodo(Todo.id)}
        >
          {Todo.complete ? "Complete" : "Incomplete"}
        </button>
        <button className="text-red-500" onClick={() => deleteTodo(Todo.id)}>
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
};
export default Todo;
