import React from 'react';

const childrenSnippet = `type CardProps = {
    title: string;
    children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => (
    <section className="card">
        <h3>{title}</h3>
        {children}
    </section>
);`;

const defaultSnippet = `type AvatarProps = {
    name: string;
    size?: number;
};

const Avatar = ({ name, size = 40 }: AvatarProps) => {
    return <img src={getAvatar(name)} alt={name} width={size} height={size} />;
};`;

const PropsPatterns: React.FC = () => {
    return (
        <section id="props-patterns" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children &amp; Defaults</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    Most React components accept the special <code>children</code> prop, giving you composition out of the box. Combined with default props, you can build flexible building blocks that adapt to different contexts.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Children as Layout Slots</h3>
                    <p className="text-blue-800 mb-3">
                        Passing elements through <code>children</code> lets the parent decide what content to render while the component controls presentation.
                    </p>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{childrenSnippet}</code>
                    </pre>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Default Props in TypeScript</h3>
                    <p className="text-green-800 mb-3">
                        Provide defaults in the destructuring pattern so your component always has safe fallback values.
                    </p>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{defaultSnippet}</code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default PropsPatterns;
