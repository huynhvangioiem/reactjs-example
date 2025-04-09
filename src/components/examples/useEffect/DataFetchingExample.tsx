import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Post {
    id: number;
    title: string;
}

const codeExample = `import React, { useState, useEffect } from 'react';

interface Post {
    id: number;
    title: string;
}

const DataFetching = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://api.example.com/posts', {
                    signal: abortController.signal
                });
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                if (err instanceof Error && err.name === 'AbortError') {
                    console.log('Fetch aborted');
                    return;
                }
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();

        // Cleanup function to abort any in-flight requests
        return () => {
            abortController.abort();
        };
    }, []); // Empty dependency array means this runs once on mount

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
};`;

const DataFetchingExample: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchPosts = async (signal: AbortSignal) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', { signal });
            if (!response.ok) throw new Error('Failed to fetch');
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            if (err instanceof Error && err.name === 'AbortError') {
                console.log('Fetch aborted');
                return;
            }
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const abortController = new AbortController();
        fetchPosts(abortController.signal);

        // Cleanup function to abort any in-flight requests when component unmounts
        return () => {
            abortController.abort();
        };
    }, []);

    const handleRefresh = () => {
        const abortController = new AbortController();
        fetchPosts(abortController.signal);
    };

    return (
        <section id="data-fetching" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Data Fetching Example</h2>
            <p className="mb-4">
                This example demonstrates how to use useEffect for data fetching. It shows how to:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Make API calls using useEffect</li>
                <li>Handle loading and error states</li>
                <li>Clean up requests if component unmounts</li>
                <li>Use TypeScript with async operations</li>
            </ul>

            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <Button onClick={handleRefresh} disabled={loading}>
                            {loading ? 'Loading...' : 'Refresh Posts'}
                        </Button>
                    </div>

                    {error && (
                        <div className="text-red-600 bg-red-50 p-4 rounded-lg">
                            Error: {error}
                        </div>
                    )}

                    {posts.length > 0 && (
                        <div className="space-y-2">
                            {posts.map(post => (
                                <div key={post.id} className="p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-medium">{post.title}</h4>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DataFetchingExample;
