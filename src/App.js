import logo from './logo.svg';
import './App.css';
import ShowSV from './Component/ShowSV';


function App() {
  return (
    <div className="App">
      <div className='img-react'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='container'>
        <ShowSV />
      </div>

    </div>
  );
}

export default App;
