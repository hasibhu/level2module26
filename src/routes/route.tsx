import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import App from "../App";




const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index:true, 
                element: <Homepage></Homepage>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    }
])



export default routes;