import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            {/* Header */}
            <header className="bg-blue-600 text-white p-6 text-center">
                <h1 className="text-4xl font-bold">Learn React Function Components</h1>
                <p className="mt-2 text-lg">Simple examples to master React</p>
            </header>
            <nav className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                <a
                    href="/usestate"
                    className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-50"
                >
                    <h2 className="text-xl font-semibold text-blue-600">useState</h2>
                    <p className="text-gray-600 mt-2">Manage state in function components</p>
                </a>
                <a
                    href="/useeffect"
                    className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-50"
                >
                    <h2 className="text-xl font-semibold text-blue-600">useEffect</h2>
                    <p className="text-gray-600 mt-2">Handle side effects in your app</p>
                </a>
                <a
                    href="/usecontext"
                    className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-50"
                >
                    <h2 className="text-xl font-semibold text-blue-600">useContext</h2>
                    <p className="text-gray-600 mt-2">Share data without prop drilling</p>
                </a>
                {/* Thêm các thẻ <a> khác cho các topic như custom hooks, props, v.v. */}
            </nav>
            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center p-4 mt-12">
                <p>© 2025 React Function Examples</p>
            </footer>
        </>
    );
};

export default Home;
