import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './components/Layouts/MainLayout';
import Home from './Pages/Home';
import FetchOld from './Pages/FetchOld';
import FetchRQ from './Pages/FetchRQ';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Fetchind from './components/Layouts/UI/Fetchind';
import InfinitScroll from './Pages/InfinitScroll';

// Create a QueryClient instance
const queryClient = new QueryClient();

const Tanstack = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/trad', element: <FetchOld /> },
                { path: '/rq', element: <FetchRQ /> },
                { path: '/rq/:id', element: <Fetchind /> },
                { path: '/rq/infinite', element: <InfinitScroll />},
            ],
        },
    ]);

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default Tanstack;
