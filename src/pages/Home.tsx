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
                {
                    to: 'custom-hooks',
                    title: 'Custom Hooks',
                    description: 'Create reusable custom hooks'
                }
            ]
        },
        {
            title: 'Built-in React APIs',
            description: 'React provides several built-in APIs that can be used to optimize performance and simplify code.',
            keyPoints: [
                'React.memo: Prevent unnecessary re-renders of functional components',
                'React.lazy: Code-split your application for better performance',
                'React.Suspense: Handle loading states for lazy-loaded components'
            ],
            items: [
                {
                    to: 'react-memo',
                    title: 'React.memo',
                    description: 'Optimize functional components by preventing unnecessary re-renders'
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
