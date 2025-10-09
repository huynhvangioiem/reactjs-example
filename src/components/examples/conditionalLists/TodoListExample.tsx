import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

type Todo = {
    id: number;
    text: string;
    done: boolean;
};

const codeExample = `const TodoList = ({ todos }: { todos: Todo[] }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.done ? '✅' : '⬜️'} {todo.text}
                </li>
            ))}
        </ul>
    );
};`;

const initialTodos: Todo[] = [
    { id: 1, text: 'Learn JSX syntax', done: true },
    { id: 2, text: 'Practice conditional rendering', done: false },
    { id: 3, text: 'Build a reusable component', done: false },
];

const TodoListExample: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    const toggleTodo = (id: number) => {
        setTodos((previous) =>
            previous.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const addTodo = () => {
        const newId = Math.max(...todos.map((todo) => todo.id), 0) + 1;
        setTodos((previous) => [
            ...previous,
            { id: newId, text: `New task #${newId}`, done: false },
        ]);
    };

    return (
        <section id="list-example" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Todo List Example</h2>
            <p className="text-gray-600 mb-4">
                Lists are usually rendered with <code>Array.map</code>. Provide a stable <code>key</code> so React can reconcile correctly when toggling or adding items.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto mb-6">
                <code className="text-sm">{codeExample}</code>
            </pre>
            <div className="bg-white border rounded-lg p-4 space-y-4">
                <div className="flex gap-2">
                    <Button onClick={addTodo}>Add Todo</Button>
                </div>
                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-2"
                        >
                            <button
                                onClick={() => toggleTodo(todo.id)}
                                className="flex items-center gap-2 text-left text-blue-900"
                            >
                                <span
                                    className={`h-5 w-5 rounded-full border border-blue-400 flex items-center justify-center ${
                                        todo.done ? 'bg-blue-500 text-white' : 'bg-white'
                                    }`}
                                >
                                    {todo.done ? '✓' : ''}
                                </span>
                                {todo.text}
                            </button>
                            <span className="text-sm text-blue-800">id: {todo.id}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TodoListExample;
