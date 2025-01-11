

import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";
import { Children } from "react";



const adminRoutes2 = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        element: <AdminDashboard></AdminDashboard>
    },
    {
        name: 'User Management',
        Children: [
            {
                name: 'Create Student',
                path: '/admin/createStudent',
                element: <CreateStudent />,
                
            },
            {
                name: 'Create Faculty',
                path: '/admin/createFaculty',
                element: <CreateFaculty />,
                
            },
            {
                name: 'Create Admin',
                path: '/admin/createAdmin',
                element: <CreateAdmin />,
                
            },
        ]
    }
]


export const adminRoutes = [
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
        ]