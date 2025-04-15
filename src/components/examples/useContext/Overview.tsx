import React from 'react';

const basicSyntax = `// Create a context
const MyContext = React.createContext(defaultValue);

// Provide the context
<MyContext.Provider value={value}>
    {/* children */}
</MyContext.Provider>

// Consume the context
const value = useContext(MyContext);`;

const themeExample = `// Create a theme context
const ThemeContext = React.createContext('light');

// Provide the theme
<ThemeContext.Provider value="dark">
    <App />
</ThemeContext.Provider>

// Use the theme
const theme = useContext(ThemeContext);`;

const userExample = `// Create a user context
const UserContext = React.createContext(null);

// Provide user data
<UserContext.Provider value={{ name: 'John', age: 30 }}>
    <Profile />
</UserContext.Provider>

// Use user data
const user = useContext(UserContext);`;

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    The <code className="bg-gray-100 px-1 py-0.5 rounded">useContext</code> hook is used to consume values from a React context. It allows you to access context values without having to pass props through every level of the component tree.
                </p>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Syntax</h3>
                    <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{basicSyntax}</code>
                    </pre>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Key Points</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Provides a way to share data between components without prop drilling</li>
                        <li>Context values can be updated and all consuming components will re-render</li>
                        <li>Can be used for global state management in smaller applications</li>
                        <li>Works well with other hooks like useState and useReducer</li>
                    </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Common Usage Examples</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Theme Context</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{themeExample}</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">User Context</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{userExample}</code>
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-yellow-900 mb-2">⚠️ Important Considerations</h3>
                    <ul className="list-disc list-inside space-y-2 text-yellow-800">
                        <li>Context should be used for data that needs to be accessed by many components at different nesting levels</li>
                        <li>Don't use context for data that only needs to be passed down a few levels - props are better for that</li>
                        <li>Be mindful of performance - context changes will cause all consuming components to re-render</li>
                        <li>Consider splitting contexts to prevent unnecessary re-renders</li>
                        <li>For complex state management, consider using a state management library like Redux or Zustand</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Overview;
