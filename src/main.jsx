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
import Volume1 from "./Volume1.jsx";
import Volume2 from "./Volume2.jsx";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const router = createBrowserRouter([
    {
        path: "/*",
        element: <App><Home/></App>,
    },
    {
        path: "/volume-1",
        element: <App><Volume1/></App>,
    },
    {
        path: "/volume-2",
        element: <App><Volume2/></App>,
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
        <GoogleReCaptchaProvider
            reCaptchaKey="6Le1AGUpAAAAAC51WMRIUQqNwGSeIq61OEK5S4"
            language="en"
        >
            <RouterProvider router={router}>
                <App/>
            </RouterProvider>
        </GoogleReCaptchaProvider>
    </React.StrictMode>,
)
