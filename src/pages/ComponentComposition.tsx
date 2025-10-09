import React from 'react';
import ExampleHeader from '../components/ExampleHeader';
import ExampleSidebar from '../components/ExampleSidebar';
import Overview from '../components/examples/componentComposition/Overview';
import Patterns from '../components/examples/componentComposition/Patterns';
import LayoutExample from '../components/examples/componentComposition/LayoutExample';

const ComponentComposition: React.FC = () => {
    const sidebarSections = [
        { id: 'overview', title: 'Overview' },
        { id: 'composition-patterns', title: 'Patterns' },
        { id: 'layout-example', title: 'Layout Example' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="Component Composition"
                description="Compose complex screens from small pieces using children, render props, and slot-based layouts."
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <Patterns />
                            <LayoutExample />
                        </div>
                    </main>
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default ComponentComposition;
