

import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";



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