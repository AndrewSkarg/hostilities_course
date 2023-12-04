import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import './index.css'
import ErrorPage from './pages/ErrorPage.tsx'
import Layout from './pages/Layout.tsx'
import Posts, { postsLoader } from './pages/Posts.tsx'
import { store } from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx'
import About from './pages/About.tsx';
import News from './pages/News.tsx'
import Contacts from './pages/Contacts.tsx';
import Gallery from './pages/Gallery.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/gallery',
        element: <Gallery />,
        // loader: postsLoader,
      },
      {
        path: '', element: <Home />,

      },
      {
        path: '/about', element: <About />,

      },
      {
        path: '/news', element: <News />,
        loader: postsLoader,
      },

      {
        path: '/contacts', element: <Contacts />,

      },
{
        path: '/gallery', element: <Gallery />,

      },

    ]
  },


]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your app with Provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
