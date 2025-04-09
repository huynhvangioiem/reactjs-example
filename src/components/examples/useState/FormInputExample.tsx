import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const codeExample =
    `import { useState } from 'react';

const FormExample = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
        username: '',
        email: '',
        message: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};`;

const FormInputExample: React.FC = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            username: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="form-input" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Form Input Example</h2>
            <p className="mb-4">
                This example demonstrates how to handle form inputs using useState. It shows how to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Manage multiple form fields with a single state object</li>
                <li>Handle input changes using a single onChange handler</li>
                <li>Update state using the spread operator to maintain immutability</li>
                <li>Reset form state after submission</li>
            </ul>

            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            {/* Live Demo */}
            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </section>
    );
};

export default FormInputExample;
