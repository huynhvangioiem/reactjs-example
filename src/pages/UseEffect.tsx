import React from "react";
import ExampleHeader from "../components/ExampleHeader";
import ExampleSidebar from "../components/ExampleSidebar";
import Overview from "../components/examples/useEffect/Overview";
import TimerExample from "../components/examples/useEffect/TimerExample";
import DataFetchingExample from "../components/examples/useEffect/DataFetchingExample";
import WindowResizeExample from "../components/examples/useEffect/WindowResizeExample";

const UseEffect: React.FC = () => {
    const sidebarSections = [
        { id: "overview", title: "Overview" },
        { id: "timer", title: "Timer Example" },
        { id: "data-fetching", title: "Data Fetching Example" },
        { id: "window-resize", title: "Window Resize Example" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="useEffect Examples"
                description="Explore various examples demonstrating the use of the useEffect hook in React."
            />
            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <TimerExample />
                            <DataFetchingExample />
                            <WindowResizeExample />
                        </div>
                    </main>

                    {/* Right Sidebar Navigation */}
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default UseEffect;
