import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  AccountFullNameBadge,
  CreateAccountBadge,
  LoginAccountBadge,
  LogoutAccountBadge,
} from './MyAccount';

export const HambugerMenu: FC = () => {
  return (
    <nav className="navbar navbar-dark sticky-top position-absolute top-0 end-0">
      <div className="container-fluid pe-0 me-1">
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
                      Acceuil
                    </Link>
                  </span>
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    <Link to="/qui-suis-je" className="text-decoration-none text-light">
                      Qui suis-je ?
                    </Link>
                  </span>
                </div>
              </li>
              <li className="nav-item w-100 text-start"></li>
              <li className="nav-item w-100 text-start mt-4">
                <div className=" w-100 border-bottom border-secondary fs-3 text-secondary">
                  Particuliers
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    Massage tantrique
                  </span>
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    Soirée Tantra
                  </span>
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    Matinée Tantra
                  </span>
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    Tantra Homme
                  </span>
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    Codev
                  </span>
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-4">
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
              </li>
              <li className="nav-item w-100 text-start mt-4">
                <div className="w-100 border-bottom border-secondary fs-3 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
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
                <div className="w-100 border-bottom border-secondary fs-3 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Crédits photos</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
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
