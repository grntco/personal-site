import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
// import App from './components/App/App.jsx'
import Blog from './pages/Blog.jsx'
import Library from './pages/Library.jsx'
import Post from './pages/Post.jsx'
import Page from './components/layout/Page/Page.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

// const siteNavigationMap = {
//     home: {
//         name: 'Home',
//         path: '/',
//         // element: ,
//         children: [
//             {
//                 name: 'About',
//                 path: '/about',
//                 children: [
//                     {
//                         name: 'Now',
//                         path: '/now',
//                     },
//                     {
//                         name: 'Reading',
//                         path: '/reading',
//                     },
//                     {
//                         name: 'Colophon',
//                         path: '/colophon',
//                     },
//                     {
//                         name: 'Things',
//                         path: '/things',
//                     },
//                 ],
//             },
//             {
//                 name: 'Projects',
//                 path: '/projects',
//                 children: [
//                     {
//                         name: 'Personal',
//                         path: '/personal',
//                     },
//                     {
//                         name: 'Professional',
//                         path: '/professional',
//                     },
//                 ],
//             },
//             {
//                 name: 'Blog',
//                 path: '/blog',
//                 children: [
//                     {
//                         name: '2023',
//                         path: '/2023',
//                     },
//                     {
//                         name: '2024',
//                         path: '/2024',
//                     },
//                 ],
//             },
//         ],
//     },
//     error: {
//         url: '',
//     },
// }

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'projects',
            element: <Projects />,
        },
        {
            path: 'blog',
            element: <Blog />,
        },
        {
            path: '/blog/:slug',
            element: <Post />,
        },
        {
            path: 'library',
            element: <Library />,
        },
        {
            path: '/library/:slug',
            element: <Post />,
        },
        {
            path: '/about',
            element: <Page contentPath='about' />,
        },
        {
            path: '/now',
            element: <Page contentPath='now' />,
        },
        // {
        //     path: '/colophon',
        //     element: <Page contentPath='colophon' />,
        // },
        // {
        //     path: '/things',
        //     element: <Page contentPath='things' />,
        // },
    ])
    return <RouterProvider router={router} />
}

export default Router
