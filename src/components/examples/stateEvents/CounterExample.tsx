import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const codeExample = `const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};`;

const CounterExample: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset = () => setCount(0);

    return (
        <section id="counter-example" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Counter Example</h2>
            <p className="text-gray-600 mb-4">
                A counter demonstrates how event handlers trigger state updates. Notice the functional updates to read the previous value safely.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto mb-6">
                <code className="text-sm">{codeExample}</code>
            </pre>
            <div className="bg-white border rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
                <span className="text-3xl font-semibold text-gray-900">Count: {count}</span>
                <div className="flex gap-2">
                    <Button onClick={increment}>Increment</Button>
                    <Button variant="outline" onClick={decrement}>Decrement</Button>
                    <Button variant="secondary" onClick={reset}>Reset</Button>
                </div>
            </div>
        </section>
    );
};

export default CounterExample;
