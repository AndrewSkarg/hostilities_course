import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import './index.css'
import ErrorPage from './pages/ErrorPage.tsx'
import Layout from './pages/Layout.tsx'
import { store } from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx'
import Dashboard from './pages/Dashboard.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: '', element: <Home />,

      },

      {
        path: '/dashboard', element: <Dashboard />,

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
