import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex p-4 flex-row align-items-center">
          <span className="fs-1">
            <a
              className="nav-link"
              href="https://www.facebook.com/mariemusique"
              rel="nofollow"
              target="_blank"
              aria-label="my facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </span>
          <span className="fs-1 ms-3">
            <a
              className="nav-link"
              href="https://wa.me/33683479774"
              rel="nofollow"
              target="_blank"
              aria-label="my whatsapp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </span>
          <span className="fs-1 ms-3">
            <a
              className="nav-link"
              href="https://www.youtube.com/channel/UC3zRsrGmij6pjczLlm8kpXA"
              rel="nofollow"
              target="_blank"
              aria-label="my youtube"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </span>
          <span className="fs-1 ms-3">
            <a
              className="nav-link"
              href="https://www.instagram.com/marieannemusique/?hl=fr"
              rel="nofollow"
              target="_blank"
              aria-label="my instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </span>
          <span className="fs-1 ms-3">
            <a
              className="nav-link"
              href="tel:0683479774"
              rel="nofollow"
              target="_blank"
              aria-label="m'appeler par téléphone"
            >
              <i className="bi bi-telephone-outbound"></i>
            </a>
          </span>
          <span className="fs-1 ms-3">
            <a
              className="nav-link"
              href="mailto:arts78.mas@gmail.com"
              rel="nofollow"
              target="_blank"
              aria-label="m'envoyer un mail"
            >
              <i className="bi bi-envelope-at"></i>
            </a>
          </span>
          <span className="fs-1 ms-3">
            <a
              className="nav-link"
              href="https://amzn.eu/d/dd3iN4K"
              rel="nofollow"
              target="_blank"
              aria-label="voir mon livre 'harmonie pédagogique' sur Amazon"
            >
              <i className="bi bi-book"></i>
            </a>
          </span>
        </div>

        <span className="fs-7 fw-lighter mb-2">
          <i className="bi bi-c-circle me-2"></i>tous droits réservés Marie-Anne Sévin - 2023
        </span>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
