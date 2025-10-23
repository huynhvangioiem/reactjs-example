import React from "react";
import ExampleHeader from "../components/ExampleHeader";
import ExampleSidebar from "../components/ExampleSidebar";
import Overview from "../components/examples/reactLazy/Overview";
import LazyLoadingExample from "../components/examples/reactLazy/LazyLoadingExample";

const ReactLazy: React.FC = () => {
    const sidebarSections = [
        { id: "overview", title: "Overview" },
        { id: "lazy-loading", title: "Feature-Level Lazy Loading" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="React.lazy Examples"
                description="Learn how to defer component loading with Suspense fallbacks to keep bundles lean."
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <LazyLoadingExample />
                        </div>
                    </main>
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default ReactLazy;
