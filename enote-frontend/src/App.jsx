import Navbar from './components/Navbar'
import './App.css';
import { Outlet } from 'react-router-dom'
import Alert from './components/Alert';



function App({alert}) {

  return (
    <div className="App">
     <Navbar/>
     <Alert alert={alert}/>
     <Outlet/>
    </div>
  );
}

export default App;
