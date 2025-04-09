import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UseCallback from "./pages/UseCallback";
import UseMemo from "./pages/UseMemo";

function App() {
    return (
        <Router basename="reactjs-example">
            <div className="min-h-screen bg-gray-100 flex flex-col">
                <Header />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="usestate" element={<UseState />} />
                    <Route path="useeffect" element={<UseEffect />} />
                    <Route path="usecallback" element={<UseCallback />} />
                    <Route path="usememo" element={<UseMemo />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
