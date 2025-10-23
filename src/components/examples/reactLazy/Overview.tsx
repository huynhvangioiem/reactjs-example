import React from 'react';

const basicSyntax = `const LazyComponent = React.lazy(() => import('./LazyComponent'));`;

const componentExample = `import React, { Suspense, useState } from 'react';

const ReportsPanel = React.lazy(() => import('./ReportsPanel'));

const Dashboard = () => {
    const [showReports, setShowReports] = useState(false);

    return (
        <div>
            <button onClick={() => setShowReports(v => !v)}>
                Toggle reports panel
            </button>
            {showReports && (
                <Suspense fallback={<p>Loading reports...</p>}>
                    <ReportsPanel />
                </Suspense>
            )}
        </div>
    );
};`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4 text-gray-600">
                <p>
                    <code className="bg-gray-100 px-1 py-0.5 rounded">React.lazy</code> lets you defer loading a component until it is actually rendered. This enables code-splitting by route, tab, or any part of the UI that is not needed immediately.
                </p>

                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Syntax</h3>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{basicSyntax}</code>
                    </pre>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Key Points</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Works with dynamic <code>import()</code> calls and default exports</li>
                        <li>Requires wrapping lazy components in <code>&lt;Suspense&gt;</code></li>
                        <li>Great for route-level or feature-level code splitting</li>
                        <li>Helps trim initial bundle size and improve load times</li>
                        <li>Pairs well with loading indicators or skeleton UIs</li>
                    </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Common Usage Example</h3>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm whitespace-pre">{componentExample}</code>
                    </pre>
                    <p className="mt-3 text-green-800">
                        Only when the button is clicked will React fetch the code for <code>ReportsPanel</code>, keeping the initial render fast.
                    </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-yellow-900 mb-2">⚠️ Important Considerations</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                        <li>A lazy component must be the default export of the module being imported</li>
                        <li>Suspense fallback renders while the chunk downloads, so keep it lightweight</li>
                        <li>Use error boundaries to handle failures when loading a lazy component</li>
                        <li>Avoid lazily loading components that are always on screen</li>
                        <li>Measure bundle size and loading impact to validate the optimization</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Overview;
