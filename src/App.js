import './App.css';
import { Heading } from './components/Heading';
import { Slider } from './components/Slider';
import { Recovery } from './components/Recovery';
import { Graph } from './components/Graph';

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="App_Main_Section">
        <Slider />
        <div>
          <Recovery />
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default App;
