import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

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
        setCount(0);
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
                    <Button onClick={incrementCount}>Increment</Button>
                    <Button variant="destructive" onClick={decrementCount}>Decrement</Button>
                    <Button variant="outline" onClick={resetCount}>Reset</Button>
                </div>
            </div>
        </section>
    );
};

export default CounterExample;
