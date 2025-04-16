import React from 'react';

const basicSyntax = `const MemoizedComponent = React.memo(Component, [areEqual]);`;

const simpleExample = `const MyComponent = React.memo(({ name, age }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
});`;

const withCustomComparisonExample = `const areEqual = (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
};

const UserProfile = React.memo(({ id, name, details }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{details}</p>
        </div>
    );
}, areEqual);`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    <code className="bg-gray-100 px-1 py-0.5 rounded">React.memo</code> is a higher-order component that memoizes the rendered output of a component, preventing unnecessary re-renders when the props haven't changed.
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
                        <li>Prevents unnecessary re-renders of functional components</li>
                        <li>Performs a shallow comparison of props by default</li>
                        <li>Can be customized with a comparison function</li>
                        <li>Useful for optimizing performance of components that render often</li>
                        <li>Works well with other performance optimizations like useMemo and useCallback</li>
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
                            <h4 className="font-medium text-green-800 mb-2">With Custom Comparison</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{withCustomComparisonExample}</code>
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-yellow-900 mb-2">⚠️ Important Considerations</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                        <li>Don't use React.memo for components that re-render with different props frequently</li>
                        <li>Be careful with custom comparison functions - they can be more expensive than the re-render itself</li>
                        <li>Remember that React.memo only checks for prop changes - state changes will still trigger re-renders</li>
                        <li>Use React.memo in combination with useMemo and useCallback for optimal performance</li>
                        <li>Profile your application before and after using React.memo to ensure it's actually helping</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Overview;
