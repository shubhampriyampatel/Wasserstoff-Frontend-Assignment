import './styles/app.module.css';
import { AllRoutes } from './components/AllRoutes';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
