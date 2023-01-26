import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url("/images/marie-anne-sevin.webp")`,
          height: '100vh',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.4), rgba(79, 79, 93, 0.30))',
            height: '100vh',
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-between align-items-center">
            <div className="mt-4">
              <span className="text-uppercase fs-1 fw-bolder">Marie-Anne Sévin</span>
            </div>
            <div>
              <span className="text-capitalize fs-7 fw-bolder font-monospace">
                musicienne, masseuse, thérapeute
              </span>
            </div>
            <div className="p-2 flex-grow-1 bd-highlight"></div>
            <footer className="">
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex p-4 flex-row align-items-center">
                  <span className="fs-1">
                    <a
                      className="nav-link"
                      href="https://www.facebook.com/mariemusique"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                  </span>
                  <span className="fs-1 ms-4">
                    <a
                      className="nav-link"
                      href="https://wa.me/33683479774"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </span>
                  <span className="fs-1 ms-4">
                    <a
                      className="nav-link"
                      href="https://www.youtube.com/channel/UC3zRsrGmij6pjczLlm8kpXA"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="bi bi-youtube"></i>
                    </a>
                  </span>
                  <span className="fs-1 ms-4">
                    <a
                      className="nav-link"
                      href="https://www.instagram.com/marieannemusique/?hl=fr"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </span>
                  <span className="fs-1 ms-4">
                    <a className="nav-link" href="tel:0683479774" rel="nofollow" target="_blank">
                      <i className="bi bi-telephone-outbound"></i>
                    </a>
                  </span>
                  <span className="fs-1 ms-4">
                    <a
                      className="nav-link"
                      href="mailto:arts78.mas@gmail.com"
                      rel="nofollow"
                      target="_blank"
                    >
                      <i className="bi bi-envelope-at"></i>
                    </a>
                  </span>
                </div>

                <span>
                  <i className="bi bi-c-circle"></i> Marie-Anne Sévin - 2023 - site beta
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
