import React from 'react';
import ExampleHeader from '../components/ExampleHeader';
import ExampleSidebar from '../components/ExampleSidebar';
import Overview from '../components/examples/componentsProps/Overview';
import PropsPatterns from '../components/examples/componentsProps/PropsPatterns';
import ProfileCardExample from '../components/examples/componentsProps/ProfileCardExample';

const ComponentsAndProps: React.FC = () => {
    const sidebarSections = [
        { id: 'overview', title: 'Overview' },
        { id: 'props-patterns', title: 'Children & Defaults' },
        { id: 'card-example', title: 'Profile Card Example' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="Components & Props"
                description="Get comfortable writing function components, destructuring props, and composing UI with children."
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <PropsPatterns />
                            <ProfileCardExample />
                        </div>
                    </main>
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default ComponentsAndProps;
