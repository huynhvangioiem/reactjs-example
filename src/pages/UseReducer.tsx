import React from "react";
import ExampleHeader from "../components/ExampleHeader";
import ExampleSidebar from "../components/ExampleSidebar";
import Overview from "../components/examples/useReducer/Overview";
import TodoExample from "../components/examples/useReducer/TodoExample";
import ShoppingCartExample from "../components/examples/useReducer/ShoppingCartExample";

const UseReducer: React.FC = () => {
    const sidebarSections = [
        { id: "overview", title: "Overview" },
        { id: "todo-example", title: "Todo Example" },
        { id: "shopping-cart-example", title: "Shopping Cart Example" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <ExampleHeader
                title="useReducer Examples"
                description="Explore various examples demonstrating the use of the useReducer hook in React."
            />
            {/* Main Content with Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    {/* Main Content */}
                    <main className="flex-1">
                        <div className="prose max-w-none">
                            <Overview />
                            <TodoExample />
                            <ShoppingCartExample />
                        </div>
                    </main>

                    {/* Right Sidebar Navigation */}
                    <ExampleSidebar sections={sidebarSections} />
                </div>
            </div>
        </div>
    );
};

export default UseReducer; 
