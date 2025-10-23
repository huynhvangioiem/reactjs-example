import React from "react";
import ExampleHeader from "../components/ExampleHeader";
import ExampleSidebar from "../components/ExampleSidebar";
import Overview from "../components/examples/errorBoundaries/Overview";
import BasicErrorBoundaryExample from "../components/examples/errorBoundaries/BasicErrorBoundaryExample";
import FallbackUIExample from "../components/examples/errorBoundaries/FallbackUIExample";
import ErrorLoggingExample from "../components/examples/errorBoundaries/ErrorLoggingExample";

const ErrorBoundaries: React.FC = () => {
    const sidebarSections = [
        { id: "overview", title: "Overview" },
        { id: "basic-error-boundary", title: "Basic Error Boundary" },
        { id: "fallback-ui", title: "Custom Fallback UI" },
        { id: "error-logging", title: "Error Logging & Reporting" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="Error Boundaries"
                description="Learn how to catch JavaScript errors in React component trees and display fallback UI instead of crashing the entire application."
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <BasicErrorBoundaryExample />
                            <FallbackUIExample />
                            <ErrorLoggingExample />
                        </div>
                    </main>
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default ErrorBoundaries;
