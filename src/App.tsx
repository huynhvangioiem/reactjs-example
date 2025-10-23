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
import ReactLazy from "./pages/ReactLazy";
import ReactSuspense from "./pages/ReactSuspense";
import UseRef from "./pages/UseRef";
import HelloReact from "./pages/HelloReact";
import ComponentsAndProps from "./pages/ComponentsAndProps";
import StateAndEvents from "./pages/StateAndEvents";
import ConditionalAndLists from "./pages/ConditionalAndLists";
import ComponentComposition from "./pages/ComponentComposition";
import ErrorBoundaries from "./pages/ErrorBoundaries";
function App() {
    return (
        <Router basename="reactjs-example">
            <div className="min-h-screen bg-gray-100 flex flex-col">
                <Header />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="hello-react" element={<HelloReact />} />
                    <Route
                        path="hello-react/components-props"
                        element={<ComponentsAndProps />}
                    />
                    <Route
                        path="hello-react/state-events"
                        element={<StateAndEvents />}
                    />
                    <Route
                        path="hello-react/conditional-lists"
                        element={<ConditionalAndLists />}
                    />
                    <Route
                        path="hello-react/component-composition"
                        element={<ComponentComposition />}
                    />
                    <Route path="usestate" element={<UseState />} />
                    <Route path="useeffect" element={<UseEffect />} />
                    <Route path="usecallback" element={<UseCallback />} />
                    <Route path="usememo" element={<UseMemo />} />
                    <Route path="useref" element={<UseRef />} />
                    <Route path="usecontext" element={<UseContext />} />
                    <Route path="usereducer" element={<UseReducer />} />
                    <Route path="custom-hooks" element={<CustomHooks />} />
                    <Route path="react-memo" element={<ReactMemo />} />
                    <Route path="react-lazy" element={<ReactLazy />} />
                    <Route path="react-suspense" element={<ReactSuspense />} />
                    <Route
                        path="error-boundaries"
                        element={<ErrorBoundaries />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
