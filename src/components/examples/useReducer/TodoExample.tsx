import React, { useReducer, useState } from 'react';

const codeExample = `import React, { useReducer, useState } from 'react';

// Define the Todo type
type Todo = {
    id: string;
    text: string;
    completed: boolean;
};

// Helper function to generate unique IDs
const generateUniqueId = (): string => {
    return \`\${Date.now()}-\${Math.random().toString(36).substring(2, 11)}\`;
};

// Define the action types
type Action =
    | { type: 'ADD_TODO'; text: string }
    | { type: 'TOGGLE_TODO'; id: string }
    | { type: 'DELETE_TODO'; id: string };

// Define the reducer
const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: generateUniqueId(), text: action.text, completed: false }];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};

// Todo component
const TodoList: React.FC = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch({ type: 'ADD_TODO', text });
            setText('');
        }
    };

    return (
        <div className="space-y-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Add a new todo"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Add
                </button>
            </form>
            <ul className="space-y-2">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between p-3 bg-white border rounded-lg"
                    >
                        <span
                            className={\`flex-1 \${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}\`}
                        >
                            {todo.text}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
                                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                            >
                                Toggle
                            </button>
                            <button
                                onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};`;

// Define the Todo type
type Todo = {
    id: string;
    text: string;
    completed: boolean;
};

// Helper function to generate unique IDs
const generateUniqueId = (): string => {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
};

// Define the action types
type Action =
    | { type: 'ADD_TODO'; text: string }
    | { type: 'TOGGLE_TODO'; id: string }
    | { type: 'DELETE_TODO'; id: string };

// Define the reducer
const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: generateUniqueId(), text: action.text, completed: false }];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};

// Todo component
const TodoList: React.FC = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch({ type: 'ADD_TODO', text });
            setText('');
        }
    };

    return (
        <div className="space-y-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Add a new todo"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Add
                </button>
            </form>
            <ul className="space-y-2">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between p-3 bg-white border rounded-lg"
                    >
                        <span
                            className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}
                        >
                            {todo.text}
                        </span>
                        <div className="flex gap-2">
                            <button
                                onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
                                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                            >
                                Toggle
                            </button>
                            <button
                                onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const TodoExample: React.FC = () => {
    return (
        <section id="todo-example" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Todo List Example</h2>
            <p className="mb-4">
                This example demonstrates how useReducer can be used to manage a todo list with complex state updates.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>The todo list state is managed using useReducer</li>
                <li>Actions are dispatched to add, toggle, and delete todos</li>
                <li>The reducer handles all state updates in a predictable way</li>
                <li>Unique IDs are generated using a combination of timestamp and random string</li>
            </ul>

            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            {/* Live Demo */}
            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <TodoList />
            </div>
        </section>
    );
};

export default TodoExample;
