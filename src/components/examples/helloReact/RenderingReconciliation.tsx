import React from 'react';

const RenderingReconciliation: React.FC = () => {
    return (
        <section id="render-reconcile" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How React Renders &amp; Reconciles</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    When your component returns JSX, React builds a lightweight tree that describes the UI. On updates, React compares the new tree with the previous one and only mutates the browser DOM where the trees differ.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-green-900 mb-2">Render Phase</h3>
                        <ul className="list-disc list-inside space-y-2 text-green-800">
                            <li>Components run and produce new JSX</li>
                            <li>React builds a virtual representation of the UI</li>
                            <li>No DOM updates happen yet</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-purple-900 mb-2">Commit Phase</h3>
                        <ul className="list-disc list-inside space-y-2 text-purple-800">
                            <li>React diffs the new tree against the previous one</li>
                            <li>Minimal DOM changes are scheduled</li>
                            <li>Effects (like <code>useEffect</code>) run after the DOM updates</li>
                        </ul>
                    </div>
                </div>
                <p className="text-gray-600">
                    This reconciliation process keeps updates fast, even as your component tree grows.
                </p>
            </div>
        </section>
    );
};

export default RenderingReconciliation;
