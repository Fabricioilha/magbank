import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default App