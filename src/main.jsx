import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import TheFractureOfShackles from "./TheFractureOfShackles";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App><Home/></App>,
    },
    {
        path: "/the-fracture-of-shackles",
        element: <App><TheFractureOfShackles/></App>,
    },
    {
        path: "/about",
        element: <App><About/></App>,
    },
    {
        path: "/contact",
        element: <App><Contact/></App>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>,
)
