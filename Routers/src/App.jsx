import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Movie from './Pages/movie/Movie';
import About from './Pages/about/About';
import Contact, { contactData } from './Pages/contact/Contact';
import Home from './Pages/Home';
import ErrorPages from './Pages/ErrorPages';
import { getApiData } from './api/GetApi'; // Correct import
import MovieDetails from './Components/UI/MovieDetails';
import { getDetails } from './api/GetMovie';
// import './index.css'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPages />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/movie',
          element: <Movie />,
          loader: getApiData,
        },
        {
          path: '/movie/:movieID',
          element: <MovieDetails />,
          loader: getDetails,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
