import React, { useState } from 'react';

const ToggleExample: React.FC = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleState = () => {
        setIsOn(prevState => !prevState);
    };

    const codeExample =
        `import { useState } from 'react';

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleState = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <div>
            <button onClick={toggleState}>
                {isOn ? 'ON' : 'OFF'}
            </button>
            <p>Current state: {isOn ? 'Active' : 'Inactive'}</p>
        </div>
    );
};`;

    return (
        <section id="toggle" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Toggle Example</h2>
            <p className="mb-4">
                This example demonstrates how to handle boolean state using useState. It shows how to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Initialize boolean state</li>
                <li>Toggle state using functional updates</li>
                <li>Conditional rendering based on state</li>
                <li>Dynamic styling based on state</li>
            </ul>
            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>
            {/* Live Demo */}
            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <div className="space-y-4">
                    <button
                        className={`px-4 py-2 rounded-md transition-colors ${isOn
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-gray-600 hover:bg-gray-700 text-white'
                            }`}
                        onClick={toggleState}
                    >
                        {isOn ? 'ON' : 'OFF'}
                    </button>
                    <p className="text-gray-600">
                        Current state: {isOn ? 'Active' : 'Inactive'}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ToggleExample;