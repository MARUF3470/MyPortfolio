import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Project from "../pages/Home/Projects/Project";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/project/:id',
                element: <Project></Project>,
                loader: ({ params }) => fetch(`https://porfoilo-server.vercel.app/project/${params.id}`)
            }
        ]
    }
])
export default router