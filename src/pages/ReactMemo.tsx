import React from "react";
import ExampleHeader from "../components/ExampleHeader";
import ExampleSidebar from "../components/ExampleSidebar";
import Overview from "../components/examples/reactMemo/Overview";
import ListExample from "../components/examples/reactMemo/ListExample";

const ReactMemo: React.FC = () => {
    const sidebarSections = [
        { id: "overview", title: "Overview" },
        { id: "list-example", title: "List Example" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="React.memo Examples"
                description="Explore various examples demonstrating the use of React.memo for performance optimization."
            />
            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <ListExample />
                        </div>
                    </main>

                    {/* Right Sidebar Navigation */}
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default ReactMemo;
