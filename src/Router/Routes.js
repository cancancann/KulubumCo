import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import Register from "../pages/Register/Register";
// import Register from "../Pages/register/register";
const Router = () => {
    const routes = useRoutes(
        [
            {
                path: '/home',
                element: <HomePage />
            },
            {
                path: '/register',
                element: <Register />
            },
            // {
            //     path: '/register',
            //     element: <Register />
            // },
        ]
    )
    return routes
}
export default Router