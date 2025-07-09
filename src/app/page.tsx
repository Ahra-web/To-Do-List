"use client";

import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function Page() {
    const [todos, setTodos] = useState<string[]>([]);

    const handleAdd = (text: string) => {
        setTodos((prev) => [...prev, text]);
    };

    const handleDelete = (index: number) => {
        setTodos((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <TodoInput onAdd={handleAdd} />
            <div className="mt-4">
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        text={todo}
                        onDelete={() => handleDelete(index)}
                    />
                ))}
            </div>
        </div>
    );
}
