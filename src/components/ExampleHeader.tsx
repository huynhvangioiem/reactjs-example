import { Link } from "react-router-dom";
import React from 'react';

interface ExampleHeaderProps {
    title: string;
    description: string;
}

const ExampleHeader: React.FC<ExampleHeaderProps> = ({ title, description }) => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                        <p className="text-gray-600">{description}</p>
                    </div>
                    <Link to="/" className="text-blue-600 hover:text-blue-800 underline mt-4">
                        Back to Home
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default ExampleHeader;