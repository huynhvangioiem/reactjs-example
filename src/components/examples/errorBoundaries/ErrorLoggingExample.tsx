import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ErrorBoundary from "./ErrorBoundary";

const codeExample = `// Error logging service
class ErrorLogger {
  static logError(error, errorInfo, context = {}) {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: context.userId,
      sessionId: context.sessionId,
      ...context
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Report:', errorReport);
    }

    // Send to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      // Example with popular error tracking services:

      // Sentry
      // Sentry.captureException(error, { extra: errorReport });

      // LogRocket
      // LogRocket.captureException(error);

      // Bugsnag
      // Bugsnag.notify(error, { metaData: errorReport });

      // Custom API endpoint
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport)
      }).catch(err => console.error('Failed to log error:', err));
    }
  }
}

// Enhanced Error Boundary with logging
class LoggingErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorId: null };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorId: Math.random().toString(36).substr(2, 9)
    };
  }

  componentDidCatch(error, errorInfo) {
    const { userId, onError } = this.props;

    // Log error with context
    ErrorLogger.logError(error, errorInfo, {
      userId,
      errorId: this.state.errorId,
      feature: this.props.feature || 'unknown'
    });

    // Call custom error handler if provided
    if (onError) {
      onError(error, errorInfo, this.state.errorId);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          errorId={this.state.errorId}
          onRetry={() => this.setState({ hasError: false })}
        />
      );
    }
    return this.props.children;
  }
}`;

// Mock error logging service
class ErrorLogger {
    static logs: Array<{
        id: string;
        timestamp: string;
        error: string;
        component: string;
        userId?: string;
        context: any;
    }> = [];

    static logError(
        error: Error,
        errorInfo: React.ErrorInfo,
        context: any = {}
    ) {
        const errorReport = {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: new Date().toISOString(),
            error: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            userAgent: navigator.userAgent,
            url: window.location.href,
            ...context,
        };

        // Add to mock logs
        this.logs.unshift({
            id: errorReport.id,
            timestamp: errorReport.timestamp,
            error: error.message,
            component:
                errorInfo.componentStack?.split("\n")[1]?.trim() || "Unknown",
            userId: context.userId,
            context: errorReport,
        });

        // Keep only last 10 logs for demo
        if (this.logs.length > 10) {
            this.logs = this.logs.slice(0, 10);
        }

        console.group("🚨 Error Logged");
        console.error("Error Report:", errorReport);
        console.groupEnd();

        return errorReport.id;
    }

    static getLogs() {
        return this.logs;
    }

    static clearLogs() {
        this.logs = [];
    }
}

// Component that can throw different types of errors
const UnstableComponent: React.FC<{
    errorType: string;
    userId?: string;
}> = ({ errorType, userId }) => {
    const errors = {
        api: () => {
            throw new Error(
                "API_ERROR: Failed to fetch user data from /api/users/123"
            );
        },
        validation: () => {
            throw new Error("VALIDATION_ERROR: Invalid email format provided");
        },
        permission: () => {
            throw new Error(
                "PERMISSION_ERROR: User does not have access to this resource"
            );
        },
        network: () => {
            throw new Error("NETWORK_ERROR: Request timeout after 30 seconds");
        },
    };

    if (errorType && errors[errorType as keyof typeof errors]) {
        errors[errorType as keyof typeof errors]();
    }

    return (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
                <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
                <span className="text-green-800 font-medium">
                    Component loaded successfully for user:{" "}
                    {userId || "Anonymous"}
                </span>
            </div>
        </div>
    );
};

