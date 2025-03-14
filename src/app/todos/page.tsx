"use client";

import { useEffect, useState } from "react";

export default function TodosPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/todos");
        const datas = await res.json();
        setData(datas.todos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-medium mb-3">To-Dos Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

        
        {data.map((todo, index) => (
          <div className="border p-5 rounded-lg shadow-md" key={index}>
            <p className="text-lg font-medium">{todo.todo}</p>
            <p className="mt-2 flex items-center">
              Completed:
              <span
                className={`ml-2 font-bold ${
                  todo.completed ? "text-green-500" : "text-red-500"
                }`}
              >
                {todo.completed ? "✔ Yes" : "✘ No"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
