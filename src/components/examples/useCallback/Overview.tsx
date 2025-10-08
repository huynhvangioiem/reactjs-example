import React from 'react';
const basicSyntax = `const memoizedCallback = useCallback(() => {
    // callback function logic
}, [dependencies]);`;

const simpleExample = `const handleClick = useCallback(() => {
    console.log('Button clicked!');
}, []); // No dependencies`;

const withDependenciesExample = `const [count, setCount] = useState(0);
const [step, setStep] = useState(1);

const handleIncrement = useCallback(() => {
    setCount(prev => prev + step);
}, [step]); // Recreate when step changes`;

const withMemoExample = `const MemoizedChild = memo(({ onAction }) => {
    return <button onClick={onAction}>Click me</button>;
});

const Parent = () => {
    const handleAction = useCallback(() => {
        // handle action
    }, []); // Empty dependencies

    return <MemoizedChild onAction={handleAction} />;
};`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    The <code className="bg-gray-100 px-1 py-0.5 rounded">useCallback</code> hook is a performance optimization hook that returns a memoized version of a callback function. It helps prevent unnecessary re-renders in child components that depend on callback function references.
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
                        <li>Returns a memoized version of the callback that only changes if dependencies change</li>
                        <li>Useful when passing callbacks to optimized child components using React.memo()</li>
                        <li>Helps prevent unnecessary re-renders by maintaining function reference stability</li>
                        <li>Should be used in conjunction with React.memo() for optimal performance benefits</li>
                    </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Common Usage Examples</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Simple Callback</h4>
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
                            <h4 className="font-medium text-green-800 mb-2">With React.memo()</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{withMemoExample}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
