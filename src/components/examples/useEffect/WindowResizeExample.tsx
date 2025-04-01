import React, { useState, useEffect } from 'react';

const WindowResizeExample: React.FC = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty array means this effect runs once on mount

    const codeExample = `import React, { useState, useEffect } from 'react';

const WindowResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty array means this effect runs once on mount

    return (
        <div>
            <p>Window width: {windowSize.width}px</p>
            <p>Window height: {windowSize.height}px</p>
        </div>
    );
};`;

    return (
        <section id="window-resize" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Window Resize Example</h2>
            <p className="mb-4">
                This example demonstrates how to use useEffect with event listeners. It shows how to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Add event listeners using useEffect</li>
                <li>Clean up event listeners when component unmounts</li>
                <li>Track window dimensions in real-time</li>
                <li>Handle browser DOM events</li>
            </ul>

            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <div className="space-y-2">
                    <div className="flex items-center space-x-4 text-lg">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <span className="font-medium">Width: </span>
                            <span className="text-blue-600">{windowSize.width}px</span>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <span className="font-medium">Height: </span>
                            <span className="text-green-600">{windowSize.height}px</span>
                        </div>
                    </div>
                    <p className="text-gray-600 italic mt-4">
                        Try resizing your browser window to see the values update in real-time!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WindowResizeExample; 