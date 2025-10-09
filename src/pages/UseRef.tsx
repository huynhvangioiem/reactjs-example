import React from 'react';
import ExampleHeader from '../components/ExampleHeader';
import ExampleSidebar from '../components/ExampleSidebar';
import Overview from '../components/examples/useRef/Overview';
import FocusInputExample from '../components/examples/useRef/FocusInputExample';
import PreviousValueExample from '../components/examples/useRef/PreviousValueExample';
import MutableTimerExample from '../components/examples/useRef/MutableTimerExample';

const UseRef: React.FC = () => {
    const sidebarSections = [
        { id: 'overview', title: 'Overview' },
        { id: 'focus-input', title: 'Focus Input Example' },
        { id: 'previous-value', title: 'Tracking Previous Values' },
        { id: 'mutable-timer', title: 'Storing Mutable Values' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="useRef Examples"
                description="Learn how useRef helps you work with DOM elements and mutable values across renders."
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <FocusInputExample />
                            <PreviousValueExample />
                            <MutableTimerExample />
                        </div>
                    </main>
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default UseRef;
