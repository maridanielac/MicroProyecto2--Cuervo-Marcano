import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ClubPage from './pages/ClubPage.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import ClubDetail from './pages/ClubDetail.tsx';

const router = createBrowserRouter([
  {
    path: "/clubs",
    element: <ClubPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)