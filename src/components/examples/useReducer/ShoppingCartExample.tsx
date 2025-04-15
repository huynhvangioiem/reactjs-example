import React, { useReducer } from 'react';

const codeExample = `import React, { useReducer } from 'react';

// Define types
type Product = {
    id: number;
    name: string;
    price: number;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type CartState = {
    items: CartItem[];
    total: number;
};

type CartAction =
    | { type: 'ADD_ITEM'; product: Product }
    | { type: 'REMOVE_ITEM'; productId: number }
    | { type: 'UPDATE_QUANTITY'; productId: number; quantity: number }
    | { type: 'CLEAR_CART' };

// Initial state
const initialState: CartState = {
    items: [],
    total: 0
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItem = state.items.find(
                item => item.product.id === action.product.id
            );
            
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.product.id === action.product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    total: state.total + action.product.price
                };
            }
            
            return {
                ...state,
                items: [...state.items, { product: action.product, quantity: 1 }],
                total: state.total + action.product.price
            };
        }
        
        case 'REMOVE_ITEM': {
            const itemToRemove = state.items.find(
                item => item.product.id === action.productId
            );
            
            if (!itemToRemove) return state;
            
            return {
                ...state,
                items: state.items.filter(item => item.product.id !== action.productId),
                total: state.total - (itemToRemove.product.price * itemToRemove.quantity)
            };
        }
        
        case 'UPDATE_QUANTITY': {
            const itemToUpdate = state.items.find(
                item => item.product.id === action.productId
            );
            
            if (!itemToUpdate) return state;
            
            const quantityDiff = action.quantity - itemToUpdate.quantity;
            
            return {
                ...state,
                items: state.items.map(item =>
                    item.product.id === action.productId
                        ? { ...item, quantity: action.quantity }
                        : item
                ),
                total: state.total + (itemToUpdate.product.price * quantityDiff)
            };
        }
        
        case 'CLEAR_CART':
            return initialState;
            
        default:
            return state;
    }
};`;

// Define types
type Product = {
    id: number;
    name: string;
    price: number;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type CartState = {
    items: CartItem[];
    total: number;
};

type CartAction =
    | { type: 'ADD_ITEM'; product: Product }
    | { type: 'REMOVE_ITEM'; productId: number }
    | { type: 'UPDATE_QUANTITY'; productId: number; quantity: number }
    | { type: 'CLEAR_CART' };

// Sample products
const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 699.99 },
    { id: 3, name: 'Headphones', price: 199.99 },
    { id: 4, name: 'Tablet', price: 499.99 }
];

// Initial state
const initialState: CartState = {
    items: [],
    total: 0
};

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItem = state.items.find(
                item => item.product.id === action.product.id
            );

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.product.id === action.product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    total: state.total + action.product.price
                };
            }

            return {
                ...state,
                items: [...state.items, { product: action.product, quantity: 1 }],
                total: state.total + action.product.price
            };
        }

        case 'REMOVE_ITEM': {
            const itemToRemove = state.items.find(
                item => item.product.id === action.productId
            );

            if (!itemToRemove) return state;

            return {
                ...state,
                items: state.items.filter(item => item.product.id !== action.productId),
                total: state.total - (itemToRemove.product.price * itemToRemove.quantity)
            };
        }

        case 'UPDATE_QUANTITY': {
            const itemToUpdate = state.items.find(
                item => item.product.id === action.productId
            );

            if (!itemToUpdate) return state;

            const quantityDiff = action.quantity - itemToUpdate.quantity;

            return {
                ...state,
                items: state.items.map(item =>
                    item.product.id === action.productId
                        ? { ...item, quantity: action.quantity }
                        : item
                ),
                total: state.total + (itemToUpdate.product.price * quantityDiff)
            };
        }

        case 'CLEAR_CART':
            return initialState;

        default:
            return state;
    }
};

const ShoppingCart: React.FC = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const handleAddItem = (product: Product) => {
        dispatch({ type: 'ADD_ITEM', product });
    };

    const handleRemoveItem = (productId: number) => {
        dispatch({ type: 'REMOVE_ITEM', productId });
    };

    const handleUpdateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) return;
        dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <div className="space-y-6">
            {/* Products List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        <button
                            onClick={() => handleAddItem(product)}
                            className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Shopping Cart */}
            <div className="border rounded-lg p-6 bg-white">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
                    {state.items.length > 0 && (
                        <button
                            onClick={handleClearCart}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                        >
                            Clear Cart
                        </button>
                    )}
                </div>

                {state.items.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                ) : (
                    <div className="space-y-4">
                        {state.items.map(item => (
                            <div
                                key={item.product.id}
                                className="flex items-center justify-between p-4 border rounded-lg"
                            >
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">
                                        {item.product.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        ${item.product.price.toFixed(2)} each
                                    </p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() =>
                                                handleUpdateQuantity(
                                                    item.product.id,
                                                    item.quantity - 1
                                                )
                                            }
                                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                handleUpdateQuantity(
                                                    item.product.id,
                                                    item.quantity + 1
                                                )
                                            }
                                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveItem(item.product.id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className="border-t pt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-medium text-gray-900">
                                    Total:
                                </span>
                                <span className="text-xl font-semibold text-gray-900">
                                    ${state.total.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ShoppingCartExample: React.FC = () => {
    return (
        <section id="shopping-cart-example" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart Example</h2>
            <p className="mb-4">
                This example demonstrates how useReducer can be used to manage a complex shopping cart state with multiple actions and calculations.
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Manages a list of products and cart items</li>
                <li>Handles adding, removing, and updating quantities</li>
                <li>Calculates total price automatically</li>
                <li>Demonstrates complex state updates with multiple sub-values</li>
            </ul>

            {/* Code Syntax */}
            <pre className="bg-gray-50 border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm">{codeExample}</code>
            </pre>

            {/* Live Demo */}
            <div className="mt-6 p-6 bg-white border rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Live Demo</h3>
                <ShoppingCart />
            </div>
        </section>
    );
};

export default ShoppingCartExample; 
