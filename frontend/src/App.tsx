import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./pages/Loading/Loading";
import Login from "./pages/Login/Login";
import Story from "./pages/Story/Story";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Loading />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/story"
                    element={<Story />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;