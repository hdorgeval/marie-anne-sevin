import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext, useUserContextInfo } from './contexts/userContext';
import { ErrorPage } from './pages/ErrorPage';
import { FemmeSauvage } from './pages/FemmeSauvage';
import { LandingPage } from './pages/LandingPage';
import { MentionsLegales } from './pages/MentionsLegales';
import { QuiSuisJe } from './pages/QuiSuisJe';
import { RituelTantrique } from './pages/RituelTantrique';
import { SonsMantrasTantra } from './pages/SonsMantrasTantra';
import { TantraEtConstellations } from './pages/TantraEtConstellations';
import { Temoignages } from './pages/Temoignages';
import { VoixEtBolsTibetains } from './pages/VoixEtBolsTibetains';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />,
  },
  {
    path: '/qui-suis-je',
    element: <QuiSuisJe />,
  },
  {
    path: '/temoignages',
    element: <Temoignages />,
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
    path: '/stage/voix-et-bols-tibetains',
    element: <VoixEtBolsTibetains />,
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
