import React, { useState, useMemo } from 'react';

const numbers = [1, 2, 3, 4, 5];

const codeExample = `import React, { useMemo, useState } from 'react';

const numbers = [1, 2, 3, 4, 5]; // Define numbers outside component to prevent recreation

const ArrayMultiplicationDemo: React.FC = () => {
    const [memoizedMultiplier, setMemoizedMultiplier] = useState(2);
    const [nonMemoizedMultiplier, setNonMemoizedMultiplier] = useState(0);

    // Memoized expensive calculation
    const memoizedResults = useMemo(() => {
        console.log('Memoized calculation is being performed...');
        return numbers.map(num => num * memoizedMultiplier);
    }, [memoizedMultiplier]);

    // Non-memoized calculation for comparison
    const calculateNonMemoizedResults = () => {
        console.log('Non-memoized calculation is being performed...');
        return numbers.map(num => num * nonMemoizedMultiplier);
    };

    return (
        <div>
            <div>
                <p>Original Array: [{numbers.join(', ')}]</p>
                <p>Memoized Results: [{memoizedResults.join(', ')}]</p>
                <p>Current multiplier: {memoizedMultiplier}</p>
            </div>
            <div>
                <p>Non-Memoized Results: [{calculateNonMemoizedResults().join(', ')}]</p>
                <p>Current non-multiplier: {nonMemoizedMultiplier}</p>
            </div>
            <button onClick={() => setMemoizedMultiplier(prev => prev + 1)}>
                Increase Memoized Multiplier
            </button>
            <button onClick={() => setNonMemoizedMultiplier(prev => prev + 1)}>
                Increase Non-Memoized Multiplier
            </button>
        </div>
    );
};`;

const ArrayMultiplicationDemo: React.FC = () => {
    const [memoizedMultiplier, setMemoizedMultiplier] = useState(2);
    const [nonMemoizedMultiplier, setNonMemoizedMultiplier] = useState(0);

    // Memoized expensive calculation
    const memoizedResults = useMemo(() => {
        console.log('Memoized calculation is being performed...');
        return numbers.map(num => num * memoizedMultiplier);
    }, [memoizedMultiplier]);

    const calculateNonMemoizedResults = () => {
        console.log('Non-memoized calculation is being performed...');
        return numbers.map(num => num * nonMemoizedMultiplier);
    }; // Non-memoized calculation for comparison with logging

    return (
        <section id="array-calculation" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Array Multiplication Demo</h2>
            <p className="mb-4">
                This example demonstrates how useMemo can be used to memoize array calculations, preventing unnecessary recalculations on every render.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>The calculation is only performed when the multiplier changes</li>
                <li>The memoized result is used to display the array calculation results</li>
                <li>Check the console to see when the calculation is performed</li>
            </ul>

            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            {/* Live Demo */}
            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>

                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium text-gray-700">Original Array:</p>
                                <p className="text-sm text-gray-700">[{numbers.join(', ')}]</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-700">Memoized Results:</p>
                                <p className="text-sm text-gray-700">[{memoizedResults.join(', ')}]</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Current multiplier: {memoizedMultiplier}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm font-medium text-gray-700">Non-Memoized Results:</p>
                            <p className="text-sm text-gray-700">[{calculateNonMemoizedResults().join(', ')}]</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Current non-multiplier: {nonMemoizedMultiplier}
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setMemoizedMultiplier(prev => prev + 1)}
                            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Increase Memoized Multiplier
                        </button>
                        <button
                            onClick={() => setNonMemoizedMultiplier(prev => prev + 1)}
                            className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                        >
                            Increase Non-Memoized Multiplier
                        </button>
                    </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                    Open the console to see the render behavior difference between the two buttons.
                </p>
            </div>
        </section>
    );
};

export default ArrayMultiplicationDemo;
