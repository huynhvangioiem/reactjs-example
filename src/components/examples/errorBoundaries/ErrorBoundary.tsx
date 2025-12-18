import React, { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
    resetOnPropsChange?: boolean;
    resetKeys?: Array<string | number>;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    private resetTimeoutId: number | null = null;

    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI
        return {
            hasError: true,
            error,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Update state with error info
        this.setState({
            error,
            errorInfo,
        });

        // Call the onError callback if provided
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }

        // Log error to console in development
        if (process.env.NODE_ENV === "development") {
            console.group("🚨 Error Boundary Caught An Error");
            console.error("Error:", error);
            console.error("Error Info:", errorInfo);
            console.error("Component Stack:", errorInfo.componentStack);
            console.groupEnd();
        }
    }

    componentDidUpdate(prevProps: Props) {
        const { resetKeys, resetOnPropsChange } = this.props;
        const { hasError } = this.state;

        // Reset error boundary if resetKeys change
        if (hasError && resetKeys) {
            const hasResetKeyChanged = resetKeys.some(
                (resetKey, idx) => prevProps.resetKeys?.[idx] !== resetKey
            );
            if (hasResetKeyChanged) {
                this.resetErrorBoundary();
            }
        }

        // Reset error boundary if any props change (when resetOnPropsChange is true)
        if (hasError && resetOnPropsChange && prevProps !== this.props) {
            this.resetErrorBoundary();
        }
    }

    resetErrorBoundary = () => {
        // Clear any existing timeout
        if (this.resetTimeoutId) {
            clearTimeout(this.resetTimeoutId);
        }

        // Reset state after a brief delay to ensure clean re-render
        this.resetTimeoutId = window.setTimeout(() => {
            this.setState({
                hasError: false,
                error: null,
                errorInfo: null,
            });
        }, 0);
    };

    componentWillUnmount() {
        if (this.resetTimeoutId) {
            clearTimeout(this.resetTimeoutId);
        }
    }

    render() {
        const { hasError, error, errorInfo } = this.state;
        const { children, fallback } = this.props;

        if (hasError) {
            // Custom fallback UI
            if (fallback) {
                return fallback;
            }

            // Default fallback UI
            return (
                <div className="min-h-[200px] flex items-center justify-center bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="text-center">
                        <div className="text-red-600 mb-4">
                            <svg
                                className="w-12 h-12 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-red-900 mb-2">
                            Something went wrong
                        </h3>
                        <p className="text-red-700 mb-4">
                            An error occurred while rendering this component.
                        </p>
                        <button
                            onClick={this.resetErrorBoundary}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Try Again
                        </button>
                        {process.env.NODE_ENV === "development" && error && (
                            <details className="mt-4 text-left">
                                <summary className="cursor-pointer text-red-800 font-medium mb-2">
                                    Error Details (Development Only)
                                </summary>
                                <div className="bg-red-100 border border-red-300 rounded p-3 text-sm">
                                    <div className="mb-2">
                                        <strong>Error:</strong> {error.message}
                                    </div>
                                    <div className="mb-2">
                                        <strong>Stack:</strong>
                                        <pre className="mt-1 text-xs overflow-x-auto">
                                            {error.stack}
                                        </pre>
                                    </div>
                                    {errorInfo && (
                                        <div>
                                            <strong>Component Stack:</strong>
                                            <pre className="mt-1 text-xs overflow-x-auto">
                                                {errorInfo.componentStack}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
