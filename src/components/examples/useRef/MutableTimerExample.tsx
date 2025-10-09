import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const codeExample = `import { useEffect, useRef, useState } from 'react';

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const start = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }
    };

    const stop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const reset = () => {
        stop();
        setSeconds(0);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, []);

    return (
        <div>
            <p>Elapsed: {seconds}s</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};`;

const MutableTimerExample: React.FC = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const start = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }
    };

    const stop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const reset = () => {
        stop();
        setSeconds(0);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, []);

    return (
        <section id="mutable-timer" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Storing Mutable Values</h2>
            <p className="mb-4">
                Refs can hold mutable values that persist across renders. This example uses <code>useRef</code> to keep track of an interval ID without causing re-renders each time the timer ticks.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Store interval IDs or other mutable values</li>
                <li>Ensure only one interval runs at a time</li>
                <li>Clean up side effects on component unmount</li>
            </ul>

            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            <div className="mt-6 p-6 bg-white border rounded-lg space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Live Demo</h3>
                <p className="text-gray-700 text-lg">Elapsed time: {seconds} seconds</p>
                <div className="flex flex-wrap gap-3">
                    <Button onClick={start}>Start</Button>
                    <Button variant="destructive" onClick={stop}>
                        Stop
                    </Button>
                    <Button variant="outline" onClick={reset}>
                        Reset
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default MutableTimerExample;
