import React from 'react';

const basicSyntax = `// Define the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

// Use the reducer
const [state, dispatch] = useReducer(reducer, initialState);`;

const todoExample = `// Define the reducer
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.text, completed: false }];
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

// Use the reducer
const [todos, dispatch] = useReducer(todoReducer, []);`;

const formExample = `// Define the reducer
const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.field]: action.value };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

// Use the reducer
const [formData, dispatch] = useReducer(formReducer, {
    username: '',
    email: '',
    password: ''
});`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    The <code className="bg-gray-100 px-1 py-0.5 rounded">useReducer</code> hook is used to manage complex state logic in React components. It's particularly useful when you have state that involves multiple sub-values or when the next state depends on the previous one.
                </p>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Syntax</h3>
                    <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{basicSyntax}</code>
                    </pre>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Key Points</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Provides a more predictable way to handle complex state updates</li>
                        <li>Makes state transitions more explicit and easier to understand</li>
                        <li>Great for managing state that involves multiple sub-values</li>
                        <li>Works well with useContext for global state management</li>
                        <li>Similar to Redux pattern but built into React</li>
                    </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Common Usage Examples</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Todo List</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{todoExample}</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Form Management</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{formExample}</code>
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-yellow-900 mb-2">⚠️ Important Considerations</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                        <li>useReducer is best for complex state logic that involves multiple sub-values</li>
                        <li>For simple state management, useState might be more appropriate</li>
                        <li>Actions should be pure functions that return the new state</li>
                        <li>Consider using TypeScript for better type safety with actions</li>
                        <li>For very large applications, consider using a state management library like Redux</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Overview; 
