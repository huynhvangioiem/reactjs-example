import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "./ErrorBoundary";

const codeExample = `// Custom fallback components
const MinimalFallback = () => (
  <div className="text-center p-4 bg-red-50 border border-red-200 rounded">
    <p className="text-red-800">Oops! Something went wrong.</p>
  </div>
);

const DetailedFallback = ({ error, resetError }) => (
  <div className="max-w-md mx-auto bg-white border border-red-300 rounded-lg shadow-lg p-6">
    <div className="flex items-center mb-4">
      <AlertTriangleIcon className="w-8 h-8 text-red-500 mr-3" />
      <h3 className="text-lg font-semibold text-gray-900">
        Something went wrong
      </h3>
    </div>
    <p className="text-gray-600 mb-4">
      We encountered an unexpected error. Please try refreshing the page
      or contact support if the problem persists.
    </p>
    <div className="flex gap-3">
      <button
        onClick={resetError}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try Again
      </button>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

// Usage with different fallback UIs
const App = () => (
  <div>
    <ErrorBoundary fallback={<MinimalFallback />}>
      <SomeComponent />
    </ErrorBoundary>

    <ErrorBoundary
      fallback={({ error, resetError }) => (
        <DetailedFallback error={error} resetError={resetError} />
      )}
    >
      <AnotherComponent />
    </ErrorBoundary>
  </div>
);`;

// Different fallback UI components
const MinimalFallback: React.FC = () => (
    <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">Oops! Something went wrong.</p>
    </div>
);

const DetailedFallback: React.FC<{ onReset: () => void }> = ({ onReset }) => (
    <div className="max-w-md mx-auto bg-white border border-red-300 rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
            <svg
                className="w-8 h-8 text-red-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">
                Something went wrong
            </h3>
        </div>
        <p className="text-gray-600 mb-4">
            We encountered an unexpected error. Please try refreshing the page
            or contact support if the problem persists.
        </p>
        <div className="flex gap-3">
            <Button onClick={onReset} className="bg-blue-600 hover:bg-blue-700">
                Try Again
            </Button>
            <Button
                onClick={() => window.location.reload()}
                variant="outline"
                className="bg-gray-300 text-gray-700 hover:bg-gray-400"
            >
                Refresh Page
            </Button>
        </div>
    </div>
);

const InteractiveFallback: React.FC<{ onReset: () => void }> = ({
    onReset,
}) => (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
        <div className="text-center">
            <div className="mb-4">
                <svg
                    className="w-16 h-16 mx-auto text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-2">
                Whoops! 🐛
            </h3>
            <p className="text-purple-700 mb-4">
                Looks like we hit a snag. Don't worry, these things happen!
            </p>
            <div className="space-y-2">
                <Button
                    onClick={onReset}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                >
                    🔄 Give it another shot
                </Button>
                <p className="text-sm text-purple-600">
                    If this keeps happening, maybe it's time for a coffee break?
                    ☕
                </p>
            </div>
        </div>
    </div>
);

// Component that throws errors
const ProblematicComponent: React.FC<{ errorType: string }> = ({
    errorType,
}) => {
    switch (errorType) {
        case "render":
            throw new Error(
                "Render error: Component failed to render properly"
            );
        case "network":
            throw new Error("Network error: Failed to fetch data from server");
        case "validation":
            throw new Error("Validation error: Invalid data format received");
        default:
            return (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                        <svg
                            className="w-5 h-5 text-green-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span className="text-green-800 font-medium">
                            Component is working perfectly!
                        </span>
                    </div>
                </div>
            );
    }
};

const FallbackUIExample: React.FC = () => {
    const [selectedFallback, setSelectedFallback] = useState<
        "minimal" | "detailed" | "interactive"
    >("minimal");
    const [errorType, setErrorType] = useState<string>("none");
    const [resetKey, setResetKey] = useState(0);

    const handleReset = () => {
        setErrorType("none");
        setResetKey((prev) => prev + 1);
    };

    const getFallbackComponent = () => {
        switch (selectedFallback) {
            case "minimal":
                return <MinimalFallback />;
            case "detailed":
                return <DetailedFallback onReset={handleReset} />;
            case "interactive":
                return <InteractiveFallback onReset={handleReset} />;
            default:
                return <MinimalFallback />;
        }
    };

    return (
        <section id="fallback-ui" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
                Custom Fallback UI Example
            </h2>

            <p className="text-gray-700 mb-6">
                Error boundaries can display different types of fallback UI
                depending on your application's needs. This example shows
                various approaches from minimal error messages to detailed
                recovery interfaces.
            </p>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Code Implementation
                    </h3>
                    <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{codeExample}</code>
                    </pre>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Interactive Demo
                    </h3>

                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Fallback UI Style:
                                </label>
                                <select
                                    value={selectedFallback}
                                    onChange={(e) =>
                                        setSelectedFallback(
                                            e.target.value as any
                                        )
                                    }
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                >
                                    <option value="minimal">Minimal</option>
                                    <option value="detailed">Detailed</option>
                                    <option value="interactive">
                                        Interactive
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Trigger Error:
                                </label>
                                <select
                                    value={errorType}
                                    onChange={(e) =>
                                        setErrorType(e.target.value)
                                    }
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                >
                                    <option value="none">No Error</option>
                                    <option value="render">Render Error</option>
                                    <option value="network">
                                        Network Error
                                    </option>
                                    <option value="validation">
                                        Validation Error
                                    </option>
                                </select>
                            </div>
                        </div>

                        <Button
                            onClick={handleReset}
                            variant="outline"
                            className="w-full"
                        >
                            Reset Demo
                        </Button>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-3">
                                Component with {selectedFallback} fallback UI:
                            </h4>
                            <ErrorBoundary
                                key={`${resetKey}-${selectedFallback}`}
                                fallback={getFallbackComponent()}
                            >
                                <ProblematicComponent errorType={errorType} />
                            </ErrorBoundary>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-medium text-blue-900 mb-2">
                                Fallback UI Comparison:
                            </h4>
                            <div className="text-blue-800 text-sm space-y-2">
                                <div>
                                    <strong>Minimal:</strong> Simple error
                                    message, takes minimal space
                                </div>
                                <div>
                                    <strong>Detailed:</strong> More context,
                                    recovery options, professional appearance
                                </div>
                                <div>
                                    <strong>Interactive:</strong> Engaging
                                    design, friendly tone, brand personality
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">
                        Design Considerations
                    </h4>
                    <ul className="text-green-800 text-sm space-y-1">
                        <li>
                            • <strong>Context Matters:</strong> Critical
                            features need detailed fallbacks, secondary features
                            can use minimal ones
                        </li>
                        <li>
                            • <strong>Brand Consistency:</strong> Error UI
                            should match your application's design language
                        </li>
                        <li>
                            • <strong>Recovery Actions:</strong> Always provide
                            ways for users to recover or retry
                        </li>
                        <li>
                            • <strong>Information Balance:</strong> Show enough
                            info to be helpful without overwhelming users
                        </li>
                        <li>
                            • <strong>Accessibility:</strong> Ensure error
                            messages are accessible to screen readers
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FallbackUIExample;
