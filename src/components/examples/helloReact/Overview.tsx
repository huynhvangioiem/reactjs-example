import React from 'react';

const jsxSnippet = `const element = <button className="primary">Click me</button>;
// Compiles to:
// React.createElement("button", { className: "primary" }, "Click me");`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    Level 1 of this learning path starts with the core idea of React: describe UI with JSX and let the library reconcile changes for you. This overview highlights what JSX is, how React treats it differently from HTML, and sets the stage for the examples that follow.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Why JSX Matters</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Express UI structure alongside the logic that powers it</li>
                        <li>Embed JavaScript expressions directly within markup</li>
                        <li>Compose components as if they were custom HTML elements</li>
                    </ul>
                </div>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">JSX Under the Hood</h3>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{jsxSnippet}</code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Overview;
