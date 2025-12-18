import React, { Suspense, useState } from 'react';
import { Button } from '@/components/ui/button';

const LazyUserSettings = React.lazy(() => import('./LazyUserSettings'));

const codeExample = `import React, { Suspense, useState } from 'react';

const SettingsPanel = React.lazy(() => import('./SettingsPanel'));

export const LazySettingsDemo = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(true)}>
                Load settings
            </button>
            {open ? (
                <Suspense fallback={<p>Loading settings...</p>}>
                    <SettingsPanel />
                </Suspense>
            ) : (
                <p>Settings are loaded only when requested.</p>
            )}
        </div>
    );
};`;

const LazyLoadingExample: React.FC = () => {
    const [showSettings, setShowSettings] = useState(false);

    return (
        <section id="lazy-loading" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feature-Level Lazy Loading</h2>
            <p className="text-gray-600 mb-4">
                Use <code className="bg-gray-100 px-1 py-0.5 rounded">React.lazy</code> together with <code className="bg-gray-100 px-1 py-0.5 rounded">Suspense</code> to defer code for secondary UI. This keeps the entry bundle lean and only loads extra code when users need it.
            </p>

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Code Walkthrough</h3>
                    <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{codeExample}</code>
                    </pre>
                </div>

                <div className="mt-6 p-6 bg-white border rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                    <p className="text-gray-600 mb-4">
                        Click the button to request the settings module. While the code chunk downloads, the Suspense fallback renders a loading state.
                    </p>
                    <div className="space-y-4">
                        <Button onClick={() => setShowSettings(true)}>
                            Load settings panel
                        </Button>

                        {showSettings ? (
                            <Suspense
                                fallback={
                                    <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-gray-600">
                                        Loading settings module...
                                    </div>
                                }
                            >
                                <LazyUserSettings />
                            </Suspense>
                        ) : (
                            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-600">
                                Settings stay unloaded until you request them.
                            </div>
                        )}

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="text-md font-medium text-blue-900 mb-2">What to notice</h4>
                            <ul className="list-disc list-inside space-y-2 text-blue-800">
                                <li>The button toggles rendering, which triggers the lazy import on demand</li>
                                <li>Suspense shows the fallback UI while the component chunk loads</li>
                                <li>Once loaded, the component stays cached for future renders</li>
                                <li>Try adding network throttling in DevTools to see the fallback longer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LazyLoadingExample;
