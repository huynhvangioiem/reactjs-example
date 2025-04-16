import React, { useState, useEffect } from 'react';

const codeExample = `import React, { useState, useEffect } from 'react';

// Custom hook for debouncing values
const useDebounce = <T,>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

// Usage example
const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    return (
        <div className="space-y-4">
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Type to search..."
                    className="max-w-md border rounded px-3 py-2"
                />
                <p className="mt-2 text-gray-600">
                    Try typing quickly - the debounced value updates only after you stop typing for 500ms.
                </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Current value: <span className="text-blue-600">{searchTerm}</span></p>
                <p className="font-medium">Debounced value: <span className="text-green-600">{debouncedSearchTerm}</span></p>
            </div>
        </div>
    );
};`;

// Custom hook for debouncing values
const useDebounce = <T,>(value: T, delay: number): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

const UseDebounceExample: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    return (
        <section id="debounce" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">useDebounce Custom Hook Example</h2>
            <p className="mb-4">
                This example demonstrates how to create and use a custom hook for debouncing values. Debouncing is useful for:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Reducing the number of API calls in search functionality</li>
                <li>Optimizing performance by limiting the frequency of expensive operations</li>
                <li>Preventing unnecessary re-renders and computations</li>
                <li>Improving user experience by reducing lag</li>
            </ul>

            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            {/* Live Demo */}
            <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <div className="space-y-4">
                    <div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Type to search..."
                            className="max-w-md border rounded px-3 py-2"
                        />
                        <p className="mt-2 text-gray-600">
                            Try typing quickly - the debounced value updates only after you stop typing for 500ms.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium">Current value: <span className="text-blue-600">{searchTerm}</span></p>
                        <p className="font-medium">Debounced value: <span className="text-green-600">{debouncedSearchTerm}</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseDebounceExample;
