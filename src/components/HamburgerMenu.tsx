import { FC } from 'react';
import { Link } from 'react-router-dom';

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
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body fs-4">
            <ul className="navbar-nav justify-content-start align-items-start flex-grow-1 pe-3">
              <li className="nav-item w-100 text-start">
                <Link to="/" className="nav-link" aria-current="page">
                  Acceuil
                </Link>
              </li>
              <li className="nav-item w-100 text-start">
                <Link to="/qui-suis-je" className="nav-link">
                  Qui suis-je ?
                </Link>
              </li>
              <li className="nav-item w-100 text-start mt-4">
                <div className=" w-100 border-bottom border-secondary fs-3">Particuliers</div>
                <div className="d-flex p-1 flex-row align-items-center">
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    Massage tantrique
                  </span>
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    Soirées Tantra
                  </span>
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-4">
                <div className=" w-100 border-bottom border-secondary fs-3">Institutionnels</div>
                <div className="d-flex p-1 flex-row align-items-center">
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    lorem ipsum
                  </span>
                  <span className="badge rounded-pill text-bg-dark fs-6 border border-secondary m-1">
                    lorem ipsum
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
