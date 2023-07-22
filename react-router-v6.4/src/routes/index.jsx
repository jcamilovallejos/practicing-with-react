import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import NotFound from '../pages/NotFound';
import LayoutPublic from '../layouts/LayoutPublic';
import { loaderBlog } from '../pages/Blog';
import Post, {LoaderPost} from '../pages/Post';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/blog',
                element: <Blog />,
                loader: loaderBlog
            },
            {
                path: '/blog/:id',
                element: <Post />,
                loader: LoaderPost
            }
        ]
    },

]);