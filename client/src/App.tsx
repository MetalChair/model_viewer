import './App.css';
import PlanetViewer from './PlanetViewer/PlanetViewer';

function App() {
  return (
    <div className = "page-container">
      <div className = "sidebar"></div>
      <div className = "viewer">
        <PlanetViewer></PlanetViewer>
      </div>
      <div className = "footer"></div>
    </div>
  );
}

export default App;
