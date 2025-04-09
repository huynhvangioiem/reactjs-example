import React from 'react';

const basicSyntax = `useEffect(() => {
    // effect code here
    return () => {
        // cleanup code here
    };
}, [dependencies]);`;

const dependencyExamples = `useEffect(() => {
    // runs only once on mount
}, []);  // empty dependency array

useEffect(() => {
    // runs when count changes
}, [count]);  // with dependencies

useEffect(() => {
    // runs on every render
});  // no dependency array`;

const cleanupExample = `useEffect(() => {
    const subscription = someAPI.subscribe();
    return () => {
        subscription.unsubscribe();
    };
}, []);`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    The <code className="bg-gray-100 px-1 py-0.5 rounded">useEffect</code> hook is used to handle side effects in functional components. It lets you synchronize a component with an external system.
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
                        <li>Handles side effects in functional components</li>
                        <li>Runs after every render by default</li>
                        <li>Can control when effects run using dependency array</li>
                        <li>Can clean up effects using return function</li>
                        <li>Common use cases: data fetching, subscriptions, DOM manipulation</li>
                    </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Usage Examples</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Dependency Array Variations</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{dependencyExamples}</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Cleanup Function</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{cleanupExample}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
