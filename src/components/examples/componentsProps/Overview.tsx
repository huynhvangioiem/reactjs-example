import React from 'react';

const functionComponentSnippet = `type BadgeProps = {
    label: string;
    tone?: 'neutral' | 'success' | 'warning';
};

const Badge = ({ label, tone = 'neutral' }: BadgeProps) => {
    return <span className={\`badge badge-\${tone}\`}>{label}</span>;
};`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    Function components are the core building block in modern React. A component is just a function that receives <em>props</em> and returns JSX. Destructuring props in the function signature keeps code concise and makes default values obvious.
                </p>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Function Component Anatomy</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Props enter as a single object argument</li>
                        <li>Destructure props to document what the component needs</li>
                        <li>Return JSX that renders based on those inputs</li>
                        <li>Keep components pure: the same props should produce the same UI</li>
                    </ul>
                </div>
                <div className="bg-white border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Destructuring with Defaults</h3>
                    <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{functionComponentSnippet}</code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Overview;
