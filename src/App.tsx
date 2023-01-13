import 'bootstrap-icons/font/bootstrap-icons.css';
import { ActivityCard } from './ActivityCard';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <ActivityCard />
      </div>
      <footer>
        <div className="d-flex flex-column align-items-center">
          <span>
            <i className="bi bi-c-circle"></i> Marie-Anne Sévin - 2023 - site beta
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
