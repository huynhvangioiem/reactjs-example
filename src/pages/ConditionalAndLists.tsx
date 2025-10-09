import React from 'react';
import ExampleHeader from '../components/ExampleHeader';
import ExampleSidebar from '../components/ExampleSidebar';
import Overview from '../components/examples/conditionalLists/Overview';
import ConditionalExample from '../components/examples/conditionalLists/ConditionalExample';
import TodoListExample from '../components/examples/conditionalLists/TodoListExample';

const ConditionalAndLists: React.FC = () => {
    const sidebarSections = [
        { id: 'overview', title: 'Overview' },
        { id: 'conditional-example', title: 'Conditional Rendering' },
        { id: 'list-example', title: 'Todo List Example' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="Conditional Rendering & Lists"
                description="Control what shows up on screen with conditionals and render dynamic collections with keys."
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <ConditionalExample />
                            <TodoListExample />
                        </div>
                    </main>
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default ConditionalAndLists;
