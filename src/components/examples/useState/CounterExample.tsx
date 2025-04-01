import React, { useState } from 'react';

const CounterExample: React.FC = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    const codeExample = `import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    const resetCount = () => {
        setCount(0);s
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};`;

    return (
        <section id="counter" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Counter Example</h2>
            <p className="mb-4">
                This example demonstrates how to handle multiple state updates using useState. It shows how to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Initialize state with a default value</li>
                <li>Update state using functional updates</li>
                <li>Handle multiple state-changing functions</li>
                <li>Reset state to initial value</li>
            </ul>
            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>
            {/* Live Demo */}
            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Count: {count}</span>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        onClick={incrementCount}
                    >
                        Increment
                    </button>
                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                        onClick={decrementCount}
                    >
                        Decrement
                    </button>
                    <button
                        className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                        onClick={resetCount}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CounterExample;