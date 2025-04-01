import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Example from './pages/Example';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/example" element={<Example />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
