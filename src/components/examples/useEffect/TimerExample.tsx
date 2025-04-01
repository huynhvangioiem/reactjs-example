import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const TimerExample: React.FC = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        // Cleanup function
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning(prev => !prev);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    const codeExample = `import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        // Cleanup function
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRunning]);

    return (
        <div>
            <p>Timer: {seconds} seconds</p>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={() => {
                setIsRunning(false);
                setSeconds(0);
            }}>Reset</button>
        </div>
    );
};`;

    return (
        <section id="timer" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Timer Example</h2>
            <p className="mb-4">
                This example demonstrates how to use useEffect with cleanup functions. It shows how to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Set up an interval using useEffect</li>
                <li>Clean up resources when the component unmounts</li>
                <li>Control side effects with dependencies</li>
                <li>Handle state updates in intervals</li>
            </ul>

            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Timer: {seconds} seconds</span>
                    <Button onClick={toggleTimer}>
                        {isRunning ? 'Stop' : 'Start'}
                    </Button>
                    <Button variant="outline" onClick={resetTimer}>
                        Reset
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TimerExample; 