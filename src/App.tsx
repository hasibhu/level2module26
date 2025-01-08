import './App.css'
import MainLayout from './components/layout/MainLayout';
import Navbar from './pages/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
     <MainLayout/>
    </div>
  );
}

export default App;
