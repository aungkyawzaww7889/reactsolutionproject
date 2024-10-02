import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'flowbite';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
