import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
        </Routes>
    )
}

export default App