import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const codeExample = `import { useState, useCallback, useEffect } from 'react';

const DependencyExample = () => {
    const [multiplier, setMultiplier] = useState(1);

    // This callback will be recreated when multiplier changes
    const calculateResult = useCallback((number: number) => {
        return number * multiplier;
    }, [multiplier]); // multiplier in dependencies

    // Effect to show when callback is recreated
    useEffect(() => {
        console.log('calculateResult was recreated');
    }, [calculateResult]);

    const handleCalculate = () => {
        const number = 5;
        const calculatedResult = calculateResult(number);
        setResult(calculatedResult);
    };

    return (
        <div>
            <button onClick={handleCalculate}>Calculate Random Number</button>
        </div>
    );
};`;

const DependencyExample: React.FC = () => {
    const [multiplier, setMultiplier] = useState(1);
    const [result, setResult] = useState(0);
    const [renderCount, setRenderCount] = useState(0);

    // This callback will be recreated when multiplier changes
    const calculateResult = useCallback((number: number) => {
        console.log(`Calculation performed with multiplier: ${multiplier}`);
        return number * multiplier;
    }, [multiplier]);

    // Effect to demonstrate when the callback is recreated
    useEffect(() => {
        setRenderCount(prev => prev + 1);
        console.log('calculateResult function was recreated');
    }, [calculateResult]);

    const handleCalculate = () => {
        const number = 5;
        const calculatedResult = calculateResult(number);
        setResult(calculatedResult);
    };

    return (
        <section id="dependency" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Callback with Dependencies Example</h2>
            <p className="mb-4">
                This example shows when a useCallback function is recreated based on its dependencies.
                Watch the console and render count as you change the multiplier.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>The callback is recreated only when the multiplier changes</li>
                <li>Changing the multiplier increases the render count</li>
                <li>Clicking calculate button does not recreate the callback</li>
                <li>Open the console to see when calculations occur</li>
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
                        <label className="text-gray-700">Multiplier:</label>
                        <input
                            type="number"
                            value={multiplier}
                            onChange={(e) => setMultiplier(Number(e.target.value))}
                            className="p-1 border rounded w-20"
                            min="1"
                        />
                        <span className="text-sm text-gray-500">
                            (Change this to see callback recreation)
                        </span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button onClick={handleCalculate}>Calculate Random Number</Button>
                        <span className="text-gray-700">
                            <strong>Result: </strong> {result}
                        </span>
                    </div>

                    <div className="bg-gray-50 p-4 rounded">
                        <p className="text-sm text-gray-700">
                            Times callback was recreated: {renderCount}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            (This increases only when multiplier changes)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DependencyExample;
