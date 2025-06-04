import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import SpeakersPage from './Pages/Speakers.tsx';

// eslint-disable-next-line react-refresh/only-export-components
const AppRoutes = () => {
  const routes = [
    // Public pages
    { path: "/", element: <App /> },
    { path: "/speaker/:id", element: <SpeakersPage /> },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
// Render Application
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found");
} else {
  createRoot(rootElement).render(
    <StrictMode>
            <AppRoutes />
    </StrictMode>
  );
}
