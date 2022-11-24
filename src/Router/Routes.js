import React from 'react';
import { useRoutes } from 'react-router-dom';
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



const Router = () => {
  const routes = useRoutes([
    {
      path: '/home',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: paths.home.detailclub,
          element: <ClubsPage />
        }
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
      element: <Login />,
    },
    {
      path: paths.settings.default,
      element: <SettingsLayout />,
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
          path:paths.settings.clubs,
          element:<Clubs />,
        },
        {
          path:paths.settings.follows,
          element:<Follows />
        }
      ],
    },
  ]);
  return routes;
};
export default Router;
