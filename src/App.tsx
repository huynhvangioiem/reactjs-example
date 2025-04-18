import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UseCallback from "./pages/UseCallback";
import UseMemo from "./pages/UseMemo";
import UseContext from "./pages/UseContext";
import UseReducer from "./pages/UseReducer";
import CustomHooks from "./pages/CustomHooks";
import ReactMemo from "./pages/ReactMemo";
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
                    <Route path="usecontext" element={<UseContext />} />
                    <Route path="usereducer" element={<UseReducer />} />
                    <Route path="custom-hooks" element={<CustomHooks />} />
                    <Route path="react-memo" element={<ReactMemo />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
