import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const codeExample = `const ProductStatus: React.FC = () => {
    const [isAvailable, setIsAvailable] = useState(true);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <button onClick={() => setIsAvailable((prev) => !prev)}>
                {isAvailable ? 'Mark as Out of Stock' : 'Mark as In Stock'}
            </button>

            <button onClick={() => setShowDetails((prev) => !prev)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>

            <p>Status: {isAvailable ? 'In stock' : 'Out of stock'}</p>

            {showDetails ? (
                <p>This extra paragraph only renders when showDetails is true.</p>
            ) : (
                <p>Details are hidden. Click the button above to reveal them.</p>
            )}
        </div>
    );
};`;

const ConditionalExample: React.FC = () => {
    const [isAvailable, setIsAvailable] = useState(true);
    const [showDetails, setShowDetails] = useState(false);

    const availabilityLabel = isAvailable ? "In stock" : "Out of stock";
    const availabilityAction = isAvailable
        ? "Mark as Out of Stock"
        : "Mark as In Stock";
    const availabilityHint = isAvailable
        ? 'Clicking will flip the status text below to "Out of stock".'
        : 'Clicking will flip the status text below to "In stock".';

    const detailsAction = showDetails ? "Hide Details" : "Show Details";
    const detailsHint = showDetails
        ? "This will remove the extra explanation text."
        : "This will reveal an extra explanation message.";

    return (
        <section id="conditional-example" className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Conditional Rendering Example
            </h2>
            <p className="text-gray-600 mb-4">
                Ternaries work well for mutually exclusive UI while logical AND
                shines for optional details. Toggle the switches to see both in
                action.
            </p>
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto mb-6">
                <code className="text-sm">{codeExample}</code>
            </pre>
            <div className="bg-white border rounded-lg p-4 space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-md border border-blue-100 bg-blue-50/60 p-3">
                        <Button
                            className="w-full justify-center"
                            onClick={() => setIsAvailable((prev) => !prev)}
                        >
                            {availabilityAction}
                        </Button>
                        <p className="mt-2 text-sm text-blue-700">
                            {availabilityHint}
                        </p>
                    </div>
                    <div className="rounded-md border border-amber-100 bg-amber-50/60 p-3">
                        <Button
                            variant="outline"
                            className="w-full justify-center"
                            onClick={() => setShowDetails((prev) => !prev)}
                        >
                            {detailsAction}
                        </Button>
                        <p className="mt-2 text-sm text-amber-700">
                            {detailsHint}
                        </p>
                    </div>
                </div>
                <div
                    className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3"
                    aria-live="polite"
                >
                    <p className="font-semibold text-blue-900">
                        Status: {availabilityLabel}
                    </p>
                    {showDetails ? (
                        <p className="text-blue-800 mt-2">
                            Details: This section only renders when{" "}
                            <code>showDetails</code> is true.
                        </p>
                    ) : (
                        <p className="mt-2 text-sm text-blue-700">
                            Details are currently hidden. Use the button above
                            to render the extra explanation.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ConditionalExample;
