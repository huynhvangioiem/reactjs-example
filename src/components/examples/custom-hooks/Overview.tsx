import React from 'react';

const basicSyntax = `// Custom hooks can return any values based on their purpose
const useCustomHook = (params) => {
    // Hook logic here
    return value; // Can be any value, function, or object
};`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    Custom Hooks are JavaScript functions that start with 'use' and can call other React Hooks. They allow you to extract component logic into reusable functions.
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
                        <li>Must start with the "use" prefix</li>
                        <li>Can use other React Hooks inside them</li>
                        <li>Each call to a custom Hook gets its own isolated state</li>
                        <li>Can accept any arguments and return any values</li>
                        <li>Help extract and share common component logic</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Overview;
