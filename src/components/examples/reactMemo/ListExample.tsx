import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const codeExample = `import React, { useState } from 'react';

// Regular component that re-renders every time
const RegularComponent = () => {
    console.log('RegularComponent rendered');
    return <div>Regular Component</div>;
};

// Memoized component that only re-renders when props change
const MemoizedComponent = React.memo<{ color: string }>(({ color }) => {
    console.log('MemoizedComponent rendered with color:', color);
    return <div style={{ color }}>Memoized Component</div>;
});

const Example = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('blue');

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>
                Increment Counter
            </button>
            <button onClick={() => setColor(c => c === 'blue' ? 'red' : 'blue')}>
                Toggle Color
            </button>
            <p>Count: {count}</p>
            <RegularComponent />
            <MemoizedComponent color={color} />
        </div>
    );
};`;

// Regular component that re-renders every time
const RegularComponent = () => {
    console.log('RegularComponent rendered');
    return <div className="p-4 bg-gray-100 rounded mb-2">Regular Component</div>;
};

// Memoized component that only re-renders when props change
const MemoizedComponent = React.memo<{ color: string }>(({ color }) => {
    console.log('MemoizedComponent rendered with color:', color);
    return <div className={`p-4 bg-blue-100 rounded mb-2 text-${color}-600`}>Memoized Component</div>;
});

const ListExample: React.FC = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('blue');

    return (
        <section id="memo-example" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">React.memo Example</h2>
            <p className="mb-4">
                This example demonstrates how React.memo prevents unnecessary re-renders. It shows:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Regular components re-render on every parent update</li>
                <li>Memoized components only re-render when their props change</li>
                <li>How to use React.memo for performance optimization</li>
            </ul>

            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            {/* Live Demo */}
            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-700">Count: {count}</span>
                        <Button onClick={() => setCount(c => c + 1)}>
                            Increment Counter
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => setColor(c => c === 'blue' ? 'red' : 'blue')}
                        >
                            Toggle Color
                        </Button>
                    </div>

                    <RegularComponent />
                    <MemoizedComponent color={color} />

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-yellow-900 mb-2">How it works</h3>
                        <ul className="list-disc list-inside space-y-2 text-yellow-800">
                            <li>Click "Increment Counter" to trigger a re-render</li>
                            <li>Regular component will re-render every time</li>
                            <li>Memoized component will not re-render on counter changes</li>
                            <li>Click "Toggle Color" to change props</li>
                            <li>Memoized component will re-render only when color changes</li>
                            <li>Check the console to see the difference in re-renders</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListExample;
