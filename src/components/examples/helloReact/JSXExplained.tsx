import React from 'react';

const attributeExample = `<div className="card" onClick={handleClick}>
    {title}
</div>`;

const JSXExplained: React.FC = () => {
    return (
        <section id="jsx-is-not-html" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why JSX Is Not HTML</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    JSX looks like HTML, but it lives entirely inside JavaScript. The browser never sees raw JSX; your build step transforms it into plain function calls before it runs.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-yellow-900 mb-2">Key Differences</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                        <li>Attribute names follow JavaScript naming, such as <code>className</code> and <code>onClick</code></li>
                        <li>You can inject values, arrays, and expressions between curly braces</li>
                        <li>JSX requires a single wrapping element and respects component scope</li>
                        <li>Every JSX tag resolves to either an HTML element or a React component function</li>
                    </ul>
                </div>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Example Snippet</h3>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{attributeExample}</code>
                    </pre>
                    <p className="text-gray-600 mt-2">
                        This component-like markup is not valid in plain HTML, yet JSX makes it natural and keeps it type-safe.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default JSXExplained;
