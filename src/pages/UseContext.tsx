import React from "react";
import ExampleHeader from "../components/ExampleHeader";
import ExampleSidebar from "../components/ExampleSidebar";
import Overview from "../components/examples/useContext/Overview";
import ThemeExample from "@/components/examples/useContext/ThemeExample";

const UseContext: React.FC = () => {
    const sidebarSections = [
        { id: "overview", title: "Overview" },
        { id: "theme-example", title: "Theme Example" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="useContext Examples"
                description="Explore various examples demonstrating the use of the useContext hook in React."
            />
            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <ThemeExample />
                        </div>
                    </main>

                    {/* Right Sidebar Navigation */}
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default UseContext;
