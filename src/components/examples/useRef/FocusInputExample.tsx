import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const codeExample = `import { useRef, useState } from 'react';

const FocusInput = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    const handleClear = () => {
        setValue("");
        inputRef.current?.focus();
    };

    return (
        <div>
            <input
                ref={inputRef}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Enter your name"
            />
            <button onClick={handleFocus}>Focus Input</button>
            <Button variant="outline" onClick={handleClear}>
                Clear &amp; Focus
            </Button>
        </div>
    );
};`;

const FocusInputExample: React.FC = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    const handleClear = () => {
        setValue("");
        inputRef.current?.focus();
    };

    return (
        <section id="focus-input" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Focus Input Example</h2>
            <p className="mb-4">
                This example demonstrates how to use <code>useRef</code> to
                imperatively interact with a DOM element. The ref lets you focus
                the input field without triggering a re-render.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Store a reference to an input element</li>
                <li>
                    Call DOM methods like <code>focus()</code> directly on the
                    element
                </li>
                <li>Keep the reference stable between renders</li>
            </ul>

            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Live Demo
                </h3>
                <div className="space-y-4">
                    <input
                        ref={inputRef}
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        placeholder="Enter your name"
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex flex-wrap gap-3">
                        <Button onClick={handleFocus}>Focus Input</Button>
                        <Button variant="outline" onClick={handleClear}>
                            Clear &amp; Focus
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FocusInputExample;
