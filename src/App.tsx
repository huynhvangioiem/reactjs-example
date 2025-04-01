import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Example from './pages/Example';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <main>
                    <Routes>
                        <Route path="reactjs-example/" element={<Home />} />
                        <Route path="reactjs-example/example" element={<Example />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
