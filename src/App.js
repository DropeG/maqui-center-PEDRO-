import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Nosotros from "./components/Nosotros"

// import Nosotros from './pages/Nosotros';

import {BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          
          {/* <Route path="./Categorias" element={<Categorias />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />  */}
        </Routes>
      </Router>
    </div >
  );
}

export default App;
