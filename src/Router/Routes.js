import React from 'react';
import HomePage from '../pages/Homepage/Homepage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import paths from './paths';
// import Register from "../Pages/register/register";
import SettingsLayout from '../layouts/SettingsLayout/SettingsLayout';
import ProfileSettings from './../pages/Settings/Profile/ProfileSettings';
import PasswordSecurity from './../pages/Settings/Password/PasswordSecurity';
import Clubs from '../pages/Settings/Clubs/Clubs';
import ClubsPage from '../pages/Homepage/ClubsPage/ClubsPage';
import Follows from '../pages/Settings/Follows/Follows';
import AddClub from '../pages/Settings/AddClub/AddClub';
import ForgotPassword from './../pages/ForgotPassword/ForgotPassword';
import Universities from '../pages/Homepage/Universities/Universities';
import DetailClub from '../pages/DetailClub/DetailClub';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import PrivateRoute from '../layouts/PrivateRoute/PrivateRoute';
import NotFound from '../pages/NotFound/NotFound';

const routes = [
  {
    path: paths.home.default,
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: paths.home.clubs,
        element: <ClubsPage />,
      },
      {
        path: paths.home.universities,
        element: <Universities />,
      },
      {
        path: paths.home.detailClub,
        element: <DetailClub />,
      },
    ],
  },
  {
    path: paths.register,
    element: <Register />,
  },
  {
    path: paths.login,
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: paths.forgotPassword,
    element: <ForgotPassword />,
  },
  {
    path: paths.resetPassword,
    element: <ResetPassword />,
  },
  {
    path: paths.settings.default,
    element: <SettingsLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <ProfileSettings />,
      },
      {
        path: paths.settings.password,
        element: <PasswordSecurity />,
      },
      {
        path: paths.settings.clubs,
        element: <Clubs />,
      },
      {
        path: paths.settings.follows,
        element: <Follows />,
      },
      {
        path: paths.settings.addClub,
        element: <AddClub />,
      },
    ],
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authMap(route.children);
    }
    return route;
  });

export default authMap(routes);
