import React from 'react';
import ExampleHeader from '../components/ExampleHeader';
import ExampleSidebar from '../components/ExampleSidebar';
import Overview from '../components/examples/helloReact/Overview';
import JSXExplained from '../components/examples/helloReact/JSXExplained';
import RenderingReconciliation from '../components/examples/helloReact/RenderingReconciliation';
import HelloWorldExample from '../components/examples/helloReact/HelloWorldExample';

const HelloReact: React.FC = () => {
    const sidebarSections = [
        { id: 'overview', title: 'Overview' },
        { id: 'jsx-is-not-html', title: 'Why JSX Is Not HTML' },
        { id: 'render-reconcile', title: 'Rendering & Reconciliation' },
        { id: 'hello-world', title: 'Hello World Example' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="Hello React Basics"
                description="Understand JSX, how React renders your UI, and build a simple greeting component."
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <JSXExplained />
                            <RenderingReconciliation />
                            <HelloWorldExample />
                        </div>
                    </main>
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default HelloReact;
