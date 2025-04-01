import React from 'react';

interface SidebarProps {
    sections: Array<{
        id: string;
        title: string;
    }>;
}

const ExampleSidebar: React.FC<SidebarProps> = ({ sections }) => {
    return (
        <aside className="w-64 flex-shrink-0">
            <div className="sticky top-8">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                    ON THIS PAGE
                </h2>
                <nav className="space-y-1">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="block text-gray-600 hover:text-blue-600 py-2 text-sm transition-colors"
                        >
                            {section.title}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default ExampleSidebar; 