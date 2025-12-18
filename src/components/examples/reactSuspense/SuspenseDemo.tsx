import React, { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";

// Simple Resource type for Suspense demo
type Resource<T> = {
    read: () => T;
};

// Creates a resource that works with Suspense
// Key concept: throw a promise to trigger Suspense fallback
function createResource<T>(loader: () => Promise<T>): Resource<T> {
    let status: "pending" | "success" | "error" = "pending";
    let response: T;
    let error: unknown;

    // Start the async work immediately
    const suspender = loader()
        .then((value) => {
            status = "success";
            response = value;
        })
        .catch((err) => {
            status = "error";
            error = err;
        });

    return {
        read() {
            // This is the key: throw the promise to trigger Suspense
            if (status === "pending") throw suspender;
            if (status === "error") throw error;
            return response!;
        },
    };
}

// Simple data types for demo
type UserData = {
    name: string;
    email: string;
    joinDate: string;
};

type PostData = {
    id: number;
    title: string;
    content: string;
};

// Simulate slow API calls with different timing
// This demonstrates how Suspense handles multiple async operations
const fetchUserData = (): Promise<UserData> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "John Doe",
                email: "john@example.com",
                joinDate: "January 2024",
            });
        }, 2000); // Slower - 2 seconds
    });

const fetchPosts = (): Promise<PostData[]> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: "Getting Started with React",
                    content: "React is a powerful library...",
                },
                {
                    id: 2,
                    title: "Understanding Suspense",
                    content: "Suspense helps manage loading states...",
                },
                {
                    id: 3,
                    title: "Advanced Patterns",
                    content: "Learn advanced React patterns...",
                },
            ]);
        }, 1000); // Faster - 1 second
    });

const codeExample = String.raw`// Key Suspense Pattern: Independent Boundaries
function App() {
    const [resources, setResources] = useState(null);

    const loadData = () => setResources({
        user: createResource(fetchUser),    // 2 second delay
        posts: createResource(fetchPosts)   // 1 second delay
    });

    return (
        <div>
            <button onClick={loadData}>Load Data</button>
            {resources && (
                <div className="grid grid-cols-2 gap-4">
                    {/* Each Suspense boundary works independently */}
                    <Suspense fallback={<div>Loading user...</div>}>
                        <UserProfile resource={resources.user} />
                    </Suspense>

                    <Suspense fallback={<div>Loading posts...</div>}>
                        <PostsList resource={resources.posts} />
                    </Suspense>
                </div>
            )}
        </div>
    );
}

// Components that read from resources
const UserProfile = ({ resource }) => {
    const user = resource.read(); // This triggers Suspense if pending
    return <div>{user.name} - {user.email}</div>;
};

const PostsList = ({ resource }) => {
    const posts = resource.read(); // This triggers Suspense if pending
    return <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>;
};`;

