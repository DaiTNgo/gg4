import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    Link,
    RouterProvider,
    Routes,
} from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import ReactGA from "react-ga4";
import Info from "./Info";

ReactGA.initialize("G-BW68E5EZ6R");

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/info"}>Info</Link>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="info" element={<Info />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
