import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import App from './App/App.jsx'

const siteNavigationMap = {
    home: {
        name: 'Home',
        path: '/',
        // element: ,
        children: [
            {
                name: 'About',
                path: '/about',
                children: [
                    {
                        name: 'Now',
                        path: '/now',
                    },
                    {
                        name: 'Reading',
                        path: '/reading',
                    },
                ],
            },
            {
                name: 'Projects',
                path: '/projects',
                children: [
                    {
                        name: 'Personal',
                        path: '/personal-projects',
                    },
                    {
                        name: 'Professional',
                        path: '/professional-projects',
                    },
                ],
            },
            {
                name: 'Blog',
                path: '/blog',
                children: [
                    {
                        name: '2023',
                        path: '/2023',
                    },
                    {
                        name: '2024',
                        path: '/2024',
                    },
                ],
            },
        ],
    },
    error: {
        url: '',
    },
}

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
