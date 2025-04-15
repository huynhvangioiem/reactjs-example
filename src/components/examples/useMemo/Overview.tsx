import React from 'react';

const basicSyntax = `const memoizedValue = useMemo(() => {
    // compute value
}, [dependencies]);`;

const simpleExample = `const [count, setCount] = useState(0);
const memoizedCount = useMemo(() => count * 2, [count]);`;

const withDependenciesExample = `const [a, setA] = useState(0);
const [b, setB] = useState(0);
const memoizedSum = useMemo(() => a + b, [a, b]);`;

const withCallbackExample = `const [items, setItems] = useState([]);
const memoizedSortedItems = useMemo(() => {
    return [...items].sort((a, b) => a - b);
}, [items]);`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    The <code className="bg-gray-100 px-1 py-0.5 rounded">useMemo</code> hook is a performance optimization hook that returns a memoized value. It helps prevent unnecessary recalculations of expensive computations.
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
                        <li>Returns a memoized value that only changes if dependencies change</li>
                        <li>Useful for memoizing expensive computations</li>
                        <li>Helps prevent unnecessary recalculations by caching the result</li>
                        <li>Should be used when the computation is expensive and the result is used multiple times</li>
                    </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Common Usage Examples</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Simple Memoization</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{simpleExample}</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">With Dependencies</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{withDependenciesExample}</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">With Callback</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{withCallbackExample}</code>
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-yellow-900 mb-2">⚠️ Important Note About Overuse</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                        <li>Don't use useMemo for simple calculations or operations that are not computationally expensive</li>
                        <li>Overusing useMemo can actually harm performance due to the overhead of memoization</li>
                        <li>Only use useMemo when you can measure a performance benefit</li>
                        <li>Remember that useMemo itself has a cost - it needs to store the previous value and compare dependencies</li>
                        <li>For simple value transformations, regular JavaScript operations are often more efficient</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Overview;
