import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "./ErrorBoundary";

const codeExample = `import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

// Component that might throw an error
const BuggyComponent = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('I crashed!');
  }
  return <div>Everything is working fine!</div>;
};

// Usage
const App = () => {
  const [throwError, setThrowError] = useState(false);

  return (
    <ErrorBoundary>
      <BuggyComponent shouldThrow={throwError} />
      <button onClick={() => setThrowError(true)}>
        Break the component
      </button>
    </ErrorBoundary>
  );
};`;

// Component that might throw an error
const BuggyComponent: React.FC<{ shouldThrow: boolean }> = ({
    shouldThrow,
}) => {
    if (shouldThrow) {
        throw new Error(
            "I crashed! This is a simulated error for demonstration purposes."
        );
    }
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
                    Everything is working fine!
                </span>
            </div>
            <p className="text-green-700 mt-2 text-sm">
                This component is rendering successfully without any errors.
            </p>
        </div>
    );
};

const BasicErrorBoundaryExample: React.FC = () => {
    const [throwError, setThrowError] = useState(false);
    const [resetKey, setResetKey] = useState(0);

    const handleBreakComponent = () => {
        setThrowError(true);
    };

    const handleReset = () => {
        setThrowError(false);
        setResetKey((prev) => prev + 1);
    };

    return (
        <section id="basic-error-boundary" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
                Basic Error Boundary Example
            </h2>

            <p className="text-gray-700 mb-6">
                This example demonstrates a basic error boundary that catches
                errors in child components and displays a fallback UI. The error
                boundary prevents the entire application from crashing when a
                component throws an error.
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
                        <div className="flex gap-3">
                            <Button
                                onClick={handleBreakComponent}
                                variant="destructive"
                                disabled={throwError}
                            >
                                {throwError
                                    ? "Component Broken"
                                    : "Break Component"}
                            </Button>
                            <Button onClick={handleReset} variant="outline">
                                Reset Demo
                            </Button>
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-3">
                                Component with Error Boundary:
                            </h4>
                            <ErrorBoundary key={resetKey}>
                                <BuggyComponent shouldThrow={throwError} />
                            </ErrorBoundary>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-medium text-blue-900 mb-2">
                                What to observe:
                            </h4>
                            <ul className="text-blue-800 text-sm space-y-1">
                                <li>
                                    • Click "Break Component" to simulate an
                                    error
                                </li>
                                <li>
                                    • The error boundary catches the error and
                                    shows fallback UI
                                </li>
                                <li>
                                    • The rest of the page continues to work
                                    normally
                                </li>
                                <li>
                                    • Click "Try Again" in the error UI or
                                    "Reset Demo" to recover
                                </li>
                                <li>
                                    • Check the browser console for error logs
                                    (in development)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-2">
                        Key Benefits
                    </h4>
                    <ul className="text-yellow-800 text-sm space-y-1">
                        <li>
                            • <strong>Graceful Degradation:</strong> Shows
                            user-friendly error messages instead of blank
                            screens
                        </li>
                        <li>
                            • <strong>Error Isolation:</strong> Prevents errors
                            from cascading and breaking the entire app
                        </li>
                        <li>
                            • <strong>Better UX:</strong> Users can continue
                            using other parts of the application
                        </li>
                        <li>
                            • <strong>Debugging Aid:</strong> Provides error
                            information for developers to fix issues
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BasicErrorBoundaryExample;
