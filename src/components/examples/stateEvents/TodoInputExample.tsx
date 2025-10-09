import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const codeExample = `const TodoInput = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [text, setText] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!text.trim()) return;
        setTodos((prev) => [...prev, text.trim()]);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(event) => setText(event.target.value)} />
            <button type="submit">Add task</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo + index}>{todo}</li>
                ))}
            </ul>
        </form>
    );
};`;

const TodoInputExample: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [text, setText] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;
        setTodos((previous) => [...previous, trimmed]);
        setText('');
    };

    return (
        <section id="todo-input-example" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Todo Input Example</h2>
            <p className="text-gray-600 mb-4">
                Controlled inputs keep the input value in React state. On submit, the component pushes a new todo into an immutable array copy.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto mb-6">
                <code className="text-sm">{codeExample}</code>
            </pre>
            <div className="bg-white border rounded-lg p-4">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder="Add a task..."
                        className="flex-1 rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button type="submit">Add Todo</Button>
                </form>
                {todos.length === 0 ? (
                    <p className="text-gray-500">No tasks yet. Add your first one!</p>
                ) : (
                    <ul className="space-y-2">
                        {todos.map((todo, index) => (
                            <li
                                key={`${todo}-${index}`}
                                className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-900"
                            >
                                <span className="h-2 w-2 rounded-full bg-blue-500" />
                                {todo}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default TodoInputExample;
