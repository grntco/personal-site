import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'about',
            element: <About />,
        },
        {
            path: 'projects',
            element: <Projects />,
        },
    ])
    return <RouterProvider router={router} />
}

export default Router
