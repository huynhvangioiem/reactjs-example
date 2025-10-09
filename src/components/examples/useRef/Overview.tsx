import React from 'react';

const basicSyntax = `const ref = useRef(initialValue);

// Access the current value
ref.current;

// Update the current value without causing a re-render
ref.current = newValue;`;

const domExample = `<input ref={inputRef} />;

useEffect(() => {
    inputRef.current?.focus();
}, []);`;

const mutableValueExample = `const intervalRef = useRef<NodeJS.Timeout | null>(null);

const start = () => {
    if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
            // runs without re-rendering on every tick
        }, 1000);
    }
};

const stop = () => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
};`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    The <code className="bg-gray-100 px-1 py-0.5 rounded">useRef</code> hook lets you persist values across renders without causing a re-render when the value changes. It&apos;s perfect for storing DOM references or mutable values that don&apos;t need to trigger UI updates.
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
                        <li>Returns a mutable <code>ref</code> object whose <code>current</code> property persists between renders</li>
                        <li>Updating <code>ref.current</code> does not trigger a re-render</li>
                        <li>Commonly used for accessing and manipulating DOM elements directly</li>
                        <li>Helpful for storing mutable values like timers, previous state, or third-party instance handles</li>
                        <li>Can be used to avoid re-creating values within event handlers</li>
                    </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Usage Examples</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">DOM Access</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{domExample}</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Mutable Values</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{mutableValueExample}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
