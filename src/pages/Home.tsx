import React from 'react';
import NavigationCard from '../components/NavigationCard';

const Home: React.FC = () => {
    const navigationItems = [
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
    ];

    return (
        <main>
            <nav className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {navigationItems.map((item, index) => (
                    <NavigationCard
                        key={index}
                        to={item.to}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </nav>
        </main>
    );
};

export default Home;
