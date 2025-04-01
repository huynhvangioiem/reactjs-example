import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Router basename="reactjs-example">
            <div className="min-h-screen bg-gray-100 flex flex-col">
                <Header />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="usestate" element={<UseState />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
