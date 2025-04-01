import React from 'react';

const Overview: React.FC = () => {
    const basicSyntax = `const [state, setState] = useState(initialValue);`;

    const primitiveExamples = `const [count, setCount] = useState(0);        // number
const [name, setName] = useState('');         // string
const [isActive, setIsActive] = useState(false); // boolean
`;

    const objectArrayExamples = `const [user, setUser] = useState({            // object
    name: '',
    age: 0
});
const [items, setItems] = useState([]);       // array`;

    const functionExample = `const [count, setCount] = useState(() => {    // lazy initialization
    return 0;
});`;

    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <div className="space-y-4">
                <p className="text-gray-600">
                    The <code className="bg-gray-100 px-1 py-0.5 rounded">useState</code> hook is one of the most fundamental hooks in React. It allows you to add state to functional components.
                </p>
                <div className="bg-gray-50 border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Syntax</h3>
                    <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{basicSyntax}</code>
                    </pre>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-blue-900 mb-2">Key Points</h3>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Returns an array with two elements: the current state value and a function to update it</li>
                        <li>State updates are asynchronous</li>
                        <li>State updates trigger re-renders</li>
                        <li>Can be used with any type of value (numbers, strings, objects, arrays)</li>
                    </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-green-900 mb-2">Initial Value Examples</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Primitive Values</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{primitiveExamples}</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Objects and Arrays</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{objectArrayExamples}</code>
                            </pre>
                        </div>
                        <div>
                            <h4 className="font-medium text-green-800 mb-2">Function as Initial Value</h4>
                            <pre className="bg-white border rounded-lg p-3 overflow-x-auto">
                                <code className="text-sm">{functionExample}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;