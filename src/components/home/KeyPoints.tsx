import React from 'react';

interface KeyPointsProps {
    points: string[];
}

const KeyPoints: React.FC<KeyPointsProps> = ({ points }) => {
    return (
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Key Points:</h3>
            <ul className="space-y-2">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default KeyPoints;
