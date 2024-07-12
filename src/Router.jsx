import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import App from './components/App/App.jsx'

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
                    {
                        name: 'Colophon',
                        path: '/colophon',
                    },
                ],
            },
            {
                name: 'Projects',
                path: '/projects',
                children: [
                    {
                        name: 'Personal',
                        path: '/personal',
                    },
                    {
                        name: 'Professional',
                        path: '/professional',
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
