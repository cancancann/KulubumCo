import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
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
            {
                path: '/login',
                element: <Login />
            },
        ]
    )
    return routes
}
export default Router