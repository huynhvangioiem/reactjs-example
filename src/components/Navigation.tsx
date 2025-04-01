import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex gap-4">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/example" className="hover:text-gray-300">Example</Link>
            </div>
        </nav>
    );
};

export default Navigation;
