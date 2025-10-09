import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const codeExample = `type ProfileCardProps = {
    name: string;
    role: string;
    avatarUrl?: string;
    children?: React.ReactNode;
};

const ProfileCard = ({ name, role, avatarUrl, children }: ProfileCardProps) => {
    return (
        <article className="profile-card">
            {avatarUrl ? (
                <img src={avatarUrl} alt={name} className="avatar" />
            ) : (
                <span className="avatar placeholder">{name.at(0)}</span>
            )}
            <div>
                <h4>{name}</h4>
                <p>{role}</p>
                {children}
            </div>
        </article>
    );
};`;

type Person = {
    id: number;
    name: string;
    role: string;
    bio: string;
};

const people: Person[] = [
    {
        id: 1,
        name: 'Mia Tran',
        role: 'Frontend Engineer',
        bio: 'Loves building composable UI systems.',
    },
    {
        id: 2,
        name: 'Long Nguyen',
        role: 'Product Designer',
        bio: 'Explores inclusive interaction patterns.',
    },
    {
        id: 3,
        name: 'Bao Pham',
        role: 'Tech Lead',
        bio: 'Focuses on developer experience and tooling.',
    },
];

const ProfileCardExample: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number>(people[0].id);
    const selectedPerson = people.find((person) => person.id === selectedId) ?? people[0];

    return (
        <section id="card-example" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Profile Card Example</h2>
            <p className="text-gray-600 mb-4">
                This component takes props for display data and renders children for optional extra content. The parent component swaps props to show a different person.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto mb-6">
                <code className="text-sm">{codeExample}</code>
            </pre>
            <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
                <div className="bg-white border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Choose a profile</h3>
                    <div className="space-y-2">
                        {people.map((person) => (
                            <Button
                                key={person.id}
                                variant={selectedId === person.id ? 'default' : 'outline'}
                                className="w-full justify-start"
                                onClick={() => setSelectedId(person.id)}
                            >
                                <span className="font-medium">{person.name}</span>
                                <span className="ml-auto text-sm text-gray-500">{person.role}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-semibold">
                        {selectedPerson.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-blue-900">{selectedPerson.name}</h3>
                        <p className="text-blue-800">{selectedPerson.role}</p>
                        <p className="text-blue-700 mt-2">{selectedPerson.bio}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileCardExample;