const SuspenseDemo: React.FC = () => {
    const [resources, setResources] = useState<{
        user: Resource<UserData>;
        posts: Resource<PostData[]>;
    } | null>(null);

    const loadData = () => {
        setResources({
            user: createResource(fetchUserData),
            posts: createResource(fetchPosts),
        });
    };

    const resetDemo = () => {
        setResources(null);
        // Small delay to show the reset visually
        setTimeout(loadData, 100);
    };

    return (
        <section id="suspense-demo" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Independent Suspense Boundaries
            </h2>
            <p className="text-gray-600 mb-4">
                Each Suspense boundary works independently. When a component
                throws a promise, only that boundary shows its fallback. This
                allows different parts of your UI to load at different speeds
                without blocking each other.
            </p>

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Key Pattern: Independent Loading
                    </h3>
                    <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{codeExample}</code>
                    </pre>
                    <p className="mt-2 text-sm text-gray-500">
                        Notice how each Suspense boundary wraps its own
                        component. The posts will load first (1s) while the user
                        profile is still loading (2s).
                    </p>
                </div>

                <div className="mt-6 p-6 bg-white border rounded-lg shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Interactive Demo
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Click "Load Data" to start two async operations with
                        different timing. Watch how the posts load first while
                        the user profile is still loading.
                    </p>
                    <div className="flex gap-3">
                        <Button onClick={loadData}>Load Data</Button>
                        <Button variant="outline" onClick={resetDemo}>
                            Reset & Replay
                        </Button>
                    </div>

                    <div className="mt-6 grid gap-4 lg:grid-cols-2">
                        {resources ? (
                            <>
                                {/* User Profile - loads slower (2s) */}
                                <Suspense
                                    fallback={
                                        <div className="rounded-lg border border-dashed border-blue-200 bg-blue-50 p-6 text-blue-800">
                                            <div className="animate-pulse">
                                                <div className="h-4 bg-blue-200 rounded w-3/4 mb-2"></div>
                                                <div className="h-3 bg-blue-200 rounded w-1/2"></div>
                                            </div>
                                            <p className="mt-2 text-sm">
                                                Loading user profile... (2s)
                                            </p>
                                        </div>
                                    }
                                >
                                    <UserProfile resource={resources.user} />
                                </Suspense>

                                {/* Posts List - loads faster (1s) */}
                                <Suspense
                                    fallback={
                                        <div className="rounded-lg border border-dashed border-green-200 bg-green-50 p-6 text-green-800">
                                            <div className="animate-pulse space-y-2">
                                                <div className="h-3 bg-green-200 rounded w-full"></div>
                                                <div className="h-3 bg-green-200 rounded w-5/6"></div>
                                                <div className="h-3 bg-green-200 rounded w-4/6"></div>
                                            </div>
                                            <p className="mt-2 text-sm">
                                                Loading posts... (1s)
                                            </p>
                                        </div>
                                    }
                                >
                                    <PostsList resource={resources.posts} />
                                </Suspense>
                            </>
                        ) : (
                            <div className="col-span-2 rounded-lg border border-gray-200 bg-gray-50 p-6 text-gray-600 text-center">
                                <p className="text-lg mb-2">
                                    Ready to demonstrate Suspense!
                                </p>
                                <p className="text-sm">
                                    Click "Load Data" to see how independent
                                    Suspense boundaries work.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="text-md font-medium text-blue-900 mb-2">
                            Key Observations
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-blue-800">
                            <li>
                                <strong>Independent loading:</strong> Each
                                Suspense boundary shows its own fallback
                            </li>
                            <li>
                                <strong>Different timing:</strong> Posts load
                                first (1s) while user profile takes longer (2s)
                            </li>
                            <li>
                                <strong>No blocking:</strong> Fast components
                                don't wait for slow ones
                            </li>
                            <li>
                                <strong>Graceful UX:</strong> Users see content
                                as soon as it's ready
                            </li>
                            <li>
                                <strong>Resource pattern:</strong> Components
                                call <code>resource.read()</code> which throws
                                promises to trigger Suspense
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Component that reads user data and triggers Suspense
const UserProfile: React.FC<{ resource: Resource<UserData> }> = ({
    resource,
}) => {
    // This read() call will throw a promise if data isn't ready, triggering Suspense
    const user = resource.read();

    return (
        <div className="rounded-lg border border-blue-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
                👤 User Profile
            </h3>
            <div className="space-y-2">
                <p>
                    <span className="font-medium text-gray-900">Name:</span>{" "}
                    {user.name}
                </p>
                <p>
                    <span className="font-medium text-gray-900">Email:</span>{" "}
                    {user.email}
                </p>
                <p>
                    <span className="font-medium text-gray-900">
                        Member since:
                    </span>{" "}
                    {user.joinDate}
                </p>
            </div>
            <div className="mt-3 text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                ✅ Loaded after 2 seconds
            </div>
        </div>
    );
};

// Component that reads posts data and triggers Suspense
const PostsList: React.FC<{ resource: Resource<PostData[]> }> = ({
    resource,
}) => {
    // This read() call will throw a promise if data isn't ready, triggering Suspense
    const posts = resource.read();

    return (
        <div className="rounded-lg border border-green-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-900 mb-3">
                📝 Recent Posts
            </h3>
            <ul className="space-y-3">
                {posts.map((post) => (
                    <li
                        key={post.id}
                        className="border-l-2 border-green-200 pl-3"
                    >
                        <h4 className="font-medium text-gray-900">
                            {post.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                            {post.content}
                        </p>
                    </li>
                ))}
            </ul>
            <div className="mt-3 text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                ✅ Loaded after 1 second
            </div>
        </div>
    );
};

export default SuspenseDemo;