const ErrorLoggingExample: React.FC = () => {
    const [errorType, setErrorType] = useState<string>("none");
    const [userId, setUserId] = useState<string>("user_123");
    const [resetKey, setResetKey] = useState(0);
    const [logs, setLogs] = useState(ErrorLogger.getLogs());

    const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
        ErrorLogger.logError(error, errorInfo, {
            userId,
            feature: "error-logging-demo",
            userAction: "triggered-error",
            errorType,
        });

        // Update logs display
        setLogs([...ErrorLogger.getLogs()]);
    };

    const handleReset = () => {
        setErrorType("none");
        setResetKey((prev) => prev + 1);
    };

    const clearLogs = () => {
        ErrorLogger.clearLogs();
        setLogs([]);
    };

    return (
        <section id="error-logging" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
                Error Logging & Reporting Example
            </h2>

            <p className="text-gray-700 mb-6">
                Error boundaries should not only catch errors but also log them
                for debugging and monitoring. This example demonstrates how to
                implement comprehensive error logging with context information
                that helps developers identify and fix issues in production.
            </p>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Code Implementation
                    </h3>
                    <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm">{codeExample}</code>
                    </pre>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Interactive Demo
                    </h3>

                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    User ID (for context):
                                </label>
                                <input
                                    type="text"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                    placeholder="Enter user ID"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Error Type:
                                </label>
                                <select
                                    value={errorType}
                                    onChange={(e) =>
                                        setErrorType(e.target.value)
                                    }
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                >
                                    <option value="none">No Error</option>
                                    <option value="api">API Error</option>
                                    <option value="validation">
                                        Validation Error
                                    </option>
                                    <option value="permission">
                                        Permission Error
                                    </option>
                                    <option value="network">
                                        Network Error
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button onClick={handleReset} variant="outline">
                                Reset Component
                            </Button>
                            <Button onClick={clearLogs} variant="outline">
                                Clear Error Logs
                            </Button>
                        </div>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-3">
                                Component with Error Logging:
                            </h4>
                            <ErrorBoundary key={resetKey} onError={handleError}>
                                <UnstableComponent
                                    errorType={errorType}
                                    userId={userId}
                                />
                            </ErrorBoundary>
                        </div>

                        {/* Error Logs Display */}
                        <div className="bg-gray-50 border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-medium text-gray-900">
                                    Error Logs ({logs.length})
                                </h4>
                                <span className="text-sm text-gray-500">
                                    Check browser console for detailed logs
                                </span>
                            </div>

                            {logs.length === 0 ? (
                                <p className="text-gray-500 text-sm italic">
                                    No errors logged yet
                                </p>
                            ) : (
                                <div className="space-y-2 max-h-64 overflow-y-auto">
                                    {logs.map((log) => (
                                        <div
                                            key={log.id}
                                            className="bg-white border border-red-200 rounded p-3 text-sm"
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <span className="font-medium text-red-800">
                                                    {log.error}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {new Date(
                                                        log.timestamp
                                                    ).toLocaleTimeString()}
                                                </span>
                                            </div>
                                            <div className="text-gray-600 space-y-1">
                                                <div>
                                                    <strong>Component:</strong>{" "}
                                                    {log.component}
                                                </div>
                                                <div>
                                                    <strong>User:</strong>{" "}
                                                    {log.userId || "Anonymous"}
                                                </div>
                                                <div>
                                                    <strong>Error ID:</strong>{" "}
                                                    {log.id}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 className="font-medium text-blue-900 mb-2">
                                What gets logged:
                            </h4>
                            <ul className="text-blue-800 text-sm space-y-1">
                                <li>
                                    • <strong>Error Details:</strong> Message,
                                    stack trace, component stack
                                </li>
                                <li>
                                    • <strong>Context:</strong> User ID,
                                    timestamp, URL, user agent
                                </li>
                                <li>
                                    • <strong>Environment:</strong> Feature
                                    name, user actions, error type
                                </li>
                                <li>
                                    • <strong>Unique ID:</strong> For tracking
                                    and correlation across systems
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 mb-2">
                        Production Error Tracking
                    </h4>
                    <div className="text-yellow-800 text-sm space-y-2">
                        <p>
                            <strong>Popular Services:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>
                                <strong>Sentry:</strong> Real-time error
                                tracking with detailed context
                            </li>
                            <li>
                                <strong>LogRocket:</strong> Session replay with
                                error correlation
                            </li>
                            <li>
                                <strong>Bugsnag:</strong> Error monitoring with
                                stability scoring
                            </li>
                            <li>
                                <strong>Rollbar:</strong> Real-time error
                                alerting and debugging
                            </li>
                        </ul>
                        <p className="mt-2">
                            <strong>Best Practice:</strong> Always include user
                            context, feature flags, and environment information
                            to help with debugging.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorLoggingExample;
