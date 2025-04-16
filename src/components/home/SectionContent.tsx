import React from 'react';
import NavigationCard from '../NavigationCard';
import KeyPoints from './KeyPoints';

interface SectionItem {
    to: string;
    title: string;
    description: string;
}

interface SectionContentProps {
    id: string;
    title: string;
    description: string;
    keyPoints: string[];
    items: SectionItem[];
}

const SectionContent: React.FC<SectionContentProps> = ({ id, title, description, keyPoints, items }) => {
    return (
        <section id={id} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <KeyPoints points={keyPoints} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <NavigationCard
                        key={index}
                        to={item.to}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionContent;
