import './App.css';
import { Heading } from './components/Heading';
import { Slider } from './components/Slider';
import { Recovery } from './components/Recovery';
import { Chart } from './components/Chart';

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="App_Main_Section">
        <Slider />
        <div>
          <Recovery />
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default App;
