import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./adminRoutes";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />, // Ensure App includes <Outlet />
        
    },
    



    {
        path: '/admin',
        element: <App />, // Ensure App includes <Outlet />
        children: adminRoutes
    },


    {
        path: '/faculty',
        element: <App />, // Ensure App includes <Outlet />
        children: adminRoutes
    },

    
    {
        path: '/student',
        element: <App />, // Ensure App includes <Outlet />
        children: adminRoutes
    },









    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },

]);

export default routes;
