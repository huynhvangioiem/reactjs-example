# React Hooks Learning Project

This project serves as an interactive learning platform for React hooks and concepts. Built with React, TypeScript, and Vite, it provides practical examples and demonstrations of various React hooks and their use cases, with a modern and beautiful UI powered by TailwindCSS.

## Project Overview

The project features a collection of interactive examples demonstrating different React hooks and concepts:

- **useState**: Examples showing state management in functional components
- **useEffect**: Demonstrations of handling side effects
- **useContext**: Examples of sharing data without prop drilling
- **Custom Hooks**: Implementation of reusable custom hooks
- **Component Patterns**: Best practices for component composition

Each example includes:

- Detailed explanations
- Interactive demonstrations
- Code snippets
- Best practices
- Real-world use cases

## Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- npm (version 10 or higher) or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/reactjs-example.git
cd reactjs-example
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
reactjs-example/
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── lib/               # Utility functions
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── components.json        # UI components configuration
└── package.json          # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production (includes TypeScript build)
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## Technologies Used

- **React** (v18.3.1) - Latest stable version with improved features
- **TypeScript** (v5.4.2) - For type safety and better developer experience
- **Vite** (v6.2) - Fast build tool and development server
- **TailwindCSS** (v3.4.1) - Utility-first CSS framework
- **React Router DOM** (v6.22.0) - For client-side routing
- **Radix UI** - For accessible UI components
- **Lucide React** - For beautiful icons
- **Class Variance Authority** - For type-safe component variants

## UI Components

The project uses a combination of custom components and Radix UI primitives, styled with TailwindCSS:

- Accessible UI components from Radix UI
- Responsive design with TailwindCSS
- Custom animations with tw-animate-css
- Modern and clean user interface
- Dark mode support

## Contributing

Feel free to contribute to this project by:

1. Forking the repository
2. Creating a feature branch (`git checkout -b feature/amazing-feature`)
3. Committing your changes (`git commit -m 'Add some amazing feature'`)
4. Pushing to the branch (`git push origin feature/amazing-feature`)
5. Creating a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React Team for the amazing framework
- Vite Team for the blazing fast build tool
- TailwindCSS Team for the utility-first CSS framework
- All contributors who help improve this project
