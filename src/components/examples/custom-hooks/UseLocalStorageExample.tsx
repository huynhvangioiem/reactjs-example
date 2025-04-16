import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const codeExample = `import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Custom hook to handle localStorage
const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T) => void] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        try {
            const valueToStore = typeof value === 'function' ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    };

    return [storedValue, setValue];
};

// Usage example
const ExampleComponent = () => {
    const [name, setName] = useLocalStorage<string>('name', '');
    const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

    return (
        <div className="space-y-6">
            <div>
                <h4 className="text-md font-semibold mb-2">Name Storage</h4>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded px-3 py-2"
                        placeholder="Enter your name"
                    />
                    <Button
                        variant="destructive"
                        onClick={() => setName('')}
                    >
                        Clear
                    </Button>
                </div>
            </div>

            <div>
                <h4 className="text-md font-semibold mb-2">Theme Toggle</h4>
                <div className="flex space-x-4">
                    <Button
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className={theme === 'light' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}
                    >
                        Toggle Theme
                    </Button>
                </div>
            </div>
        </div>
    );
};`;

// Custom hook to handle localStorage
const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T) => void] => {
    // Get from localStorage or use initial value
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that persists the new value to localStorage
    const setValue = (value: T) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = typeof value === 'function' ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    };

    return [storedValue, setValue];
};

const UseLocalStorageExample: React.FC = () => {
    const [name, setName] = useLocalStorage<string>('name', '');
    const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

    return (
        <section id="local-storage" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">useLocalStorage Custom Hook Example</h2>
            <p className="mb-4">
                This example demonstrates how to create and use a custom hook for managing localStorage. It shows how to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Create a type-safe custom hook for localStorage</li>
                <li>Handle JSON serialization/deserialization</li>
                <li>Implement error handling for localStorage operations</li>
                <li>Use the hook to persist state between page refreshes</li>
            </ul>

            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            {/* Live Demo */}
            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="text-md font-semibold mb-2">Name Storage</h4>
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border rounded px-3 py-2"
                                placeholder="Enter your name"
                            />
                            <Button
                                variant="destructive"
                                onClick={() => setName('')}
                            >
                                Clear
                            </Button>
                        </div>
                        <p className="mt-2 text-gray-600">
                            Your name is stored in localStorage and will persist between page refreshes.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-md font-semibold mb-2">Theme Toggle</h4>
                        <div className="flex space-x-4">
                            <Button
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                className={theme === 'light' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}
                            >
                                Toggle Theme
                            </Button>
                        </div>
                        <p className="mt-2 text-gray-600">
                            The theme preference is stored in localStorage and will persist between page refreshes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseLocalStorageExample;
