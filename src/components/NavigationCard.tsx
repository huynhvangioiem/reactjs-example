import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationCardProps {
    to: string;
    title: string;
    description: string;
}

const NavigationCard: React.FC<NavigationCardProps> = ({ to, title, description }) => {
    return (
        <Link
            to={to}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center hover:bg-blue-50"
        >
            <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
        </Link>
    );
};

export default NavigationCard;
