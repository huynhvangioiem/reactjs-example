import React from 'react';

const conditionalSnippet = `{isPremium ? <Badge>Pro</Badge> : <Badge>Free</Badge>}
{showDetails && <DetailsPanel />}
`;

const listSnippet = `{todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
))}`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    React leans on the underlying JavaScript language for conditionals and lists. Use inline conditionals and array methods to build expressive UIs from your data.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-blue-900 mb-2">Conditional Patterns</h3>
                        <p className="text-blue-800 mb-3">
                            Combine ternaries and logical AND (<code>&amp;&amp;</code>) to show or hide pieces of UI without leaving JSX.
                        </p>
                        <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                            <code className="text-sm">{conditionalSnippet}</code>
                        </pre>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-green-900 mb-2">Rendering Lists</h3>
                        <p className="text-green-800 mb-3">
                            Always provide a stable <code>key</code> for each item so React can reconcile efficiently.
                        </p>
                        <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                            <code className="text-sm">{listSnippet}</code>
                        </pre>
                    </div>
                </div>
                <p className="text-gray-600">
                    Keys should be stable, predictable identifiers—avoid using indexes when reordering or inserting items.
                </p>
            </div>
        </section>
    );
};

export default Overview;
