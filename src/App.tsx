import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserContext, useUserContextInfo } from './contexts/userContext';
import { Calendrier } from './pages/Calendrier';
import { Constellations } from './pages/Constellations';
import { ErrorPage } from './pages/ErrorPage';
import { FemmeSauvage } from './pages/FemmeSauvage';
import { InitiationMassageMeditatif } from './pages/InitiationMassageMeditatif';
import { LaVoixDuCorps } from './pages/LaVoixDuCorps';
import { LandingPage } from './pages/LandingPage';
import { MassageMeditatif } from './pages/MassageMeditatif';
import { MentionsLegales } from './pages/MentionsLegales';
import { QuiSuisJe } from './pages/QuiSuisJe';
import { RituelTantrique } from './pages/RituelTantrique';
import { SoireeTantra } from './pages/SoireeTantra';
import { SonsMantrasTantra } from './pages/SonsMantrasTantra';
import { TantraEtConstellationsBourneville } from './pages/TantraEtConstellationsBourneville';
import { TantraFemme } from './pages/TantraFemme';
import { TantraHomme } from './pages/TantraHomme';
import { Temoignages } from './pages/Temoignages';
import { ToucherPresentToucherConscient } from './pages/ToucherPresentToucherConscient';
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
    path: '/calendrier',
    element: <Calendrier />,
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
    path: '/stage/tantra-femme',
    element: <TantraFemme />,
  },
  {
    path: '/stage/tantra-homme',
    element: <TantraHomme />,
  },
  {
    path: '/stage/tantra-et-constellations',
    element: <TantraEtConstellationsBourneville />,
  },
  {
    path: '/stage/voix-et-bols-tibetains',
    element: <VoixEtBolsTibetains />,
  },
  {
    path: '/stage/la-voix-du-corps',
    element: <LaVoixDuCorps />,
  },
  {
    path: '/stage/toucher-present-toucher-conscient',
    element: <ToucherPresentToucherConscient />,
  },
  {
    path: '/massage/rituel-tantrique',
    element: <RituelTantrique />,
  },
  {
    path: '/massage/massage-meditatif',
    element: <MassageMeditatif />,
  },
  {
    path: '/initiation/massage-meditatif',
    element: <InitiationMassageMeditatif />,
  },
  {
    path: '/formation/massage-meditatif',
    element: <Navigate to="/initiation/massage-meditatif" />,
  },
  {
    path: '/constellations',
    element: <Constellations />,
  },
  {
    path: '/soiree-tantra',
    element: <SoireeTantra />,
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
