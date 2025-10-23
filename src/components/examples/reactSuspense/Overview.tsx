import React from 'react';

const basicUsage = `import React, { Suspense } from 'react';

const LazyPage = React.lazy(() => import('./LazyPage'));

export function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <LazyPage />
        </Suspense>
    );
}`;

const boundaryPlacement = `return (
    <Layout>
        <Suspense fallback={<SidebarSkeleton />}>
            <LazySidebar />
        </Suspense>
        <main>
            <Suspense fallback={<ArticleSpinner />}>
                <Article />
            </Suspense>
        </main>
    </Layout>
);`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4 text-gray-600">
                <p>
                    <code className="bg-gray-100 px-1 py-0.5 rounded">React.Suspense</code> lets you declare a loading state for part of your tree. When a child suspends (for example, while lazy-loaded code or data is on the way), React shows the <code className="bg-gray-100 px-1 py-0.5 rounded">fallback</code> until the work resolves.
                </p>

                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Usage</h3>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{basicUsage}</code>
                    </pre>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Key Points</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Fallback UI renders while descendants suspend</li>
                        <li>Once every suspended child resolves, React swaps the fallback for the real UI</li>
                        <li>Use multiple Suspense boundaries to keep slow sections isolated</li>
                        <li>Combine with <code>React.lazy</code> or forthcoming async data APIs</li>
                        <li>Pair with error boundaries to handle load failures gracefully</li>
                    </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Boundary Placement Example</h3>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{boundaryPlacement}</code>
                    </pre>
                    <p className="mt-3 text-green-800">
                        Isolate expensive sections so one slow area does not block the whole screen. Nested Suspense boundaries can each show an appropriate skeleton or spinner.
                    </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-yellow-900 mb-2">⚠️ Considerations</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                        <li>Suspense boundaries never swallow errors—wrap them in an error boundary to surface failures</li>
                        <li>A single fallback renders until <em>all</em> children inside resolve</li>
                        <li>Place boundaries close to the UI they protect to avoid flashing entire layouts</li>
                        <li>Keep fallback UIs lightweight so they appear instantly</li>
                        <li>Suspense currently works with <code>React.lazy</code> and select data frameworks; avoid manual fetches that bypass the boundary</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Overview;
