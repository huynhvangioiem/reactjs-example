import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const codeExample = `import { useEffect, useRef, useState } from 'react';

const PreviousValue = () => {
    const [count, setCount] = useState(0);
    const previousCountRef = useRef(count);

    useEffect(() => {
        previousCountRef.current = count;
    }, [count]);

    return (
        <div>
            <p>Current: {count}</p>
            <p>Previous: {previousCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Button variant="outline" onClick={() => setCount(0)}>Reset</Button>
        </div>
    );
};`;

const PreviousValueExample: React.FC = () => {
    const [count, setCount] = useState(0);
    const previousCountRef = useRef(count);

    useEffect(() => {
        previousCountRef.current = count;
    }, [count]);

    return (
        <section id="previous-value" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
                Tracking Previous Values
            </h2>
            <p className="mb-4">
                By combining <code>useRef</code> with <code>useEffect</code>,
                you can store values from previous renders. This is useful when
                you need to compare the current and previous values without
                triggering extra renders.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Store a mutable value that survives re-renders</li>
                <li>Update the ref after each render without causing a loop</li>
                <li>
                    Compare current and previous values inside the component
                </li>
            </ul>

            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            <div className="mt-6 p-6 bg-white border rounded-lg space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Live Demo</h3>
                <div className="space-y-2">
                    <p className="text-gray-700">Current count: {count}</p>
                    <p className="text-gray-500">
                        Previous count: {previousCountRef.current}
                    </p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button onClick={() => setCount((prev) => prev + 1)}>
                        Increment
                    </Button>
                    <Button variant="outline" onClick={() => setCount(0)}>
                        Reset
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PreviousValueExample;
