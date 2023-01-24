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
            background: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(79, 79, 93, 0.30))',
            height: '100vh',
          }}
        >
          <div className="container h-100 d-flex flex-column justify-content-between align-items-center">
            <div className="p-2 flex-grow-1 bd-highlight"></div>
            <footer className="">
              <div className="d-flex flex-column align-items-center">
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
