import React, { createContext, useContext, useState } from 'react';

const codeExample = `import React, { createContext, useContext, useState } from 'react';

// Create a theme context
const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

// Theme provider component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Component using the theme
const ThemedComponent: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={\`p-4 \${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}\`}>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};`;

// Create a theme context
const ThemeContext = createContext<{
    theme: string;
    toggleTheme: () => void;
}>({
    theme: 'light',
    toggleTheme: () => { },
});

// Theme provider component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Component using the theme
const ThemedComponent: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <p>Current theme: {theme}</p>
            <button
                onClick={toggleTheme}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Toggle Theme
            </button>
        </div>
    );
};

const ThemeExample: React.FC = () => {
    return (
        <section id="theme-example" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Theme Context Example</h2>
            <p className="mb-4">
                This example demonstrates how useContext can be used to manage a theme across multiple components without prop drilling.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>The theme state is managed in a context provider</li>
                <li>Components can access and modify the theme without receiving props</li>
                <li>The theme change affects all components using the context</li>
            </ul>

            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            {/* Live Demo */}
            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <ThemeProvider>
                    <ThemedComponent />
                </ThemeProvider>
            </div>
        </section>
    );
};

export default ThemeExample;
