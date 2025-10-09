import React from 'react';

const childrenSnippet = `<Section title="Latest Articles">
    <ArticleList articles={articles} />
</Section>`;

const renderPropSnippet = `<DataLoader url="/api/messages">
    {(messages) => <MessageList messages={messages} />}
</DataLoader>`;

const slotSnippet = `<DashboardLayout
    sidebar={<Sidebar />}
    header={<DashboardHeader />}
>
    <Outlet />
</DashboardLayout>`;

const Patterns: React.FC = () => {
    return (
        <section id="composition-patterns" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Composition Patterns</h2>
            <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Children as Content</h3>
                    <p className="text-blue-800 mb-3">
                        The simplest form of composition: pass elements through <code>children</code> and render them inline where needed.
                    </p>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{childrenSnippet}</code>
                    </pre>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Render Prop Functions</h3>
                    <p className="text-green-800 mb-3">
                        Pass a function as a prop when the parent needs to control rendering logic (for example, after loading data or tracking hover state).
                    </p>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{renderPropSnippet}</code>
                    </pre>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-purple-900 mb-2">Slot Pattern</h3>
                    <p className="text-purple-800 mb-3">
                        Accept named props (<code>header</code>, <code>sidebar</code>, etc.) to create multiple layout slots.
                    </p>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{slotSnippet}</code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Patterns;
