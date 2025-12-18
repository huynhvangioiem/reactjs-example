import React from "react";

const Overview: React.FC = () => {
    return (
        <section id="overview" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
                Error Boundaries Overview
            </h2>

            <div className="space-y-6">
                <div>
                    <p className="text-gray-700 mb-4">
                        Error boundaries are React components that catch
                        JavaScript errors anywhere in their child component
                        tree, log those errors, and display a fallback UI
                        instead of the component tree that crashed. Error
                        boundaries catch errors during rendering, in lifecycle
                        methods, and in constructors of the whole tree below
                        them.
                    </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">
                        Key Concepts
                    </h3>
                    <ul className="space-y-2 text-blue-800">
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                <strong>Class Components Only:</strong> Error
                                boundaries must be class components (no hooks
                                equivalent yet)
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                <strong>Lifecycle Methods:</strong> Use{" "}
                                <code className="bg-blue-100 px-1 py-0.5 rounded">
                                    componentDidCatch
                                </code>{" "}
                                and{" "}
                                <code className="bg-blue-100 px-1 py-0.5 rounded">
                                    getDerivedStateFromError
                                </code>
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                <strong>Fallback UI:</strong> Display
                                user-friendly error messages instead of white
                                screen
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                <strong>Error Isolation:</strong> Prevent errors
                                in one part from crashing the entire app
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                        What Error Boundaries DON'T Catch
                    </h3>
                    <ul className="space-y-2 text-yellow-800">
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>Errors inside event handlers</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                Asynchronous code (e.g., setTimeout or
                                requestAnimationFrame callbacks)
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                Errors thrown during server-side rendering
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                Errors thrown in the error boundary itself
                                (rather than its children)
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-50 border rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Basic Error Boundary Structure
                    </h3>
                    <pre className="bg-white border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}`}</code>
                    </pre>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">
                        Best Practices
                    </h3>
                    <ul className="space-y-2 text-green-800">
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                <strong>Strategic Placement:</strong> Place
                                error boundaries at different levels of your
                                component tree
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                <strong>Granular Boundaries:</strong> Use
                                multiple boundaries to isolate different parts
                                of your app
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                <strong>Error Reporting:</strong> Log errors to
                                monitoring services for debugging
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                <strong>User-Friendly Messages:</strong> Show
                                helpful fallback UI with recovery options
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>
                                <strong>Development vs Production:</strong> Show
                                detailed errors in development, user-friendly
                                messages in production
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Overview;
