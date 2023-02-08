import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
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
    path: '/sons-mantras-tantra',
    element: <SonsMantrasTantra />,
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
