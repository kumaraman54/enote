import Navbar from './components/Navbar'
import './App.css';
import { Outlet } from 'react-router-dom'
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Alert Alert={Alert}/>
     <Outlet/>
    </div>
  );
}

export default App;
