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
import PrivateRoutes from "./PrivateRoutes";
import ServicesDetail from "../Pages/ServicesDetail/ServicesDetail";
import ContactUs from "../ContactUs/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/yoga.json')
            },
            {
                path: '/services/:id',
                element: <PrivateRoutes><ServicesDetail></ServicesDetail></PrivateRoutes>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/gallery',
                element: <PrivateRoutes><Gallery></Gallery></PrivateRoutes>
            },
            {
                path: '/members',
                element: <PrivateRoutes><Members></Members></PrivateRoutes>
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