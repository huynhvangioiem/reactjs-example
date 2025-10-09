import React, { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';

const helloWorldCode = `import { useState, type FormEvent } from 'react';

type GreetingProps = {
    name: string;
};

const Greeting = ({ name }: GreetingProps) => {
    return <h1>Hello, {name}!</h1>;
};

export const HelloWorldDemo = () => {
    const [name, setName] = useState('React Learner');
    const [input, setInput] = useState('React Learner');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setName(input.trim() || 'React Learner');
    };

    return (
        <div>
            <Greeting name={name} />

            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Enter a name"
                />
                <button type="submit">Update Greeting</button>
            </form>
        </div>
    );
};`;

const HelloWorldExample: React.FC = () => {
    const [name, setName] = useState('React Learner');
    const [input, setInput] = useState('React Learner');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setName(input.trim() || 'React Learner');
    };

    return (
        <section id="hello-world" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hello World with Props</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    Props let you pass data into components so they can stay reusable. In this example, the <code>Greeting</code> component renders a message based on the <code>name</code> prop.
                </p>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">TypeScript Example</h3>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{helloWorldCode}</code>
                    </pre>
                </div>
                <div className="bg-white border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                    <p className="text-gray-600 mb-4">
                        Update the <code>name</code> prop to see the greeting change instantly.
                    </p>
                    <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-4">
                        <p className="text-blue-900 font-semibold">Rendered output: Hello, {name}!</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Enter a name"
                            className="flex-1 rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button type="submit">Update Greeting</Button>
                    </form>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Try It Yourself</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Change the <code>name</code> prop to render a different message</li>
                        <li>Pass the prop from a parent component to reuse the greeting everywhere</li>
                        <li>Add more props, such as <code>salutation</code>, to make the component richer</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HelloWorldExample;
