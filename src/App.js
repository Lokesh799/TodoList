import logo from './logo.svg';
import './App.css'; 
import 'G:\react\reactcompo\node_modules\bootstrap\dist\css\bootstrap.min.css.map'
import App from './CRA App2/App';

function App() {
  return (
  <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <App/> 
          Learn React
        </a>
      </header>
    </div>
    
  </>
  );
}

export default App;
