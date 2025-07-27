import './styles/tailwind.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ApplicationRoutes } from './components/ApplicationRoutes';
import { LIGHT_THEME } from './utils/theme.palette';

function App() {
  return (
    <div style={{ backgroundColor: LIGHT_THEME.background }} className="min-h-screen">
      <BrowserRouter>
        <Navbar />
        <ApplicationRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
