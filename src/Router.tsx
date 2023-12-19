import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/diego-chara/',
    element: <HomePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
