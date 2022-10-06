import { Outlet } from 'react-router';
import '../App.css';
import Navbar from './Navbar'
import Search from './Search';


function App() {
  
  return (
    <div className="app">
      <Navbar/>
      <Search/>
      <Outlet/>
    </div>
  );
}

export default App;
