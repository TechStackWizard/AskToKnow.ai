import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Homepage from './routes/Homepage.jsx';
import Dashboardpage from './routes/Dashboardpage.jsx';

import Dashboardlayout from './layouts/Dashboardlayout.jsx';

import SignInPage from './routes/Signinpage.jsx';
import SignUpPage from './routes/Signuppage.jsx';
import ChatPage from './routes/ChatPage.jsx';
import DashboardPage from './routes/Dashboardpage.jsx';
import RootLayout from './layouts/RootLayout.jsx';





const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/sign-in/*',
        element: <SignInPage />
      },
      {
        path: '/sign-up/*',
        element: <SignUpPage />
      },
      {
        path: '/',
        element: <Homepage />
      },
      {
        element: <Dashboardlayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
          {
            path: "/dashboard/chats",
            element: <ChatPage />
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
