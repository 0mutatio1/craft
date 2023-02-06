import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import ErrorPage from './error-page';
import { Home, CraftButton, CraftInput } from '../ui';


const router = createBrowserRouter([
    {
      path: '/craft',
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: '/craft/ui',
      element: <Home />,
      children: [
        {
          path: '/craft/ui/install',
          element: <div>Install</div>
        },
        {
          path: '/craft/ui/button',
          element: <CraftButton />
        },
        {
          path: '/craft/ui/input',
          element: <CraftInput />
        }
      ]
    }
  ])

  export default router;