import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext, useUserContextInfo } from './contexts/userContext';
import { ErrorPage } from './pages/ErrorPage';
import { FemmeSauvage } from './pages/FemmeSauvage';
import { LandingPage } from './pages/LandingPage';
import { QuiSuisJe } from './pages/QuiSuisJe';
import { RituelTantrique } from './pages/RituelTantrique';
import { SonsMantrasTantra } from './pages/SonsMantrasTantra';
import { TantraEtConstellations } from './pages/TantraEtConstellations';

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
  {
    path: '/stage/tantra-et-constellations',
    element: <TantraEtConstellations />,
  },
  {
    path: '/massage/rituel-tantrique',
    element: <RituelTantrique />,
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
