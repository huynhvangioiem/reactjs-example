import React from 'react';
import ExampleHeader from '../components/ExampleHeader';
import ExampleSidebar from '../components/ExampleSidebar';
import CounterExample from '../components/examples/useState/CounterExample';
import ToggleExample from '../components/examples/useState/ToggleExample';
import FormInputExample from '../components/examples/useState/FormInputExample';
import Overview from '../components/examples/useState/Overview';

const UseState: React.FC = () => {
    const sidebarSections = [
        { id: 'overview', title: 'Overview' },
        { id: 'counter', title: 'Counter Example' },
        { id: 'toggle', title: 'Toggle Example' },
        { id: 'form-input', title: 'Form Input Example' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader title="useState Examples" description="Explore various examples demonstrating the use of the useState hook in React." />
            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <CounterExample />
                            <ToggleExample />
                            <FormInputExample />
                        </div>
                    </main>

                    {/* Right Sidebar Navigation */}
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default UseState;
