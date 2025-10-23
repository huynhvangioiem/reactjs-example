import React from "react";
import ExampleHeader from "../components/ExampleHeader";
import ExampleSidebar from "../components/ExampleSidebar";
import Overview from "../components/examples/reactSuspense/Overview";
import SuspenseDemo from "../components/examples/reactSuspense/SuspenseDemo";

const ReactSuspense: React.FC = () => {
    const sidebarSections = [
        { id: "overview", title: "Overview" },
        { id: "suspense-demo", title: "Independent Boundaries" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="React.Suspense Examples"
                description="Understand how Suspense boundaries coordinate loading states and keep the UI responsive."
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <SuspenseDemo />
                        </div>
                    </main>
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default ReactSuspense;
