import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import About from "../Pages/About/About";
import Gallery from "../Pages/Gallery/Gallery";
import Profile from "../Pages/Profile/Profile";
import Members from "../Pages/Members/Members";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/members',
                element: <Members></Members>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },

])

export default router;