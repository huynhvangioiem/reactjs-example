import React from 'react';
import ExampleHeader from '../components/ExampleHeader';
import ExampleSidebar from '../components/ExampleSidebar';
import Overview from '../components/examples/stateEvents/Overview';
import CounterExample from '../components/examples/stateEvents/CounterExample';
import TodoInputExample from '../components/examples/stateEvents/TodoInputExample';

const StateAndEvents: React.FC = () => {
    const sidebarSections = [
        { id: 'overview', title: 'Overview' },
        { id: 'counter-example', title: 'Counter Example' },
        { id: 'todo-input-example', title: 'Todo Input Example' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="State & Events"
                description="Learn how useState, event handlers, and immutable updates keep interactive UIs predictable."
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <CounterExample />
                            <TodoInputExample />
                        </div>
                    </main>
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default StateAndEvents;
