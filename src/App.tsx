import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { FemmeSauvage } from './components/FemmeSauvage';
import { LandingPage } from './components/LandingPage';
import { QuiSuisJe } from './components/QuiSuisJe';
import { SonsMantrasTantra } from './components/SonsMantrasTantra';
import { UserContext, useUserContextInfo } from './contexts/userContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/qui-suis-je',
    element: <QuiSuisJe />,
  },
  {
    path: '/stage/sons-mantras-tantra',
    element: <SonsMantrasTantra />,
  },
  {
    path: '/stage/femme-sauvage',
    element: <FemmeSauvage />,
  },
]);

function App() {
  const [userInfo] = useUserContextInfo();

  return (
    <div className="App">
      <UserContext.Provider value={userInfo}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
