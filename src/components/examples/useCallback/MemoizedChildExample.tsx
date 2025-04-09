import React, { useState, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';

// Memoized child component
const ExpensiveButton = memo(({ onClick, label }: { onClick: () => void; label: string }) => {
    console.log(`${label} button rendered`);
    return (
        <Button onClick={onClick}>
            {label}
        </Button>
    );
});

ExpensiveButton.displayName = 'ExpensiveButton';

const codeExample = `import { useState, useCallback, memo } from 'react';

// Memoized child component
const ExpensiveButton = memo(({ onClick, label }) => {
    console.log(\`\${label} button rendered\`);
    return <button onClick={onClick}>{label}</button>;
});

const Parent = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // Without useCallback - new function on every render
    const handleIncrementNormal = () => {
        setCount1(c => c + 1);
    };

    // With useCallback - same function instance
    const handleIncrementMemoized = useCallback(() => {
        setCount2(c => c + 1);
    }, []);

    return (
        <div>
            <div>
                <ExpensiveButton
                    onClick={handleIncrementNormal}
                    label="Normal Callback"
                />
                <span>Count: {count1}</span>
            </div>
            <div>
                <ExpensiveButton
                    onClick={handleIncrementMemoized}
                    label="Memoized Callback"
                />
                <span>Count: {count2}</span>
            </div>
        </div>
    );
};`;

const MemoizedChildExample: React.FC = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // Callback without useCallback - will create new function instance on every render
    const handleIncrementNormal = () => {
        setCount1(c => c + 1);
    };

    // Callback with useCallback - maintains same function instance between renders
    const handleIncrementMemoized = useCallback(() => {
        setCount2(c => c + 1);
    }, []); // Empty dependency array since we're using the functional update form

    return (
        <section id="memoized-child" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Memoized Child Component Example</h2>
            <p className="mb-4">
                This example demonstrates how useCallback works with memoized components. It shows how to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Create a memoized child component using React.memo()</li>
                <li>Compare normal vs memoized callback behavior</li>
                <li>Prevent unnecessary re-renders in child components</li>
                <li>Use useCallback with React.memo() for optimal performance</li>
            </ul>
            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>
            {/* Live Demo */}
            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <ExpensiveButton
                            onClick={handleIncrementNormal}
                            label="Normal Callback"
                        />
                        <span className="text-gray-700">Count: {count1}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ExpensiveButton
                            onClick={handleIncrementMemoized}
                            label="Memoized Callback"
                        />
                        <span className="text-gray-700">Count: {count2}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                        Open the console to see the render behavior difference between the two buttons.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MemoizedChildExample;
