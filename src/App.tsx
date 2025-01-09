import { Outlet } from 'react-router-dom';
import './App.css'
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <div>
      <MainLayout />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
