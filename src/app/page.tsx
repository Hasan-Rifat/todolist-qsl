"use client";

import Todo from "@/components/Todos/Todo";
import { ITodo } from "@/interface/interface";
import { getDataLocalStorage, setDataLocalStorage } from "@/utils/localStorage";
import { useEffect, useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [name, setName] = useState<string>("");

  useEffect(() => {
    setTodo(getDataLocalStorage("todo"));
  }, []);

  const addTodo = () => {
    const newTodo = {
      id: Number(todo.length + 1).toString(),
      name,
      complete: false,
    };
    setTodo([...todo, newTodo]);
    setDataLocalStorage("todo", [...todo, newTodo]);
    setName("");
  };

  const completeTodo = (id: string) => {
    const newTodo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, complete: true };
      }
      return item;
    });
    setDataLocalStorage("todo", newTodo);
    setTodo(newTodo);
  };

  const deleteTodo = (id: string) => {
    const newTodo = todo.filter((item) => item.id !== id);
    setDataLocalStorage("todo", newTodo);
    setTodo(newTodo);
  };

  return (
    <main className="bg-white">
      <section>
        <div className="max-w-5xl mx-auto px-5">
          <div className="p-10">
            <h2 className="text-2xl text-black text-center my-5 font-semibold">
              Do it Now
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
              <input
                type="text"
                value={name}
                placeholder="Add Todo"
                className="text-black w-full lg:w-auto px-5 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-cyan-500 lg:col-span-3"
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 rounded-lg text-white"
                onClick={addTodo}
              >
                Add Todo
              </button>
            </div>

            {/* all todo */}
            {todo.map((item) => (
              <div key={item.id}>
                <Todo
                  Todo={item}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
