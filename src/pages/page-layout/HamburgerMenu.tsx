import { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AccountFullNameBadge,
  CreateAccountBadge,
  LoginAccountBadge,
  LogoutAccountBadge,
} from '../../components/auth/MyAccount';

export const HambugerMenu: FC = () => {
  const location = useLocation();
  const isOnHomePage = useMemo(() => {
    return location.pathname === '/';
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-dark sticky-top position-absolute top-0 end-0 w-100">
      <div className="container-fluid pe-0 me-1 d-flex flex-row">
        {isOnHomePage ? (
          <div className="flex-grow-1"></div>
        ) : (
          <Link to="/" className="navbar-brand text-reset">
            <i className="bi bi-house-up fs-3"></i>
          </Link>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon fs-8"></span>
        </button>

        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Marie-Anne Sévin
            </h5>
            <button
              id="hamburger-close-button"
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body fs-6 pt-0">
            <ul className="navbar-nav justify-content-start align-items-start flex-grow-1 pe-3">
              <li className="nav-item w-100 text-start">
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    <Link to="/" className="text-decoration-none text-light" aria-current="page">
                      Accueil
                    </Link>
                  </span>
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    <Link to="/qui-suis-je" className="text-decoration-none text-light">
                      Qui suis-je ?
                    </Link>
                  </span>
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-4">
                <div className=" w-100 border-bottom border-secondary fs-3 text-secondary">
                  Particuliers
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <Link to="/massage/rituel-tantrique">
                    <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                      Rituel tantrique
                    </span>
                  </Link>
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-4">
                <div className=" w-100 border-bottom border-secondary fs-3 text-secondary">
                  Stages
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <Link to="/stage/sons-mantras-tantra">
                    <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                      Sons Mantras Tantra
                    </span>
                  </Link>
                  <Link to="/stage/femme-sauvage">
                    <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                      À la rencontre de la femme sauvage
                    </span>
                  </Link>
                  <Link to="/stage/tantra-et-constellations">
                    <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                      Tantra et Constellations
                    </span>
                  </Link>
                </div>
              </li>
              {/* <li className="nav-item w-100 text-start mt-4">
                <div className=" w-100 border-bottom border-secondary fs-3 text-secondary">
                  Institutionnels
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    lorem ipsum
                  </span>
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    lorem ipsum
                  </span>
                </div>
              </li> */}
              <li className="nav-item w-100 text-start mt-4">
                <div className="w-100 border-bottom border-secondary fs-6 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Mon espace client</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <AccountFullNameBadge />
                  <CreateAccountBadge />
                  <LoginAccountBadge />
                  <LogoutAccountBadge />
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-4">
                <div className="w-100 border-bottom border-secondary fs-6 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Crédits photos</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                    Nicolas Rilat photography
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

HambugerMenu.displayName = 'HambugerMenu';
