import React from 'react';

const stateSnippet = `const [value, setValue] = useState(initialValue);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // update state with the latest input
};`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    React state stores the changing pieces of data in your UI. The <code>useState</code> hook gives you that value plus a function to update it, and event handlers respond to user actions like clicks or typing.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Key Ideas</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li><code>useState</code> returns a pair: the current value and a setter function</li>
                        <li>Event handlers are plain functions you pass to props like <code>onClick</code> or <code>onChange</code></li>
                        <li>Call the setter with the new value (make a copy first if you change arrays or objects)</li>
                        <li>After you call the setter, React runs the component again so the UI reflects the new state</li>
                    </ul>
                </div>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">State + Event Handler</h3>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{stateSnippet}</code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Overview;
