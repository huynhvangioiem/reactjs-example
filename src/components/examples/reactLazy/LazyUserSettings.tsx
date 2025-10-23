import React from 'react';

const LazyUserSettings: React.FC = () => {
    return (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Notification Preferences</h3>
            <p className="text-blue-800 mb-4">
                This component was loaded lazily. Try toggling different sections of your UI to keep the initial bundle small.
            </p>
            <ul className="space-y-2 text-blue-900">
                <li>• Weekly summary emails</li>
                <li>• Product updates</li>
                <li>• Live webinar invites</li>
            </ul>
        </div>
    );
};

export default LazyUserSettings;
