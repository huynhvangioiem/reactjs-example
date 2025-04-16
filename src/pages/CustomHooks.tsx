import React from "react";
import ExampleHeader from "../components/ExampleHeader";
import ExampleSidebar from "../components/ExampleSidebar";
import Overview from "../components/examples/custom-hooks/Overview";
import UseLocalStorageExample from "../components/examples/custom-hooks/UseLocalStorageExample";
import UseDebounceExample from "../components/examples/custom-hooks/UseDebounceExample";

const CustomHooks: React.FC = () => {
    const sidebarSections = [
        { id: "overview", title: "Overview" },
        { id: "local-storage", title: "useLocalStorage Example" },
        { id: "debounce", title: "useDebounce Example" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="Custom Hooks Examples"
                description="Explore various examples demonstrating how to create and use custom hooks in React."
            />
            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <UseLocalStorageExample />
                            <UseDebounceExample />
                        </div>
                    </main>

                    {/* Right Sidebar Navigation */}
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default CustomHooks;
