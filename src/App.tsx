import './App.css';
require('dotenv').config()
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <div className='bg' />
      <div className='router'>
        <Router />
      </div>
    </div >
  );
}

export default App;
