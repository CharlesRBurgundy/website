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
import Book1 from "./Book1.jsx";
import Book2 from "./Book2.jsx";

const router = createBrowserRouter([
    {
        path: "/*",
        element: <App><Home/></App>,
    },
    {
        path: "/book-1",
        element: <App><Book1/></App>,
    },
    {
        path: "/book-2",
        element: <App><Book2/></App>,
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
            <App/>
        </RouterProvider>
    </React.StrictMode>,
)
