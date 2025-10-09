import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const layoutCodeExample = `const Layout = ({ header, sidebar, footer, children }: LayoutProps) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
            <header className="bg-slate-900 text-white px-6 py-4">
                {header}
            </header>
            <div className="flex flex-col md:flex-row">
                <aside className="md:w-64 bg-slate-100 border-b md:border-b-0 md:border-r border-slate-200 px-4 py-4">
                    {sidebar}
                </aside>
                <main className="flex-1 px-6 py-4">
                    {children}
                </main>
            </div>
            <footer className="bg-slate-900 text-white px-6 py-3">
                {footer}
            </footer>
        </div>
    );
};`;

type LayoutProps = {
    header: React.ReactNode;
    sidebar: React.ReactNode;
    footer: React.ReactNode;
    children: React.ReactNode;
};

const Layout = ({ header, sidebar, footer, children }: LayoutProps) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
            <header className="bg-slate-900 text-white px-6 py-4">
                {header}
            </header>
            <div className="flex flex-col md:flex-row">
                <aside className="md:w-64 bg-slate-100 border-b md:border-b-0 md:border-r border-slate-200 px-4 py-4">
                    {sidebar}
                </aside>
                <main className="flex-1 px-6 py-4">{children}</main>
            </div>
            <footer className="bg-slate-900 text-white px-6 py-3">
                {footer}
            </footer>
        </div>
    );
};

const LayoutExample: React.FC = () => {
    const [activePage, setActivePage] = useState<"home" | "profile">("home");

    const header = (
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Acme Dashboard</h3>
            <span className="text-sm text-slate-300">Welcome back</span>
        </div>
    );

    const sidebar = (
        <nav className="space-y-2">
            <Button
                className="w-full justify-start"
                variant={activePage === "home" ? "default" : "ghost"}
                onClick={() => setActivePage("home")}
            >
                Overview
            </Button>
            <Button
                className="w-full justify-start"
                variant={activePage === "profile" ? "default" : "ghost"}
                onClick={() => setActivePage("profile")}
            >
                Profile
            </Button>
        </nav>
    );

    const footer = (
        <p className="text-sm">&copy; {new Date().getFullYear()} Acme Inc.</p>
    );

    return (
        <section id="layout-example" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Layout Composition Example
            </h2>
            <p className="text-gray-600 mb-4">
                The slot pattern lets parents decide what to render in each
                layout region. The layout never needs to know about the specific
                pages—it just renders slots.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto mb-6">
                <code className="text-sm">{layoutCodeExample}</code>
            </pre>
            <Layout header={header} sidebar={sidebar} footer={footer}>
                {activePage === "home" ? (
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-slate-900">
                            Team Activity
                        </h3>
                        <p className="text-slate-600">
                            Recent commits, design updates, and sprint tasks
                            show up here.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-slate-900">
                            Profile Settings
                        </h3>
                        <p className="text-slate-600">
                            Compose another component inside the layout to
                            render completely different UI.
                        </p>
                    </div>
                )}
            </Layout>
        </section>
    );
};

export default LayoutExample;
