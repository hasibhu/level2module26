import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import App from "../App";
import UserProfile from "../pages/UserProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />, // Ensure App includes <Outlet />
        children: [
            {
                path: 'about',
                element: <About />,
                
            },
        ],
    },
    



    {
        path: '/admin',
        element: <App />, // Ensure App includes <Outlet />
        children: [
            {
                index: true,
                element: <AdminDashboard />,
                
            },
            {
                path: 'createStudent',
                element: <CreateStudent />,
                
            },
            {
                path: 'createFaculty',
                element: <CreateFaculty />,
                
            },
            {
                path: 'createAdmin',
                element: <CreateAdmin />,
                
            },
        ],
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
