import React from 'react';
import ExampleSidebar from '../components/ExampleSidebar';
import SectionContent from '../components/home/SectionContent';

const Home: React.FC = () => {
    const navigationGroups = [
        {
            title: 'React Hooks',
            description: 'Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.',
            keyPoints: [
                'Hooks can only be called at the top level of your component',
                'Hooks can only be called from React function components',
                'Hooks must be called in the same order on every render',
                'Custom hooks must start with "use" prefix'
            ],
            items: [
                {
                    to: 'usestate',
                    title: 'useState',
                    description: 'Manage state in function components'
                },
                {
                    to: 'useeffect',
                    title: 'useEffect',
                    description: 'Handle side effects in your app'
                },
                {
                    to: 'usecallback',
                    title: 'useCallback',
                    description: 'Memoize functions to prevent unnecessary re-renders'
                },
                {
                    to: 'usememo',
                    title: 'useMemo',
                    description: 'Memoize expensive calculations to optimize performance'
                },
                {
                    to: 'usecontext',
                    title: 'useContext',
                    description: 'Share data without prop drilling'
                },
                {
                    to: 'usereducer',
                    title: 'useReducer',
                    description: 'Manage complex state with reducers'
                },
            ]
        },
        {
            title: 'Custom Hooks',
            description: 'Custom Hooks are JavaScript functions that start with "use" and may call other Hooks. They let you extract component logic into reusable functions.',
            keyPoints: [
                'Custom hooks can use other hooks',
                'Each call to a custom hook gets isolated state',
                'Custom hooks can accept arguments',
                'They help reduce code duplication'
            ],
            items: [
                {
                    to: 'custom-hooks',
                    title: 'Custom Hooks',
                    description: 'Create reusable custom hooks'
                }
            ]
        },
        {
            title: 'Higher-Order Components',
            description: 'A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. HOCs are functions that take a component and return a new component.',
            keyPoints: [
                'HOCs don\'t modify the input component',
                'HOCs should be pure functions',
                'Don\'t use HOCs inside the render method',
                'Pass unrelated props through to the wrapped component'
            ],
            items: [
                {
                    to: 'hoc',
                    title: 'HOC',
                    description: 'Learn about Higher-Order Components'
                }
            ]
        }
    ];

    const sidebarSections = navigationGroups.map(group => ({
        id: group.title.toLowerCase().replace(/\s+/g, '-'),
        title: group.title
    }));

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            {navigationGroups.map((group, groupIndex) => (
                                <SectionContent
                                    key={groupIndex}
                                    id={group.title.toLowerCase().replace(/\s+/g, '-')}
                                    title={group.title}
                                    description={group.description}
                                    keyPoints={group.keyPoints}
                                    items={group.items}
                                />
                            ))}
                        </div>
                    </main>

                    {/* Right Sidebar Navigation */}
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default Home;
