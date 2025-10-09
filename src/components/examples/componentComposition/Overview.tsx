import React from 'react';

const compositionSnippet = `const Layout = ({ header, footer, children }: LayoutProps) => (
    <div className="layout">
        <header>{header}</header>
        <main>{children}</main>
        <footer>{footer}</footer>
    </div>
);`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    Composition keeps React components small, reusable, and focused. Instead of inheritance, React encourages passing UI through props or the special <code>children</code> slot.
                </p>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Guiding Principles</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Compose a larger screen from many smaller pieces</li>
                        <li>Keep components pure: accept data and render UI</li>
                        <li>Use props to customize behavior instead of subclassing</li>
                        <li>Embrace children to nest layout and content</li>
                    </ul>
                </div>
                <div className="bg-white border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Layout Skeleton</h3>
                    <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{compositionSnippet}</code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Overview;
