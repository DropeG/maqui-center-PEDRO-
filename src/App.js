import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import Banner from './components/Banner';
import Categorias from './components/Categorias';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="./Categorias" element={<Categorias />} />
          {/* <Route path="/productos" element={<Productos />} />
         
          <Route path="/contacto" element={<Contacto />} /> */}
        </Routes>
        <SearchBar />
        <Banner />
      </Router>
    </div >
  );
}

export default App;
