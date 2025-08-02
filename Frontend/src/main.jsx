import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Homepage from './routes/Homepage.jsx';

import SignInPage from './routes/Signinpage.jsx';
import SignUpPage from './routes/Signuppage.jsx';
import ChatPage from './routes/ChatPage.jsx';
import RootLayout from './layouts/RootLayout.jsx';
import DashboardPage from './routes/DashboardPage.jsx';
import DashboardLayout from './layouts/Dashboardlayout.jsx';





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
        element: <DashboardLayout />,
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
