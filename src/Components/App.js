import Login from "./Login";
import Main from "./Main";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="main" element={<Main />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};